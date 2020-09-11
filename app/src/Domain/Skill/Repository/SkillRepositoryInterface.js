import Skill from "../Model/Skill";
import SkillType from "../Model/SkillType";

export default class SkillRepositoryInterface {
    async getSkillById(skillId: Number): ?Skill {
    }

    async getAll(skillType: SkillType): Skill[] {
    }

    async save(skill: Skill): void {

    }
}