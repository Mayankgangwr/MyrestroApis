// Import module
import { Menu } from '../Models/menu';

class menuService {
    // Create a menu item
   public async createMenuItem(data: any) {
        try {
            const newMenuItem = await Menu.create(data);
            return newMenuItem;
        } catch (error) {
            console.error(error);
            throw new Error('Error creating menu item');
        }
    }

    // Get all menu items
    public async getMenuItems() {
        try {
            const menuItems = await Menu.find({});
            return menuItems;
        } catch (error) {
            console.error(error);
            throw new Error('Error getting menu items');
        }
    }

    // Get a single menu item
    public async getMenuItem(id: string) {
        try {
            const menuItem = await Menu.findById({ _id: id });
            if (!menuItem) {
                return 'Menu item not available';
            }
            return menuItem;
        } catch (error) {
            console.error(error);
            throw new Error('Error getting menu item');
        }
    }

    // Update a menu item
    public async updateMenuItem(id: string, data: any) {
        try {
            const menuItem = await Menu.findByIdAndUpdate({ _id: id }, data, { new: true });
            if (!menuItem) {
                return 'Menu item not available';
            }
            return menuItem;
        } catch (error) {
            console.error(error);
            throw new Error('Error updating menu item');
        }
    }

    // Delete a menu item by using the find by id and delete
    public async deleteMenuItem(id: string) {
        try {
            const menuItem = await Menu.findByIdAndDelete(id);
            if (!menuItem) {
                throw new Error('Menu item not found');
            }
        } catch (error) {
            console.error(error);
            throw new Error('Error deleting menu item');
        }
    }
}

// Export the class
export const MenuServices = new menuService();
