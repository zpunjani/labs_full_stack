export interface Employee {
    firstName: string;
    lastName?: string;
}

export interface Department {
    name: string;
    employees: Employee[];
}

export interface EmployeeData {
    departments: Department[];
}


export interface EmployeeFormData {
    departments: Department[];
    onAddEmployee: (employee: Employee, departmentName: string) => Promise<{success: boolean, error: string | null}>;
}