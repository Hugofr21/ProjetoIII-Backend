import {serializable} from "serializr";

export default class UserSkill {
    @serializable id: Number;
    @serializable userId: Number;
    @serializable skillId: Number;

    constructor(userId: Number, skillId: Number) {
        this.userId = userId;
        this.skillId = skillId;
    }
}