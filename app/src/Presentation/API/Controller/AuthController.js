import {GET, POST, route, before, inject} from 'awilix-express';

import UserRepositoryInterface from "Domain/User/Repository/UserRepositoryInterface";
import User from "Domain/User/Model/User";
import * as jwt from "jsonwebtoken";
//import {checkToken} from "Presentation/API/Middleware/AuthVerifyMiddleware";


@route('/login')
export default class AuthController {

    #userRepository: UserRepositoryInterface

    constructor({userRepository}) {
        this.#userRepository = userRepository;
    }

    @POST()
    //@before(inject(checkToken))
    async login(req, res) {
        const {email, password} = req.body;
        let user: User = await this.#userRepository.getUserByEmail(email);
        if (user === null) {
            res.status(400).send("User not found");
            return;
        }
        if (!user.password.isValidPassword(password)) {
            res.status(401).send("Invalid password");
            return;
        }
        const token = jwt.sign({ id: user.id, email: user.email }, 'top_secret', {
            algorithm: "HS256",
            expiresIn: 900,
        })

        res.status(200).json({token: token});
    }
}