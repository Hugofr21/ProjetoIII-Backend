import * as jwt from "jsonwebtoken";

export function checkToken() {
    return (req, res, next) => {
        let token = req.headers["x-access-token"] || req.headers["authorization"];
        if (token && token.startsWith('Bearer ')) {
            token = token.slice(7, token.length);
            jwt.verify(token, 'top_secret', (err, decoded) => {
                if (err) {
                    return res.json({
                        success: false,
                        message: 'O token não é válido.'
                    });
                } else {
                    req.decoded = decoded;
                    next();
                }
            });
        } else {
            return res.json({
                success: false,
                message: 'Token indisponível.'
            });
        }
    }
}