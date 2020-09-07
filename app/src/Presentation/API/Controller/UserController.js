import { GET, route } from 'awilix-express';

@route('/users')
export default class UserController {

    constructor(server) {
        this.server = server;
    }

    @GET()
    getAll(req, res, _next) {
        this.server.test();
        return res.status(200).json(["User 1", "User 2"]);
    }

}