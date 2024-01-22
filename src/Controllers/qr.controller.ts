// Import modules
import { QRServices } from '../Services/qr.service';
import { Request, Response } from 'express';
import { QrSchemaValidate } from '../Models/QR';

class qrController {
    // Add QR controller
   public addQR = async (req: Request, res: Response) => {
        // Data to be saved in the database
        const data = {
            url: req.body.url,
            restroId: req.body.restroId,
            tableno: req.body.tableno,
            qrurl: req.body.qrurl,
        };

        // Validating the request
        const { error, value } = QrSchemaValidate.validate(data);

        if (error) {
            res.status(400).send(error.message);
        } else {
            // Call the createQR function in the service and pass the data from the request
            const qr = await QRServices.createQR(value);
            res.status(201).send(qr);
        }
    }

    // Get all QRs
    public getQRs = async (req: Request, res: Response) => {
        const qrs = await QRServices.getQRs();
        res.send(qrs);
    }

    // Get a single QR
    public getQR = async (req: Request, res: Response) => {
        // Get id from the parameter
        const id = req.params.id;
        const qr = await QRServices.getQR(id);
        res.send(qr);
    }

    // Update QR
    public updateQR = async (req: Request, res: Response) => {
        const id = req.params.id;
        const qr = await QRServices.updateQR(id, req.body);
        res.send(qr);
    }

    // Delete a QR
    public deleteQR = async (req: Request, res: Response) => {
        const id = req.params.id;
        await QRServices.deleteQR(id);
        res.send('QR deleted');
    }
}

// Export class
export const QRController = new qrController();
