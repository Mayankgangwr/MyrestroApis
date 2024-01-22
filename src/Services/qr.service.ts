// Import module
import { QR } from '../Models/QR';

class qrService {
    // Create a QR
    public async createQR(data: any) {
        try {
            const newQR = await QR.create(data);
            return newQR;
        } catch (error) {
            console.error(error);
            throw new Error('Error creating QR');
        }
    }

    // Get all QRs
    public async getQRs() {
        try {
            const qrs = await QR.find({});
            return qrs;
        } catch (error) {
            console.error(error);
            throw new Error('Error getting QRs');
        }
    }

    // Get a single QR
    public async getQR(id: string) {
        try {
            const qr = await QR.findById({ _id: id });
            if (!qr) {
                return 'QR not available';
            }
            return qr;
        } catch (error) {
            console.error(error);
            throw new Error('Error getting QR');
        }
    }

    // Update a QR
    public async updateQR(id: string, data: any) {
        try {
            const qr = await QR.findByIdAndUpdate({ _id: id }, data, { new: true });
            if (!qr) {
                return 'QR not available';
            }
            return qr;
        } catch (error) {
            console.error(error);
            throw new Error('Error updating QR');
        }
    }

    // Delete a QR by using the find by id and delete
   public async deleteQR(id: string) {
        try {
            const qr = await QR.findByIdAndDelete(id);
            if (!qr) {
                throw new Error('QR not found');
            }
        } catch (error) {
            console.error(error);
            throw new Error('Error deleting QR');
        }
    }
}

// Export the class
export const QRServices = new qrService();
