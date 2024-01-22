// Import module
import { Plan } from '../Models/plans';

class planService {
    // Create a plan
    public async createPlan(data: any) {
        try {
            const newPlan = await Plan.create(data);
            return newPlan;
        } catch (error) {
            console.error(error);
            throw new Error('Error creating plan');
        }
    }

    // Get all plans
    public async getPlans() {
        try {
            const plans = await Plan.find({});
            return plans;
        } catch (error) {
            console.error(error);
            throw new Error('Error getting plans');
        }
    }

    // Get a single plan
    public async getPlan(id: string) {
        try {
            const plan = await Plan.findById({ _id: id });
            if (!plan) {
                return 'Plan not available';
            }
            return plan;
        } catch (error) {
            console.error(error);
            throw new Error('Error getting plan');
        }
    }

    // Update a plan
    public async updatePlan(id: string, data: any) {
        try {
            const plan = await Plan.findByIdAndUpdate({ _id: id }, data, { new: true });
            if (!plan) {
                return 'Plan not available';
            }
            return plan;
        } catch (error) {
            console.error(error);
            throw new Error('Error updating plan');
        }
    }

    // Delete a plan by using the find by id and delete
    public async deletePlan(id: string) {
        try {
            const plan = await Plan.findByIdAndDelete(id);
            if (!plan) {
                throw new Error('Plan not found');
            }
        } catch (error) {
            console.error(error);
            throw new Error('Error deleting plan');
        }
    }
}

// Export the class
export const PlanServices = new planService();
