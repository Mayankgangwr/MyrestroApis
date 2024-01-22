// Importing modules
import express from 'express';
import { AuthController } from '../Controllers/auth.controller';
import loginLimiter from '../Middlewares/loginLimiter';

// Initiating the router
const authRouter = express.Router();

// Add user route
authRouter.post('/', loginLimiter, AuthController.login);

// Get users route
authRouter.get('/refresh', AuthController.refresh);

// Get single user route
authRouter.get('/logout', AuthController.logout);

// Export router
export default authRouter;
