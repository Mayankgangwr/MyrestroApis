import { Schema, model } from 'mongoose';
import Joi from 'joi';

// Validation schema for IPlans
export const PlanSchemaValidate = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  timePeriod: Joi.number().required(),
  mrp: Joi.number().required(),
  price: Joi.number().required(),
  features: Joi.array().items(Joi.string()),
  createAt: Joi.number().required(),
  updateAt: Joi.number().required(),
});

// Creating an interface
interface IPlans {
  title: string;
  description: string;
  timePeriod: number; // In Months
  mrp: number;
  price: number;
  features: string[];
  createAt: number; // Timestamp
  updateAt: number; // Timestamp
}

// Plans schema
const planSchema = new Schema<IPlans>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  timePeriod: {
    type: Number,
    required: true,
  },
  mrp: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  features: {
    type: [String],
    default: [],
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
export const Plan = model<IPlans>('Plan', planSchema);
