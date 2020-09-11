import {serializable} from "serializr";

export default class UserLanguage {
    @serializable id: Number;
    @serializable userId: Number;
    @serializable languageId: Number;

    constructor(userId: Number, languageId: Number) {
        this.userId = userId;
        this.languageId = languageId;
    }
}