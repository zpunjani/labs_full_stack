import { employeeRepository } from '../repositories/employeeRepository'

import type { Employee, Department } from '../types/employeeDepartment'

function validateEmployee(
    employee: Employee,
    departmentName: string,
    departments: Department[]
): void {
    const errors: string[] = [];

    if (employee.firstName.trim().length < 3) {
        errors.push('First name must be at least 3 characters long');
    }

    const departmentExists = departments.some(
        (department) => department.name === departmentName
    );

    if (!departmentExists) {
        errors.push('Please select a valid department');
    }

    if (errors.length > 0) {
        throw new Error(errors.join(', '));
    }
}

export const employeeService = {
    async getDepartment(): Promise<Department[]> {
        return await employeeRepository.getDepartments();
    },
    
    async addEmployee(
            employee: Employee,
            departmentName: string,
    ): Promise<Department[]> {
            const departments = await employeeRepository.getDepartments();
            validateEmployee(employee, departmentName, departments);
            return employeeRepository.addEmployee(departmentName, employee);
        }
    };