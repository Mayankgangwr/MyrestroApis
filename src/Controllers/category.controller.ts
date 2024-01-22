// Import modules
import { CategoryServices } from '../Services/category.service';
import { Request, Response } from 'express';
import { CategorySchemaValidate } from '../Models/category';

class categoryController {
    // Add category controller
    public addCategory = async (req: Request, res: Response) => {
        // Data to be saved in the database
        const data = {
            title: req.body.title,
            imgurl: req.body.imgurl,
            description: req.body.description,
            createAt: req.body.createAt,
            updateAt: req.body.updateAt,
        };

        // Validating the request
        const { error, value } = CategorySchemaValidate.validate(data);

        if (error) {
            res.status(400).send(error.message);
        } else {
            // Call the createCategory function in the service and pass the data from the request
            const category = await CategoryServices.createCategory(value);
            res.status(201).send(category);
        }
    }

    // Get all categories
    public getCategories = async (req: Request, res: Response) => {
        const categories = await CategoryServices.getCategories();
        res.send(categories);
    }

    // Get a single category
    public getCategory = async (req: Request, res: Response) => {
        // Get id from the parameter
        const id = req.params.id;
        const category = await CategoryServices.getCategory(id);
        res.send(category);
    }

    // Update category
    public updateCategory = async (req: Request, res: Response) => {
        const id = req.params.id;
        const category = await CategoryServices.updateCategory(id, req.body);
        res.send(category);
    }

    // Delete a category
   public deleteCategory = async (req: Request, res: Response) => {
        const id = req.params.id;
        await CategoryServices.deleteCategory(id);
        res.send('Category deleted');
    }
}

// Export class
export const CategoryController = new categoryController();
