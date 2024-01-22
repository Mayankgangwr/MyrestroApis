// Importing modules
import express from 'express';
import { UserController } from '../Controllers/user.controller';

// Initiating the router
const userRouter = express.Router();

// Add user route
userRouter.post('/', UserController.addUser);

// Get users route
userRouter.get('/', UserController.getUsers);

// Get single user route
userRouter.get('/:id', UserController.getUser);

// Update user route
userRouter.put('/:id', UserController.updateUser);

// Delete user route
userRouter.delete('/:id', UserController.deleteUser);

// Export router
export default userRouter;
