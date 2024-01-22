// Import module
import { Order } from '../Models/orders';

class orderService {
    // Create an order
    public async createOrder(data: any) {
        try {
            const newOrder = await Order.create(data);
            return newOrder;
        } catch (error) {
            console.error(error);
            throw new Error('Error creating order');
        }
    }

    // Get all orders
    public async getOrders() {
        try {
            const orders = await Order.find({});
            return orders;
        } catch (error) {
            console.error(error);
            throw new Error('Error getting orders');
        }
    }

    // Get a single order
    public async getOrder(id: string) {
        try {
            const order = await Order.findById({ _id: id });
            if (!order) {
                return 'Order not available';
            }
            return order;
        } catch (error) {
            console.error(error);
            throw new Error('Error getting order');
        }
    }

    // Update an order
    public async updateOrder(id: string, data: any) {
        try {
            const order = await Order.findByIdAndUpdate({ _id: id }, data, { new: true });
            if (!order) {
                return 'Order not available';
            }
            return order;
        } catch (error) {
            console.error(error);
            throw new Error('Error updating order');
        }
    }

    // Delete an order by using the find by id and delete
    public async deleteOrder(id: string) {
        try {
            const order = await Order.findByIdAndDelete(id);
            if (!order) {
                throw new Error('Order not found');
            }
        } catch (error) {
            console.error(error);
            throw new Error('Error deleting order');
        }
    }
}

// Export the class
export const OrderServices = new orderService();
