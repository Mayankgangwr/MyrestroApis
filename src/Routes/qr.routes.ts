// Importing modules
import express from 'express';
import { QRController } from '../Controllers/qr.controller';

// Initiating the router
const qrRouter = express.Router();

// Add user route
qrRouter.post('/', QRController.addQR);

// Get users route
qrRouter.get('/', QRController.getQRs);

// Get single user route
qrRouter.get('/:id', QRController.getQR);

// Update user route
qrRouter.put('/:id', QRController.updateQR);

// Delete user route
qrRouter.delete('/:id', QRController.deleteQR);

// Export router
export default qrRouter;
