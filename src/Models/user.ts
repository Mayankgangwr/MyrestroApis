import { Schema, model } from 'mongoose';
import Joi from 'joi';

// Validation schema
export const UserSchemaValidate = Joi.object({
  restroId: Joi.string().required(),
  name: Joi.string().required(),
  email: Joi.string().required(),
  role: Joi.string().required(),
  password: Joi.string().required(),
  mobileNo: Joi.string().required(),
  workingShift: Joi.number().required(),
  ProfileImg: Joi.string().required(),
  address: Joi.string().required(),
  city: Joi.string().required(),
  picCode: Joi.number().required(),
  createAt: Joi.number().required(),
  updateAt: Joi.number().required(),
});

// Creating an interface
interface IUsers {
  restroId: Schema.Types.ObjectId;
  name: string;
  email: string;
  password: string;
  mobileNo: string;
  workingShift: number;
  ProfileImg: string;
  address: string;
  city: string;
  picCode: number;
  role: string;
  createAt: number; // Timestamp
  updateAt: number; // Timestamp
}

// User schema
const userSchema = new Schema<IUsers>({
  restroId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  mobileNo: {
    type: String,
    required: true,
  },
  workingShift: {
    type: Number,
    required: true,
  },
  ProfileImg: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  picCode: {
    type: Number,
    required: true,
  },
  role: {
    type: String,
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

export const User = model<IUsers>('User', userSchema);
