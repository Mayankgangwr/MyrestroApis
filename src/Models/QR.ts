import { Schema, model } from 'mongoose';
import Joi from 'joi';

// Validation schema for QRs
export const QrSchemaValidate = Joi.object({
  url: Joi.string().required(),
  restroId: Joi.string().required(),
  tableno: Joi.number().required(),
  qrurl: Joi.string().required(),
});

// Creating an interface
interface IQRs {
  url: string;
  restroId: string;
  tableno: number;
  qrurl: string;
}

// QRs schema
const qrSchema = new Schema<IQRs>({
  url: {
    type: String,
    required: true,
  },
  restroId: {
    type: String,
    required: true,
  },
  tableno: {
    type: Number,
    required: true,
  },
  qrurl: {
    type: String,
    required: true,
  },
});

// Creating a model
export const QR = model<IQRs>('QR', qrSchema);
