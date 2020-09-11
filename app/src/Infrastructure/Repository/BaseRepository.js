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
            await this.createModelIncludes(entity);
            let modelInstance = await this.model.upsert(entity);
            entity.id = modelInstance.id;

        } catch (error) {
            throw new Error(error);
        }
    }

    async createModelIncludes(entity) {
        for (const i of this.model.includes) {
            const modelAttribute = i.as;
            const dbModel = i.model;
            if (entity[modelAttribute] === undefined) {
                continue;
            }
            for (let i = 0; i < entity[modelAttribute].length; i++) {
                if (entity[modelAttribute][i].id !== undefined) {
                    continue;
                }
                let modelInstance = await dbModel.create(entity[modelAttribute][i]);
                entity[modelAttribute][i].id = modelInstance.id;
            }
        }
    }

    async find(field, value) {
        return await this.findByField(field, value);
    }

    async findById(id) {
        return await this.findByField('id', id);
    }

    // async findAll(args) {
    //     // where clause
    //     const where = {};
    //
    //     // if (args.filter) {
    //     //     // loop
    //     //     Object.keys(args.filter).forEach(field => {
    //     //         // set the where clause
    //     //         where[field] = {};
    //     //
    //     //         // get conditions
    //     //         const conditions = args.filter[field];
    //     //
    //     //         Object.keys(conditions).forEach(operation => {
    //     //             where[field] = {[Op[operation]]: conditions[operation]};
    //     //         });
    //     //     });
    //     // }
    //
    //     const result = await this.model.findAndCountAll({where});
    //
    //     // return
    //     return {
    //         results: result.rows,
    //         total: result.count,
    //     };
    // }

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

    async findAll(filter = {}) {
        const where = {};
        Object.keys(filter).forEach(field => {
            // set the where clause
            where[field] = {};

            // get conditions
            const conditions = filter[field];

            Object.keys(conditions).forEach(operation => {
                where[field] = {[Op[operation]]: conditions[operation]};
            });
        });
        console.log(where);

        let result = await this.model.findAndCountAll({where, include: this.model.includes, raw: true, nest: true});
        let models = [];
        result.rows.forEach(r => models.push(deserialize(this.domain, r)));
        return models;
    }
}

module.exports = BaseRepository;