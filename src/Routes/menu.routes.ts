// Importing modules
import express from 'express';
import { MenuController } from '../Controllers/menu.controller';

// Initiating the router
export const menuRouter = express.Router();

// Add menu item route
menuRouter.post('/', MenuController.addMenuItem);

// Get menu items route
menuRouter.get('/', MenuController.getMenuItems);

// Get single menu item route
menuRouter.get('/:id', MenuController.getMenuItem);

// Update menu item route
menuRouter.put('/:id', MenuController.updateMenuItem);

// Delete menu item route
menuRouter.delete('/:id', MenuController.deleteMenuItem);

// Export router
export default menuRouter;
