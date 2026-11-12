import type { RequestHandler } from 'express';
import { z} from 'zod';

const employeeSchema = z.object({
    employee: z.object({
        firstName: z.string().trim().min(3, { message: "First name must be at least 3 characters long" }),
        lastName: z.string().trim().optional(),
    }),

    departmentName: z.string().trim().min(1, { message: "Department is required" }),
}).strict();

export const validateEmployee: RequestHandler = (req, res, next) => {
    const result = employeeSchema.safeParse(req.body);

    if (!result.success) {
        res.status(400).json({ 
            error: "Invalid Employee",
            details: z.flattenError(result.error)
        });

        return;
    }

    req.body = result.data;
    next();
};