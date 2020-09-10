import Like from "./Like";
import {object, list, serializable} from "serializr"

export default class User {
    @serializable id: Number;
    @serializable username: string;
    @serializable name: string;
    @serializable email: string;
    @serializable emailVerifiedAt: Date;
    @serializable password: string;
    @serializable active: boolean;
    @serializable createdAt: Date;
    @serializable updatedAt: Date;
    @serializable nif: string;
    @serializable address: string;
    @serializable gender: string;
    @serializable age: Number;
    @serializable nationality: string;
    @serializable phone: string;
    @serializable type: string;
    @serializable session: string;
    @serializable birthDate: Date;

    @serializable(list(object(Like)))likes: Like[];

    constructor(username: string, email: string, password: string, nif: string, address: string, gender: string, age: Number,
                nationality: string, phone: string, type: string, birthDate: Date) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.nif = nif;
        this.address = address;
        this.gender = gender;
        this.age = age;
        this.nationality = nationality;
        this.phone = phone;
        this.type = type;
        this.birthDate = birthDate;

        this.active = true;
        this.emailVerifiedAt = null;
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.session = null;

        this.likes = [];
    }


    addLike(userId: Number) {
        let like: Like = new Like(this.id, this.id);
        this.likes.push(like);
    }


}