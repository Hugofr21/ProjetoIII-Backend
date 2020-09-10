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

    async search(args, active = true) {
        // where clause
        const where = {};

        if (active) {
            where.active = {
                [Op.eq]: 1,
            };
        }

        if (args.filter) {
            // loop
            Object.keys(args.filter).forEach(field => {
                // set the where clause
                where[field] = {};

                // get conditions
                const conditions = args.filter[field];

                Object.keys(conditions).forEach(operation => {
                    where[field] = {[Op[operation]]: conditions[operation]};
                });
            });
        }

        const result = await this.model.findAndCountAll({where});

        // return
        return {
            results: result.rows,
            total: result.count,
        };
    }

    async update(data) {
    }

    async delete() {
    }

    async findByField(field, value, active = true) {
        // set the where clause
        const where = {[field]: value};

        /*if (active) {
            where.active = {
                [Op.eq]: 1,
            };
        }*/

        // perform search
        let result = await this.model.findOne({where, include: this.model.includes});
        let modelInstance = result.get({plain: true})
        return deserialize(this.domain, modelInstance);
    }
}

module.exports = BaseRepository;