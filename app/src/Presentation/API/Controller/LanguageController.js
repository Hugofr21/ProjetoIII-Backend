import {POST, GET, route} from 'awilix-express';
import LanguageCreateService from "Domain/Language/Service/LanguageCreateService";
import LanguageRepositoryInterface from "../../../Domain/Language/Repository/LanguageRepositoryInterface";

@route('/languages')
export default class LanguageController {

    #languageCreateService: LanguageCreateService
    #languageRepository: LanguageRepositoryInterface

    constructor({languageCreateService, languageRepository}) {
        this.#languageCreateService = languageCreateService;
        this.#languageRepository = languageRepository;
    }

    @GET()
    async getAll(req, res) {
        let languages = await this.#languageRepository.getAll();
        return res.status(200).json(languages);
    }

    @POST()
    async create(req, res) {
        const {name} = req.body;
        await this.#languageCreateService.createLanguage(name);

        return res.status(200).json(["OK"]);
    }
}