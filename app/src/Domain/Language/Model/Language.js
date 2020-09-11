import {serializable} from "serializr";

export class Language {
    @serializable id: Number;
    @serializable name: string;

    constructor(name: string) {
        this.name = name;
    }
}