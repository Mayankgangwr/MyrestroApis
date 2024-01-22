import { Schema, model } from 'mongoose';
import Joi from 'joi';

// Validation schema for IItems
const ItemsSchemaValidate = Joi.object({
  itemId: Joi.string().required(),
  price: Joi.number().required(),
});

// Validation schema for IPaymentStatus
const PaymentStatusSchemaValidate = Joi.object({
  status: Joi.string().required(),
  method: Joi.string().required(),
});

// Validation schema for IOrders
export const OrderSchemaValidate = Joi.object({
  restroId: Joi.string().required(),
  tableno: Joi.number().required(),
  status: Joi.string().required(),
  type: Joi.string().required(),
  items: Joi.array().items(ItemsSchemaValidate),
  payment: PaymentStatusSchemaValidate,
  createAt: Joi.number().required(),
  updateAt: Joi.number().required(),
});

// Creating an interface
interface IItems {
  itemId: Schema.Types.ObjectId;
  price: number;
}

interface IPaymentStatus {
  status: string;
  method: string;
}

interface IOrders {
  restroId: Schema.Types.ObjectId;
  tableno: number;
  status: string;
  type: string; // need to serve on the table or home delivery or pick by the customer
  items: IItems[];
  payment: IPaymentStatus;
  createAt: number; // Timestamp
  updateAt: number; // Timestamp
}

// Orders schema
const orderSchema = new Schema<IOrders>({
  restroId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  tableno: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  items: {
    type: [
      {
        itemId: Schema.Types.ObjectId,
        price: Number,
      },
    ],
    default: [],
  },
  payment: {
    type: {
      status: String,
      method: String,
    },
    required: true,
  },
  createAt: {
    type: Number,
    required: true,
  },
  updateAt: {
    type: Number,
    required: true,
  },
});

// Creating a model
export const Order = model<IOrders>('Order', orderSchema);
