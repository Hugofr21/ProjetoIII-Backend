import SkillType from "./SkillType";

export default class Skill {
    id: Number;
    name: string;
    type: SkillType;

    constructor(name: string, type: SkillType) {
        this.name = name;
        this.type = type;
    }
}