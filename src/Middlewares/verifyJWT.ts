const jwt = require('jsonwebtoken');
import { Jwt } from 'jsonwebtoken';

const verifyJWT = (req: any, res: any, next: any) => {
    const authHeader = req.headers.authorization || req.headers.Authorization;
    if (!authHeader?.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Unauthorized' })
    }

    if (authHeader) {
        const token = authHeader.split(' ')[1];
        console.log(token);
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err: any, user: any) => {
            if (err) {
                return res.status(403).json({ message: 'Forbidden' });
            }
            req.user = user.email;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};
export default verifyJWT;