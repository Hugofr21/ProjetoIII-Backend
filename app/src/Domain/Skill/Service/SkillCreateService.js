import SkillRepositoryInterface from "../Repository/SkillRepositoryInterface";
import Skill from "../Model/Skill";
import SkillType from "../Model/SkillType";

export default class SkillCreateService {
    #skillRepository: SkillRepositoryInterface;

    constructor({skillRepository}) {
        this.#skillRepository = skillRepository;
    }

    async createSkill(name: string, type: SkillType) {
        let skill: Skill = new Skill(name, type);
        await this.#skillRepository.save(skill);
        return skill;
    }

}