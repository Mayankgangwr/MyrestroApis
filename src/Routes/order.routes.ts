// Importing modules
import express from 'express';
import { OrderController } from '../Controllers/order.controller';

// Initiating the router
export const orderRouter = express.Router();

// Add order route
orderRouter.post('/', OrderController.addOrder);

// Get orders route
orderRouter.get('/', OrderController.getOrders);

// Get single order route
orderRouter.get('/:id', OrderController.getOrder);

// Update order route
orderRouter.put('/:id', OrderController.updateOrder);

// Delete order route
orderRouter.delete('/:id', OrderController.deleteOrder);

// Export router
export default orderRouter;
