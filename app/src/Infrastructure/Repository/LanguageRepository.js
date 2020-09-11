import LanguageRepositoryInterface from "Domain/Language/Repository/LanguageRepositoryInterface";
import {Language} from "Domain/Language/Model/Language";

const BaseRepository = require('./BaseRepository');

export default class LanguageRepository extends BaseRepository implements LanguageRepositoryInterface {
    constructor({database}) {
        super(database.models.LanguageModel, Language);
    }

    async getAll(): Language[] {
        return this.findAll();
    }

    async save(language: Language) {
        await this.create(language);
    }
}