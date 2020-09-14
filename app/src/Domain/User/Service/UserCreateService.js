import UserRepositoryInterface from "/Domain/User/Repository/UserRepositoryInterface";
import User from "../Model/User";
import {Password} from "../ValueObject/Password";

export default class UserCreateService {
    #userRepository: UserRepositoryInterface;

    constructor({userRepository}) {
        this.#userRepository = userRepository;
    }

    async createUser(username: string, name: string, email: string, password: Password, nif: string, address: string, gender: string,
                     age: Number, nationality: string, phone: string, type: string, birthDate: Date, postalCode: string,
                     availableToTravel: boolean, isTeamLeader: boolean) {
        let user: User = new User(
            username,
            name,
            email,
            password,
            nif,
            address,
            gender,
            age,
            nationality,
            phone,
            type,
            birthDate,
            postalCode,
            availableToTravel,
            isTeamLeader
        );
        await this.#userRepository.save(user)
        return user;
    }

    async getUser(userId: Number) {
        return this.#userRepository.getUserById(userId);
    }

}