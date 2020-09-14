import {GET, POST, route} from 'awilix-express';

import UserCreateService from "Domain/User/Service/UserCreateService";
import UserRepositoryInterface from "../../../Domain/User/Repository/UserRepositoryInterface";
import User from "../../../Domain/User/Model/User";

@route('/users')
export default class UserController {

    #userCreateService: UserCreateService
    #userRepository: UserRepositoryInterface

    constructor({userCreateService, userRepository}) {
        this.#userCreateService = userCreateService;
        this.#userRepository = userRepository;
    }

    @GET()
    async getAll(req, res) {
        let user = await this.#userCreateService.getUser(2);

        return res.status(200).json(user);
    }

    @route('/:userId')
    @POST()
    async editProfile(req, res) {
        const {
            username, password, name, birthDate, nif, address, phone, gender, postalCode, nationality, availableToTravel,
            isTeamLeader
        } = req.body;
        let user: User = await this.#userRepository.getUserById(req.params.userId);
        if (user === null) {
            res.status(400);
        }
        user.username = username;
        user.name = name;
        await this.#userRepository.save(user);
        res.status(200).json(["OK"]);
    }


    @route('/like')
    @GET()
    async addLike(req, res) {
        let user: User = await this.#userRepository.getUserById(1);
        user.addLike(1);
        await this.#userRepository.save(user);

        return res.status(200).json(user);
    }
}