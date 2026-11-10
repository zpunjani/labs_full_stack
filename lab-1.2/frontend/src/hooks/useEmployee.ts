import { useEffect, useState } from "react";
import { employeeService } from "../services/employeeService";
import type { Employee, Department } from "../types/EmployeeDepartment";
import type { AddEmployeeFunction } from "../types/addEmployee";


export function useEmployee() {
    const [departments, setDepartments] = useState<Department[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let ignore = false;

        async function loadDepartments() {
            try {
                const departments = await employeeService.getDepartment();
                if (!ignore) {
                    setDepartments(departments);
                }
            } catch {
                if (!ignore) {
                    setError("Failed to load departments");
                }
            } finally {
                if (!ignore) {
                    setLoading(false);
                }
            }
        }

        loadDepartments();

        return () => {
            ignore = true;
        };
    }, []);

    async function addEmployee(
        employee: Employee,
        departmentName: string
    ): Promise<AddEmployeeFunction> {
        setError(null);
        try {
            const updatedDepartments = await employeeService.addEmployee(employee, departmentName);
            setDepartments(updatedDepartments);
            return { success: true, error: null };
        } catch (error) {
            const message =
                error instanceof Error 
                ? error.message 
                : "Failed to add employee";
                
            return { success: false, error: message };
        }
    }

    return {
        departments,
        loading,
        error,
        addEmployee,
    };  
}

