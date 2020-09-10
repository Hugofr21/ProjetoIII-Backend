import UserRepositoryInterface from "/Domain/User/Repository/UserRepositoryInterface";
import User from "../Model/User";

export default class UserCreateService {
    #userRepository: UserRepositoryInterface;

    constructor({userRepository}) {
        this.#userRepository = userRepository;
    }

    async createUser(username: string, email: string, password: string, n_contribuinte: string, morada: string, sexo: string, idade: Number,
                     nacionalidade: string, telefone: string, tipo: string, data_nascimento: Date) {
        let user: User = new User(username, email, password, n_contribuinte, morada, sexo, idade, nacionalidade, telefone, tipo, data_nascimento);
        await this.#userRepository.save(user);
        return user;
    }

    async getUser(userId: Number) {
        return this.#userRepository.getUserById(userId);
    }

}