import { GET, POST, route } from 'awilix-express';

import DeveloperCreateService from "Domain/Developer/DeveloperCreateService";
import UserCreateService from "../../../Domain/User/Service/UserCreateService";
import User from "../../../Domain/User/Model/User";
import UserRepositoryInterface from "../../../Domain/User/Repository/UserRepositoryInterface";
import { Password } from "../../../Domain/User/ValueObject/Password";
import { before } from "awilix-router-core";
import { upload } from "../Middleware/ImageUploadMiddleware";
import { list } from 'serializr';

@route('/developers')
export default class DeveloperController {

    #developerCreateService: DeveloperCreateService
    #userCreateService: UserCreateService
    #userRepository: UserRepositoryInterface

    constructor({ developerCreateService, userCreateService, userRepository }) {
        this.#developerCreateService = developerCreateService;
        this.#userCreateService = userCreateService;
        this.#userRepository = userRepository;
    }

    @before([upload.single('avatar')])
    @POST()
    async create(req, res, _next) {
        const {
            username, email, password, name, birthDate, nif, address, phone, gender, age, postalCode, nationality, availableToTravel,
            isTeamLeader, selectedLanguages, selectedPersonalSkills, selectedTechnicalSkills
        } = req.body;

        let user: User = await this.#userCreateService.createUser(username, name, email, new Password(password), nif, address, gender, age, nationality, phone, 'developer', new Date(birthDate), postalCode, availableToTravel, isTeamLeader);
        if (req.file) {
            user.setImageName(req.file.filename);
        }
        if (Array.isArray(selectedLanguages)) {
            selectedLanguages.forEach(sl => user.addLanguage(sl));
        }
        if (Array.isArray(selectedPersonalSkills)) {
            selectedPersonalSkills.forEach(s => user.addSkill(s));
        }
        if (Array.isArray(selectedTechnicalSkills)) {
            selectedTechnicalSkills.forEach(s => user.addSkill(s));
        }
        await this.#userRepository.save(user);
        await this.#developerCreateService.createDeveloper(user.id);

        return res.status(200).json(['OK']);
    }
}