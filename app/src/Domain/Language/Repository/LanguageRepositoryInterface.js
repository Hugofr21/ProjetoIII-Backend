import {Language} from "../Model/Language";

export default class LanguageRepositoryInterface {
    async getAll(): Language[] {
    }

    async save(language: Language): void {
    }
}