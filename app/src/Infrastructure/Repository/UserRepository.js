const BaseRepository = require('./BaseRepository');

import User from "Domain/User/Model/User";
import UserRepositoryInterface from 'Domain/User/Repository/UserRepositoryInterface';

export default class UserRepository extends BaseRepository implements UserRepositoryInterface {
    constructor({database}) {
        super(database.models.UserModel, User);
    }

    async getUserById(userId: Number): ?User {
        return await this.findById(userId);
    }

    async getUserByEmail(email: string): ?User {
        return await this.findByField('email', email);
    }
    
    async listUsers(page: Number, limit: Number): User[] {
        return await this.findAll(null, page, limit);
    }

    async save(user: User) {
        await this.create(user);
    }
}