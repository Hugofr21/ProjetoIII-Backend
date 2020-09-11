import LanguageRepositoryInterface from "../Repository/LanguageRepositoryInterface";
import {Language} from "../Model/Language";

export default class LanguageCreateService {
    #languageRepository: LanguageRepositoryInterface;

    constructor({languageRepository}) {
        this.#languageRepository = languageRepository;
    }

    async createLanguage(name: string) {
        let language: Language = new Language(name);
        await this.#languageRepository.save(language);
        return language;
    }
}