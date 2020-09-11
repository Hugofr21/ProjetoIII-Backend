import {serializable} from "serializr";

const bcrypt = require('bcryptjs');

const COST = 10;

export class Password {
    @serializable value: string;

    constructor(password: string) {
        if (password === undefined) {
            return;
        }
        this.validatePassword(password);
        this.hashPassword(password);
    }

    validatePassword(password: string) {

    }

    hashPassword(password: string) {
        this.value = bcrypt.hashSync(password, COST);
    }

    isValidPassword(password: string): boolean {
        return bcrypt.compareSync(password, this.value);
    }


}