import type { Department, Employee } from './EmployeeDepartment'


export interface EmployeeFormData {
    departments: Department[];
    onAddEmployee: (employee: Employee, departmentName: string) => Promise<{success: boolean, error: string | null}>;
}