import Like from "./Like";
import {object, list, serializable, date} from "serializr"
import {Password} from "../ValueObject/Password";
import UserLanguage from "./UserLanguage";
import UserSkill from "./UserSkill";

export default class User {
    @serializable id: Number;
    @serializable username: string;
    @serializable name: string;
    @serializable email: string;
    @serializable(date()) emailVerifiedAt: Date;
    @serializable(object(Password)) password: Password;
    @serializable active: boolean;
    @serializable(date()) createdAt: Date;
    @serializable(date()) updatedAt: Date;
    @serializable nif: string;
    @serializable address: string;
    @serializable gender: string;
    @serializable age: Number;
    @serializable nationality: string;
    @serializable phone: string;
    @serializable type: string;
    @serializable session: string;
    @serializable(date()) birthDate: Date;
    @serializable postalCode: string;
    @serializable availableToTravel: boolean;
    @serializable isTeamLeader: boolean;
    @serializable imageName: string;

    @serializable(list(object(Like)))likes: Like[];
    @serializable(list(object(UserLanguage)))languages: UserLanguage[];
    @serializable(list(object(UserSkill)))skills: UserSkill[];


    constructor(username: string, name: string, email: string, password: Password, nif: string, address: string, gender: string,
                age: Number, nationality: string, phone: string, type: string, birthDate: Date, postalCode: string,
                availableToTravel: boolean, isTeamLeader: boolean) {
        this.username = username;
        this.name = name;
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
        this.postalCode = postalCode;
        this.availableToTravel = availableToTravel;
        this.isTeamLeader = isTeamLeader;
        this.imageName = '';
        
        this.active = true;
        this.emailVerifiedAt = new Date();
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.session = null;

        this.likes = [];
        this.languages = [];
        this.skills = [];
    }

    addLike(userId: Number) {
        let like: Like = new Like(userId, this.id);
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

    setImageName(imageName: string) {
        this.imageName = imageName;
    }

}