import {GET, POST, route} from 'awilix-express';

import DeveloperCreateService from "Domain/Developer/DeveloperCreateService";
import UserCreateService from "../../../Domain/User/Service/UserCreateService";
import User from "../../../Domain/User/Model/User";
import UserRepositoryInterface from "../../../Domain/User/Repository/UserRepositoryInterface";
import {Password} from "../../../Domain/User/ValueObject/Password";
import {before} from "awilix-router-core";
import {upload} from "../Middleware/ImageUploadMiddleware";

@route('/developers')
export default class DeveloperController {

    #developerCreateService: DeveloperCreateService
    #userCreateService: UserCreateService
    #userRepository: UserRepositoryInterface

    constructor({developerCreateService, userCreateService, userRepository}) {
        this.#developerCreateService = developerCreateService;
        this.#userCreateService = userCreateService;
        this.#userRepository = userRepository;
    }

    @before([upload.single('avatar')])
    @POST()
    async create(req, res, _next) {
        const {
            username, email, password, name, birthDate, nif, address, phone, gender, age, postalCode, nationality, availableToTravel,
            isTeamLeader, selectedLanguages, selectedPersonalSkills, selectedTechnicalSkills, avatar
        } = req.body;
        console.log(123213);
        console.log(req);

        let user: User = await this.#userCreateService.createUser(username, name, email, new Password(password), nif, address, gender, age, nationality, phone, 'developer', new Date(birthDate), postalCode, availableToTravel, isTeamLeader);
        selectedLanguages.forEach(sl => user.addLanguage(sl));
        selectedPersonalSkills.forEach(s => user.addSkill(s));
        selectedTechnicalSkills.forEach(s => user.addSkill(s));
        await this.#userRepository.save(user);
        await this.#developerCreateService.createDeveloper(user.id);

        return res.status(200).json(['OK']);
    }
}