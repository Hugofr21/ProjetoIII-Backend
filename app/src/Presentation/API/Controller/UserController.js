import { GET, POST, route } from 'awilix-express';

import UserCreateService from "Domain/User/Service/UserCreateService";
import UserRepositoryInterface from "../../../Domain/User/Repository/UserRepositoryInterface";
import User from "../../../Domain/User/Model/User";

@route('/users')
export default class UserController {

    #userCreateService: UserCreateService
    #userRepository: UserRepositoryInterface

    constructor({ userCreateService, userRepository }) {
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


    @route('/like/:toUserId')
    @POST()
    async addLike(req, res) {
        const { toUserId } = req.params;
        let user: User = await this.#userRepository.getUserById(toUserId);
        user.addLike(1);
        await this.#userRepository.save(user);

        return res.status(200).send({count: user.likes.length});
    }

    @route('/list/:page/:limit')
    @POST()
    async listUsers(req, res) {
        const { page, limit } = req.params;

        let users: User[] = await this.#userRepository.listUsers(page, limit);
        return res.status(200).send(users);
    }
}