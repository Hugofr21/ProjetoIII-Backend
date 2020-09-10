import SkillRepositoryInterface from "Domain/Skill/Repository/SkillRepositoryInterface";
import Skill from "Domain/Skill/Model/Skill";

const BaseRepository = require('./BaseRepository');

export default class SkillRepository extends BaseRepository implements SkillRepositoryInterface {
    constructor({database}) {
        super(database.models.SkillModel, Skill);
    }

    async getSkillById(skillId: Number): ?Skill {
        return this.find(skillId);
    }

    async save(skill: Skill) {
        await this.create(skill);
    }
}