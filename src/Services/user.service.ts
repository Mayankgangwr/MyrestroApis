// Import module
import { User } from '../Models/user';

class userService {
    // Create a user
   public async createUser(data: any) {
        try {
            const newUser = await User.create(data);
            return newUser;
        } catch (error) {
            console.error(error);
            throw new Error('Error creating user');
        }
    }

    // Get all users
   public async getUsers() {
        try {
            const users = await User.find({});
            return users;
        } catch (error) {
            console.error(error);
            throw new Error('Error getting users');
        }
    }

    // Get a single user
  public async getUser(id: string) {
        try {
            const user = await User.findById({ _id: id });
            if (!user) {
                return 'User not available';
            }
            return user;
        } catch (error) {
            console.error(error);
            throw new Error('Error getting user');
        }
    }

    // Update a user
   public async updateUser(id: string, data: any) {
        try {
            const user = await User.findByIdAndUpdate({ _id: id }, data, { new: true });
            if (!user) {
                return 'User not available';
            }
            return user;
        } catch (error) {
            console.error(error);
            throw new Error('Error updating user');
        }
    }

    // Delete a user by using the find by id and delete
   public async deleteUser(id: string) {
        try {
            const user = await User.findByIdAndDelete(id);
            if (!user) {
                throw new Error('User not found');
            }
        } catch (error) {
            console.error(error);
            throw new Error('Error deleting user');
        }
    }
}

// Export the class
export const UserServices = new userService();
