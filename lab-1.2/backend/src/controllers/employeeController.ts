import type { Request, Response } from 'express'
import { employeeService } from '../services/employeeService'
import type { Employee, Department } from '../types/employeeDepartment'



export const employeeController = {
    async getAll(_req: Request, res: Response) {
            const departments = await employeeService.getDepartment();
            res.json(departments);
        },

    async add(req: Request, res: Response) {
        const { employee, departmentName } = req.body as { 
            employee: Employee; departmentName: string 
        };

        const departments = await employeeService.addEmployee(
            employee,
            departmentName  
        );

        res.status(201).json(departments);
    }
};


