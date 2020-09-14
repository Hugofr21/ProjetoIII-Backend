import DeveloperRepositoryInterface from "./Repository/DeveloperRepositoryInterface";
import Developer from "./Model/Developer";

export default class DeveloperCreateService {

    #developerRepository: DeveloperRepositoryInterface;

    constructor({developerRepository}) {
        this.#developerRepository = developerRepository;
    }

    async createDeveloper(userId: Number) {
        let developer: Developer = new Developer(userId);
        this.#developerRepository.save(developer);
    }

}