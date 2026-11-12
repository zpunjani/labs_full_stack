import type { Request, Response } from 'express'
import { RequestHandler } from 'express'
import { z} from 'zod'

const organizationSchema = z.object({
    firstName: z.string().trim().min(3, { message: "First name must be at least 3 characters long" }),
    lastName: z.string().trim().optional(),
    role: z.string().trim().min(1, { message: "Role is required" }),
}).strict()

export const validateOrganizationBody: RequestHandler = (req: Request, res: Response, next) => {
    const result = organizationSchema.safeParse(req.body)
    if (!result.success) {
        res.status(400).json({
            error: "Invalid organization data",
            details: z.flattenError(result.error)
        });
        
        return;
    }

    req.body = result.data;
    next();
}