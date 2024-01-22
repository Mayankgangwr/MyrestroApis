// Importing modules
import express from 'express';
import { CategoryController } from '../Controllers/category.controller';

// Initiating the router
export const categoryRouter = express.Router();

// Add category route
categoryRouter.post('/', CategoryController.addCategory);

// Get categories route
categoryRouter.get('/', CategoryController.getCategories);

// Get single category route
categoryRouter.get('/:id', CategoryController.getCategory);

// Update category route
categoryRouter.put('/:id', CategoryController.updateCategory);

// Delete category route
categoryRouter.delete('/:id', CategoryController.deleteCategory);

// Export router
export default categoryRouter;
