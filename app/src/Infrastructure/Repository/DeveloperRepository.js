const BaseRepository = require('./BaseRepository');

import Developer from "Domain/Developer/Model/Developer";
import DeveloperRepositoryInterface from 'Domain/Developer/Repository/DeveloperRepositoryInterface';

export default class DeveloperRepository extends BaseRepository implements DeveloperRepositoryInterface {
    constructor({database}) {
        super(database.models.DeveloperModel, Developer);
    }

    async getDeveloperById(userId: Number): ?Developer {
        return await this.findById(userId);
    }

    async save(developer: Developer) {
        await this.create(developer);
    }
}