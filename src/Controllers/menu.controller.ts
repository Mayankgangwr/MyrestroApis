// Import modules
import { MenuServices } from '../Services/menu.service';
import { Request, Response } from 'express';
import { MenuItemSchemaValidate } from '../Models/menu';

class menuController {
    // Add menu item controller
    addMenuItem = async (req: Request, res: Response) => {
        // Data to be saved in the database
        const data = {
            categotyId: req.body.categotyId,
            itemName: req.body.itemName,
            price: req.body.price,
            mrp: req.body.mrp,
            bannerImg: req.body.bannerImg,
            images: req.body.images,
            createAt: req.body.createAt,
            updateAt: req.body.updateAt,
        };

        // Validating the request
        const { error, value } = MenuItemSchemaValidate.validate(data);

        if (error) {
            res.status(400).send(error.message);
        } else {
            // Call the createMenuItem function in the service and pass the data from the request
            const menuItem = await MenuServices.createMenuItem(value);
            res.status(201).send(menuItem);
        }
    }

    // Get all menu items
    getMenuItems = async (req: Request, res: Response) => {
        const menuItems = await MenuServices.getMenuItems();
        res.send(menuItems);
    }

    // Get a single menu item
    getMenuItem = async (req: Request, res: Response) => {
        // Get id from the parameter
        const id = req.params.id;
        const menuItem = await MenuServices.getMenuItem(id);
        res.send(menuItem);
    }

    // Update menu item
    updateMenuItem = async (req: Request, res: Response) => {
        const id = req.params.id;
        const menuItem = await MenuServices.updateMenuItem(id, req.body);
        res.send(menuItem);
    }

    // Delete a menu item
    deleteMenuItem = async (req: Request, res: Response) => {
        const id = req.params.id;
        await MenuServices.deleteMenuItem(id);
        res.send('Menu item deleted');
    }
}

// Export class
export const MenuController = new menuController();
