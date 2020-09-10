import {GET, route} from 'awilix-express';
import SkillCreateService from "Domain/Skill/Service/SkillCreateService";
import SkillType from "Domain/Skill/Model/SkillType";

@route('/skills')
export default class SkillController {

    #skillCreateService: SkillCreateService

    constructor({skillCreateService}) {
        this.#skillCreateService = skillCreateService;
    }

    @GET()
    async create(req, res, _next) {
        await this.#skillCreateService.createSkill("skill 1", SkillType.PERSONAL);

        return res.status(200).json(["OK"]);
    }
}