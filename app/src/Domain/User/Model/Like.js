import {serializable} from "serializr";

export default class Like {
    @serializable
    id: Number;
    @serializable
    fromUserId: Number;
    @serializable
    toUserId: Number;

    constructor(fromUserId: Number, toUserId: Number) {
        this.fromUserId = fromUserId;
        this.toUserId = toUserId;
    }
}