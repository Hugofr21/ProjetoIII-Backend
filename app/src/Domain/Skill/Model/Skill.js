import SkillType from "./SkillType";
import {serializable} from "serializr";

export default class Skill {
    @serializable id: Number;
    @serializable name: string;
    @serializable type: SkillType;

    constructor(name: string, type: SkillType) {
        this.name = name;
        this.type = type;
    }
}