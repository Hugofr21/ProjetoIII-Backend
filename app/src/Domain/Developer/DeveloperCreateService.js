import DeveloperRepositoryInterface from "./Repository/DeveloperRepositoryInterface";
import UserCreateService from "../User/Service/UserCreateService";
import User from "../User/Model/User";
import Developer from "./Model/Developer";
import {Password} from "../User/ValueObject/Password";

export default class DeveloperCreateService {

    #developerRepository: DeveloperRepositoryInterface;
    #userCreateService: UserCreateService;

    constructor({developerRepository, userCreateService}) {
        this.#developerRepository = developerRepository;
        this.#userCreateService = userCreateService;
    }

    async createDeveloper(username: string, email: string, password: Password, nif: string, address: string, gender: string, age: Number,
                          nationality: string, phone: string, type: string, birthDate: Date) {
        let user: User = await this.#userCreateService.createUser(username, email, password, nif, address, gender, age, nationality, phone, type, birthDate);
        let developer: Developer = new Developer(user.id);
        this.#developerRepository.save(developer);
    }

}