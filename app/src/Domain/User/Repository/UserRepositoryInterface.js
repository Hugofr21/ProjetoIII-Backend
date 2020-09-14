import User from "../Model/User";

export default class UserRepositoryInterface {
    getUserById(userId: Number): ?User {
    }

    async getUserByEmail(email: string): ?User {
    }

    async listUsers(page: Number, limit: Number): User[] {
    }

    save(user: User): void {
    }
}