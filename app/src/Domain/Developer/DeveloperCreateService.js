import DeveloperRepositoryInterface from "./Repository/DeveloperRepositoryInterface";
import UserCreateService from "../User/Service/UserCreateService";
import User from "../User/Model/User";
import Developer from "./Model/Developer";

export default class DeveloperCreateService {

    #developerRepository: DeveloperRepositoryInterface;
    #userCreateService: UserCreateService;

    constructor({developerRepository, userCreateService}) {
        this.#developerRepository = developerRepository;
        this.#userCreateService = userCreateService;
    }

    async createDeveloper(username: string, email: string, password: string, n_contribuinte: string, morada: string, sexo: string, idade: Number,
                    nacionalidade: string, telefone: string, tipo: string, data_nascimento: Date) {
        let user: User = await this.#userCreateService.createUser(username, email, password, n_contribuinte, morada, sexo, idade, nacionalidade, telefone, tipo, data_nascimento)
        let developer: Developer = new Developer(user.id);
        this.#developerRepository.save(developer);
    }

}