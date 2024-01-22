// Import module
import { Category } from '../Models/category';

class categoryService {
    // Create a category
    public async createCategory(data: any) {
        try {
            const newCategory = await Category.create(data);
            return newCategory;
        } catch (error) {
            console.error(error);
            throw new Error('Error creating category');
        }
    }

    // Get all categories
    public async getCategories() {
        try {
            const categories = await Category.find({});
            return categories;
        } catch (error) {
            console.error(error);
            throw new Error('Error getting categories');
        }
    }

    // Get a single category
    public async getCategory(id: string) {
        try {
            const category = await Category.findById({ _id: id });
            if (!category) {
                return 'Category not available';
            }
            return category;
        } catch (error) {
            console.error(error);
            throw new Error('Error getting category');
        }
    }

    // Update a category
    public async updateCategory(id: string, data: any) {
        try {
            const category = await Category.findByIdAndUpdate({ _id: id }, data, { new: true });
            if (!category) {
                return 'Category not available';
            }
            return category;
        } catch (error) {
            console.error(error);
            throw new Error('Error updating category');
        }
    }

    // Delete a category by using the find by id and delete
    public async deleteCategory(id: string) {
        try {
            const category = await Category.findByIdAndDelete(id);
            if (!category) {
                throw new Error('Category not found');
            }
        } catch (error) {
            console.error(error);
            throw new Error('Error deleting category');
        }
    }
}

// Export the class
export const CategoryServices = new categoryService();
