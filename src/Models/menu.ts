
import { Schema, model } from 'mongoose';
import Joi from 'joi';
import { join } from 'path';


// Validation schema for IMenuItem
export const MenuItemSchemaValidate = Joi.object({
    categotyId: Joi.string().required(),
    itemName: Joi.string().required(),
    price: Joi.number().required(),
    mrp: Joi.number().required(),
    bannerImg: Joi.string().required(),
    images: Joi.array().items(Joi.string()),
    createAt: Joi.number().required(),
    updateAt: Joi.number().required(),
  });

  // Creating an interface
interface IMenuItem {
  categotyId: Schema.Types.ObjectId;
  itemName: string;
  price: number;
  mrp: number;
  bannerImg: string;
  images: string[];
  createAt: number; // Timestamp
  updateAt: number; // Timestamp
}
  
const menuSchema = new Schema<IMenuItem>({
  categotyId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  itemName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  mrp: {
    type: Number,
    required: true,
  },
  bannerImg: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
    required: true,
    default:[],
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
export const Menu = model<IMenuItem>('Menu', menuSchema);
