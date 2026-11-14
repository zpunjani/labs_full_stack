import { prisma }  from '../db/prisma'
import type { Department, Employee } from '../types/employeeDepartment'

export const employeeRepository = {
    async getDepartments(): Promise<Department[]> {
        const departments = await prisma.department.findMany({
            include: {
                employees: {
                    select: {
                        firstName: true,
                        lastName: true
                    }
                }
            }
        });

        return departments.map((department) => ({
            name: department.name,
            employees: department.employees.map((employee) => ({
                firstName: employee.firstName,
                lastName: employee.lastName
            }))
        }));
    },

    async addEmployee(departmentName: string, employee: Employee): Promise<Department[]> {
        const department = await prisma.department.findUnique({
            where: {
                name: departmentName
            }
        });

        if (department) {
            await prisma.employee.create({
                data: {
                    firstName: employee.firstName,
                    lastName: employee.lastName ?? "",
                    departmentId: department.id
                }
            });
        }

        return this.getDepartments();
    },
}