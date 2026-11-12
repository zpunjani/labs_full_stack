import type { Department, Employee } from '../types/EmployeeDepartment'

const baseUrl = import.meta.env.VITE_API_BASE_URL;
const endpoint = `${baseUrl}/api/employees`;

async function readJson<T>(response:Response): Promise<T> {
    if (!response.ok) {
        throw new Error(`API error:${response.status}`);
    }

    return (await response.json()) as T;
}

export const employeeRepository = {
    async getDepartments(): Promise<Department[]> {
        const response = await fetch(endpoint);
        return readJson<Department[]>(response);
        },

    async addEmployee(departmentName: string, employee: Employee): Promise<Department[]> {
        const response = await fetch(endpoint, {
            method: "POST",
            headers: {  
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ employee, departmentName })
        });
        
        return readJson<Department[]>(response);
    },
}