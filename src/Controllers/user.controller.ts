// Import modules
import { UserServices } from '../Services/user.service';
import { Request, Response } from 'express';
import { UserSchemaValidate } from '../Models/user';
import bcrypt from 'bcrypt';

class userController {
    // Add user controller
    public addUser = async (req: Request, res: Response) => {
        // Data to be saved in the database
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const data = {
            restroId: req.body.restroId,
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
            mobileNo: req.body.mobileNo,
            workingShift: req.body.workingShift,
            ProfileImg: req.body.ProfileImg,
            address: req.body.address,
            city: req.body.city,
            picCode: req.body.picCode,
            role: req.body.role,
            createAt: req.body.createAt,
            updateAt: req.body.updateAt,
        };

        // Validating the request
        const { error, value } = UserSchemaValidate.validate(data);

        if (error) {
            res.status(400).send(error.message);
        } else {
            // Call the createUser function in the service and pass the data from the request
            const user = await UserServices.createUser(value);
            res.status(201).send(user);
        }
    }

    // Get all users
    public getUsers = async (req: Request, res: Response) => {
        const users = await UserServices.getUsers();
        res.send(users);
    }

    // Get a single user
    public getUser = async (req: Request, res: Response) => {
        // Get id from the parameter
        const id = req.params.id;
        const user = await UserServices.getUser(id);
        res.send(user);
    }

    // Update user
    public updateUser = async (req: Request, res: Response) => {
        const id = req.params.id;
        const user = await UserServices.updateUser(id, req.body);
        res.send(user);
    }

    // Delete a user
    public deleteUser = async (req: Request, res: Response) => {
        const id = req.params.id;
        await UserServices.deleteUser(id);
        res.send('User deleted');
    }
}

// Export class
export const UserController = new userController();
