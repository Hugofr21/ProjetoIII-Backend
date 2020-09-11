import Like from "./Like";
import {object, list, serializable} from "serializr"
import {Password} from "../ValueObject/Password";
import UserLanguage from "./UserLanguage";
import {Language} from "../../Language/Model/Language";
import UserSkill from "./UserSkill";

export default class User {
    @serializable id: Number;
    @serializable username: string;
    @serializable name: string;
    @serializable email: string;
    @serializable emailVerifiedAt: Date;
    @serializable(object(Password)) password: Password;
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
    @serializable(list(object(UserLanguage)))languages: UserLanguage[];
    @serializable(list(object(UserSkill)))skills: UserSkill[];

    constructor(username: string, email: string, password: Password, nif: string, address: string, gender: string, age: Number,
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
        this.languages = [];
        this.skills = [];
    }


    addLike(userId: Number) {
        let like: Like = new Like(this.id, this.id);
        this.likes.push(like);
    }

    addLanguage(languageId: Number) {
        if (languageId in this.languages) {
            return;
        }
        let language: UserLanguage = new UserLanguage(this.id, languageId);
        this.languages.push(language);
    }

    addSkill(skillId: Number) {
        if (skillId in this.languages) {
            return;
        }
        let skill: UserSkill = new UserSkill(this.id, skillId);
        this.skills.push(skill);
    }

}