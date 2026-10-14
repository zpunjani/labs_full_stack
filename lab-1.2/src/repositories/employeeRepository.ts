import departmentData from '../data/employee-department.json'
import type { Department, Employee } from '../components/employee-directory/employee-directory'

let departments: Department[] = departmentData.map((department) => ({
    ...department,
    employees: department.employees.map((employee) => ({
        ...employee
    })),
}))

export const employeeRepository = {
    async getDepartments(): Promise<Department[]> {
        return departments.map((department) => ({
            ...department,
            employees: department.employees.map((employee) => ({
                ...employee
            }))
        }));
    },

    async addEmployee(departmentName: string, employee: Employee): Promise<Department[]> {
        departments = departments.map((department) => {
            if (department.name === departmentName) {
                return {
                    ...department,
                    employees: [...department.employees, {...employee}],
                };
            }
            return department;
        });
        return this.getDepartments();
    },
}