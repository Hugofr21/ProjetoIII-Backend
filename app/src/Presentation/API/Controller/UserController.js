import { GET, route } from 'awilix-express';

@route('/users')
class UserController {

    @GET()
    getAll(req, res, _next) {
        return res.status(200).json(["User 1", "User 2"]);
    }

}