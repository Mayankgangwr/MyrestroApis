import { Schema, model } from 'mongoose';
import Joi from 'joi';

// Validation schema for IMenuItem
const MenuItemSchemaValidate = Joi.object({
  itemName: Joi.string().required(),
  price: Joi.number().required(),
  mrp: Joi.number().required(),
  bannerImg: Joi.string().required(),
  images: Joi.array().items(Joi.string()),
  rate: Joi.number().required(),
  review: Joi.string(),
  createAt: Joi.number().required(),
  updateAt: Joi.number().required(),
});

// Validation schema for IShift
const ShiftSchemaValidate = Joi.object({
  startAt: Joi.number().required(),
  endAt: Joi.number().required(),
});

// Validation schema for ITable
const TableSchemaValidate = Joi.object({
  tableNumber: Joi.number().required(),
  capacity: Joi.number().required(),
  isOccupied: Joi.boolean().required(),
  qr: Joi.boolean().required(),
});

// Validation schema for IRestaurants
export const RestaurantSchemaValidate = Joi.object({
  title: Joi.string().required(),
  ownerId: Joi.string().required(),
  contactNo: Joi.string().required(),
  emailId: Joi.string().required(),
  shift: Joi.array().items(ShiftSchemaValidate),
  tables: Joi.array().items(TableSchemaValidate),
  ProfileImg: Joi.string().required(),
  rating: Joi.number().required(),
  review: Joi.string(),
  esst: Joi.number().required(),
  address: Joi.string().required(),
  city: Joi.string().required(),
  picCode: Joi.number().required(),
  activePlainId: Joi.string().required(),
  expireAt: Joi.number().required(),
  createAt: Joi.number().required(),
  updateAt: Joi.number().required(),
});

interface IShift {
  startAt: number;
  endAt: number;
}

interface ITable {
  tableNumber: number;
  capacity: number;
  isOccupied: boolean;
  qr: Schema.Types.ObjectId;
}

interface IRestaurants {
  title: string;
  ownerId: Schema.Types.ObjectId;
  contactNo: string;
  emailId: string;
  shift: IShift[];
  tables: ITable[];
  ProfileImg: string;
  rating: number;
  review: string;
  esst: number; // Year Only
  address: string;
  city: string;
  picCode: number;
  activePlainId: Schema.Types.ObjectId;
  expireAt: number; // Timestamp
  createAt: number; // Timestamp
  updateAt: number; // Timestamp
}

// Restaurants schema
const restaurantSchema = new Schema<IRestaurants>({
  title: {
    type: String,
    required: true,
  },
  ownerId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
  emailId: {
    type: String,
    required: true,
  },
  shift: {
    type: [
      {
        startAt: Number,
        endAt: Number,
      },
    ],
    default: [],
  },
  tables: {
    type: [
      {
        tableNumber: Number,
        capacity: Number,
        isOccupied: Boolean,
        qr: Schema.Types.ObjectId,
      },
    ],
    default: [],
  },
  ProfileImg: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  review: String,
  esst: {
    type: Number,
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
  activePlainId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  expireAt: {
    type: Number,
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
export const Restaurant = model<IRestaurants>('Restaurant', restaurantSchema);
