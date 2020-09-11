import UserRepositoryInterface from "/Domain/User/Repository/UserRepositoryInterface";
import User from "../Model/User";
import {Password} from "../ValueObject/Password";

export default class UserCreateService {
    #userRepository: UserRepositoryInterface;

    constructor({userRepository}) {
        this.#userRepository = userRepository;
    }

    async createUser(username: string, email: string, password: Password, nif: string, address: string, gender: string, age: Number,
                     nationality: string, phone: string, type: string, birthDate: Date) {
        let user: User = new User(username, email, password, nif, address, gender, age, nationality, phone, type, birthDate);
        await this.#userRepository.save(user);
        return user;
    }

    async getUser(userId: Number) {
        return this.#userRepository.getUserById(userId);
    }

}