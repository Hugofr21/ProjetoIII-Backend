import {GET, POST, route} from 'awilix-express';
import SkillCreateService from "Domain/Skill/Service/SkillCreateService";
import SkillType from "Domain/Skill/Model/SkillType";
import SkillRepositoryInterface from "../../../Domain/Skill/Repository/SkillRepositoryInterface";

@route('/skills')
export default class SkillController {

    #skillCreateService: SkillCreateService
    #skillRepository: SkillRepositoryInterface

    constructor({skillCreateService,skillRepository}) {
        this.#skillCreateService = skillCreateService;
        this.#skillRepository = skillRepository;
    }

    @route('/:type')
    @GET()
    async getAll(req, res) {
        let skills = await this.#skillRepository.getAll(req.params.type);
        return res.status(200).json(skills);
    }

    @POST()
    async create(req, res, _next) {
        await this.#skillCreateService.createSkill("skill 1", SkillType.PERSONAL);

        return res.status(200).json(["OK"]);
    }
}