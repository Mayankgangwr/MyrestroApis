// Import modules
import { PlanServices } from '../Services/plan.services';
import { Request, Response } from 'express';
import { PlanSchemaValidate } from '../Models/plans';

class planController {
    // Add plan controller
   public addPlan = async (req: Request, res: Response) => {
        // Data to be saved in the database
        const data = {
            title: req.body.title,
            description: req.body.description,
            timePeriod: req.body.timePeriod,
            mrp: req.body.mrp,
            price: req.body.price,
            features: req.body.features,
            createAt: req.body.createAt,
            updateAt: req.body.updateAt,
        };

        // Validating the request
        const { error, value } = PlanSchemaValidate.validate(data);

        if (error) {
            res.status(400).send(error.message);
        } else {
            // Call the createPlan function in the service and pass the data from the request
            const plan = await PlanServices.createPlan(value);
            res.status(201).send(plan);
        }
    }

    // Get all plans
    public getPlans = async (req: Request, res: Response) => {
        const plans = await PlanServices.getPlans();
        res.send(plans);
    }

    // Get a single plan
    public getPlan = async (req: Request, res: Response) => {
        // Get id from the parameter
        const id = req.params.id;
        const plan = await PlanServices.getPlan(id);
        res.send(plan);
    }

    // Update plan
    public updatePlan = async (req: Request, res: Response) => {
        const id = req.params.id;
        const plan = await PlanServices.updatePlan(id, req.body);
        res.send(plan);
    }

    // Delete a plan
    public deletePlan = async (req: Request, res: Response) => {
        const id = req.params.id;
        await PlanServices.deletePlan(id);
        res.send('Plan deleted');
    }
}

// Export class
export const PlanController = new planController();
