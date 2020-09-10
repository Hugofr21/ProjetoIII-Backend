import Skill from "../Model/Skill";

export default class SkillRepositoryInterface {
    async getSkillById(skillId: Number): ?Skill {
    }

    async save(skill: Skill): void {

    }
}