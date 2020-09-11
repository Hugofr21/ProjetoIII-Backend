import User from "../Model/User";

export default class UserRepositoryInterface {
    getUserById(userId: Number): ?User {
    }

    async getUserByEmail(email: string): ?User {
    }

    save(user: User): void {
    }
}