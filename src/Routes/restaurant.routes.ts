// Importing modules
import express from 'express';
import { RestaurantController } from '../Controllers/restaurant.controller';
import verifyJWT from '../Middlewares/verifyJWT';


// Initiating the router
const restaurantRouter = express.Router();

// Add restaurant route
restaurantRouter.post('/', verifyJWT, RestaurantController.addRestaurant);

// Get restaurants route
restaurantRouter.get('/', verifyJWT, RestaurantController.getRestaurants);

// Get single restaurant route
restaurantRouter.get('/:id', RestaurantController.getRestaurant);

// Update restaurant route
restaurantRouter.put('/:id', verifyJWT, RestaurantController.updateRestaurant);

// Delete restaurant route
restaurantRouter.delete('/:id', verifyJWT, RestaurantController.deleteRestaurant);

// Export router
export default restaurantRouter;
