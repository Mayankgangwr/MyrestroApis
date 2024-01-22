// Import module
import { Restaurant } from '../Models/restaurant';

class restaurantService {
    // Create a restaurant
    public async createRestaurant(data: any) {
        try {
            const newRestaurant = await Restaurant.create(data);
            return newRestaurant;
        } catch (error) {
            console.error(error);
            throw new Error('Error creating restaurant');
        }
    }

    // Get all restaurants
    public async getRestaurants() {
        try {
            const restaurants = await Restaurant.find({});

            return restaurants;
        } catch (error) {
            console.error(error);
            throw new Error('Error getting restaurants');
        }
    }

    // Get a single restaurant
    public async getRestaurant(id: string) {
        try {
            const restaurant = await Restaurant.findById({ _id: id });
            if (!restaurant) {
                return 'Restaurant not available';
            }
            return restaurant;
        } catch (error) {
            console.error(error);
            throw new Error('Error getting restaurant');
        }
    }

    // Update a restaurant
    public async updateRestaurant(id: string, data: any) {
        try {
            const restaurant = await Restaurant.findByIdAndUpdate({ _id: id }, data, { new: true });
            if (!restaurant) {
                return 'Restaurant not available';
            }
            return restaurant;
        } catch (error) {
            console.error(error);
            throw new Error('Error updating restaurant');
        }
    }

    // Delete a restaurant by using the find by id and delete
    public async deleteRestaurant(id: string) {
        try {
            const restaurant = await Restaurant.findByIdAndDelete(id);
            if (!restaurant) {
                throw new Error('Restaurant not found');
            }
        } catch (error) {
            console.error(error);
            throw new Error('Error deleting restaurant');
        }
    }
}

// Export the class
export const RestaurantServices = new restaurantService();
