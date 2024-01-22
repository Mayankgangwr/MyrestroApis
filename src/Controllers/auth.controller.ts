import asyncHandler from "express-async-handler";
import { UserSchemaValidate, User } from '../Models/user';
import { error } from "console";
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class authController {
    public login = asyncHandler(async (req: any, res: any) => {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        const foundUser: any = await User.findOne({ email }).exec();
        if (!foundUser) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        const match = await bcrypt.compare(password, foundUser.password);
        if (!match) return res.status(401).json({ message: 'Unauthorized' });
        const accessToken = jwt.sign(
            {
                "UserInfo": {
                    "email": foundUser.email,
                    "role": foundUser.role,
                }
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '1000s' }
        );
        const refreshToken = jwt.sign(
            { "email": foundUser.email },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '1d' }
        );
        res.cookie('accessToken', accessToken, {
            httpOnly: true,
            sameSite: 'None',
            maXAge: 7 * 24 * 60 * 60 * 1000
        });
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            sameSite: 'None',
            maXAge: 15 * 24 * 60 * 60 * 1000
        });

        res.json({ accessToken });
    });
    public refresh = (req: any, res: any) => {
        const cookies = req.cookies;
        if (!cookies?.jwt) return res.status(401).json({ message: 'Unauthorized' });
        const refreashToken = cookies.jwt;
        jwt.verify(
            refreashToken,
            process.env.ACCESS_TOKEN_SECRET,
            asyncHandler(async (error, decoded: any) => {
                if (error) return res.status(403).json({ message: "Forbidden" });
                const foundUser = await User.findOne({ email: decoded.email });
                if (!foundUser) return res.status(401).json({ message: 'Unauthorized' });
                const accessToken = jwt.sign(
                    {
                        "UserInfo": {
                            "email": foundUser.email,
                            "role": foundUser.role,
                        }
                    },
                    process.env.ACCESS_TOKEN_SECRET,
                    { expiresIn: '1000s' }
                );
                const refreshToken = jwt.sign(
                    { "email": foundUser.email },
                    process.env.ACCESS_TOKEN_SECRET,
                    { expiresIn: '1d' }
                );
        
                res.cookie('accessToken', accessToken, {
                    httpOnly: true,
                    sameSite: 'None',
                    maXAge: 7 * 24 * 60 * 60 * 1000
                });
                res.cookie('refreshToken', refreshToken, {
                    httpOnly: true,
                    sameSite: 'None',
                    maXAge: 15 * 24 * 60 * 60 * 1000
                });
                res.json({ accessToken });
            })
        );
    }

    public logout = (req: any, res: any) => {
        const cookies = req.cookies;
        if (!cookies?.jwt) return res.sendStatus(204);
        res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
        res.json({ message: 'Cookie cleared' });
    }
};

export const AuthController = new authController();