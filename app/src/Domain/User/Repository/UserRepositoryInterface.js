import User from "../Model/User";

export default class UserRepositoryInterface {
    getUserById(userId: Number): ?User {
    }

    save(user: User): void {

    }
}