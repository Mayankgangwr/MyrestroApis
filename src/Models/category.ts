import { Schema, model } from 'mongoose';
import Joi from 'joi';

// Validation schema for IPlans
export const CategorySchemaValidate = Joi.object({
  title: Joi.string().required(),
  imgurl: Joi.string().required(),
  description: Joi.string().required(),
  createAt: Joi.number().required(),
  updateAt: Joi.number().required(),
});

// Creating an interface
interface ICategories {
  title: string;
  imgurl: string;
  description: string;
  createAt: number; // Timestamp
  updateAt: number; // Timestamp
}

// Plans schema
const categorySchema = new Schema<ICategories>({
  title: {
    type: String,
    required: true,
  },
  imgurl: {
    type: String,
    required: true,
  },
  description:{
    type: String,
    required: false
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
export const Category = model<ICategories>('Category', categorySchema);
