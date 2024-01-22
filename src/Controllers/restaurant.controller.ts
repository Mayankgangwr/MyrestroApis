// Import modules
import { RestaurantServices } from '../Services/restaurant.service';
import { Request, Response } from 'express';
import { RestaurantSchemaValidate } from '../Models/restaurant';

class restaurantController {
    // Add restaurant controller
   public addRestaurant = async (req: Request, res: Response) => {
        // Data to be saved in the database
        const data = {
            title: req.body.title,
            ownerId: req.body.ownerId,
            contactNo: req.body.contactNo,
            emailId: req.body.emailId,
            menu: req.body.menu,
            shift: req.body.shift,
            tables: req.body.tables,
            ProfileImg: req.body.ProfileImg,
            rating: req.body.rating,
            review: req.body.review,
            esst: req.body.esst,
            address: req.body.address,
            city: req.body.city,
            picCode: req.body.picCode,
            activePlainId: req.body.activePlainId,
            expireAt: req.body.expireAt,
            createAt: req.body.createAt,
            updateAt: req.body.updateAt,
        };

        // Validating the request
        const { error, value } = RestaurantSchemaValidate.validate(data);

        if (error) {
            res.status(400).send(error.message);
        } else {
            // Call the createRestaurant function in the service and pass the data from the request
            const restaurant = await RestaurantServices.createRestaurant(value);
            res.status(201).send(restaurant);
        }
    }

    // Get all restaurants
    public  getRestaurants = async (req: Request, res: Response) => {
        const restaurants = await RestaurantServices.getRestaurants();
        res.send(restaurants);
    }

    // Get a single restaurant
    public  getRestaurant = async (req: Request, res: Response) => {
        // Get id from the parameter
        const id = req.params.id;
        const restaurant = await RestaurantServices.getRestaurant(id);
        res.send(restaurant);
    }

    // Update restaurant
    public  updateRestaurant = async (req: Request, res: Response) => {
        const id = req.params.id;
        const restaurant = await RestaurantServices.updateRestaurant(id, req.body);
        res.send(restaurant);
    }

    // Delete a restaurant
    public  deleteRestaurant = async (req: Request, res: Response) => {
        const id = req.params.id;
        await RestaurantServices.deleteRestaurant(id);
        res.send('Restaurant deleted');
    }
}

// Export class
export const RestaurantController = new restaurantController();
