// Import modules
import { OrderServices } from '../Services/order.services';
import { Request, Response } from 'express';
import { OrderSchemaValidate } from '../Models/orders';

class orderController {
    // Add order controller
    public addOrder = async (req: Request, res: Response) => {
        // Data to be saved in the database
        const data = {
            restroId: req.body.restroId,
            tableno: req.body.tableno,
            status: req.body.status,
            type: req.body.type,
            items: req.body.items,
            payment: req.body.payment,
            createAt: req.body.createAt,
            updateAt: req.body.updateAt,
        };

        // Validating the request
        const { error, value } = OrderSchemaValidate.validate(data);

        if (error) {
            res.status(400).send(error.message);
        } else {
            // Call the createOrder function in the service and pass the data from the request
            const order = await OrderServices.createOrder(value);
            res.status(201).send(order);
        }
    }

    // Get all orders
    public getOrders = async (req: Request, res: Response) => {
        const orders = await OrderServices.getOrders();
        res.send(orders);
    }

    // Get a single order
    public getOrder = async (req: Request, res: Response) => {
        // Get id from the parameter
        const id = req.params.id;
        const order = await OrderServices.getOrder(id);
        res.send(order);
    }

    // Update order
    public updateOrder = async (req: Request, res: Response) => {
        const id = req.params.id;
        const order = await OrderServices.updateOrder(id, req.body);
        res.send(order);
    }

    // Delete an order
    public deleteOrder = async (req: Request, res: Response) => {
        const id = req.params.id;
        await OrderServices.deleteOrder(id);
        res.send('Order deleted');
    }
}

// Export class
export const OrderController = new orderController();
