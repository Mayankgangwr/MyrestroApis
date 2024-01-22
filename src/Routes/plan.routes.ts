// Importing modules
import express from 'express';
import { PlanController } from '../Controllers/plan.controller';

// Initiating the router
export const planRouter = express.Router();

// Add plan route
planRouter.post('/', PlanController.addPlan);

// Get plans route
planRouter.get('/', PlanController.getPlans);

// Get single plan route
planRouter.get('/:id', PlanController.getPlan);

// Update plan route
planRouter.put('/:id', PlanController.updatePlan);

// Delete plan route
planRouter.delete('/:id', PlanController.deletePlan);

// Export router
export default planRouter;
