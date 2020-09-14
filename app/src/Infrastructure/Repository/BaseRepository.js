const {Op} = require('sequelize');
import {serialize, deserialize} from "serializr"

class BaseRepository {
    constructor(model, domain) {
        this.model = model;
        this.domain = domain;
    }

    async create(entity) {
        if (!(entity instanceof this.domain)) {
            console.log('entity is not a domain model!');
        }

        try {
            console.log(12323);
            let model = serialize(this.domain, entity);
            console.log(22222);
            console.log(model);
            this.model.valueObjects.forEach(vo => model[vo.field] = model[vo.field].value);
            await this.createModelIncludes(model);
            if (entity.id === undefined) {
                let modelInstance = await this.model.create(model);
                entity.id = modelInstance.id;
            } else {
                await this.model.update(model, {where: {id: entity.id}});
            }

        } catch (error) {
            throw new Error(error);
        }
    }

    async createModelIncludes(model) {
        for (const i of this.model.includes) {
            const modelAttribute = i.as;
            const dbModel = i.model;
            if (model[modelAttribute] === undefined) {
                continue;
            }
            for (let i = 0; i < model[modelAttribute].length; i++) {
                if (model[modelAttribute][i].id !== undefined) {
                    continue;
                }
                let modelInstance = await dbModel.create(model[modelAttribute][i]);
                model[modelAttribute][i].id = modelInstance.id;
            }
        }
    }

    async find(field, value) {
        return await this.findByField(field, value);
    }

    async findById(id) {
        return await this.findByField('id', id);
    }

    async update(data) {
    }

    async delete() {
    }

    async findByField(field, value) {
        const where = {[field]: value};

        let result = await this.model.findOne({where, include: this.model.includes});
        let modelInstance = result.get({plain: true});
        let model = deserialize(this.domain, modelInstance);
        this.model.valueObjects.forEach(vo => model[vo.field] = deserialize(vo.model, {value: modelInstance[vo.field]}));
        return model;
    }

    async findAll(filter = null, page: Number = null, limit: Number = null) {
        const where = {};
        if (filter !== null) {
            Object.keys(filter).forEach(field => {
                // set the where clause
                where[field] = {};

                // get conditions
                const conditions = filter[field];

                Object.keys(conditions).forEach(operation => {
                    where[field] = {[Op[operation]]: conditions[operation]};
                });
            });
        }
        const params = {where, include: this.model.includes, nest: true};
        if (page !== null && limit != null) {
            params.offset = page * limit;
            params.limit = limit;
        }

        let rows = [];
        let models = [];
        let result = await this.model.findAndCountAll(params);
        result.rows.forEach(row => rows.push(row.get({ plain: true })));
        rows.forEach(r => {
            let model = deserialize(this.domain, r);
            this.model.valueObjects.forEach(vo => model[vo.field] = deserialize(vo.model, {value: model[vo.field]}));
            models.push(model);
        });
        if (page !== null && limit != null) {
            return {
                count: result.count,
                rows: models
            };
        }
        return models;
    }
}

module.exports = BaseRepository;