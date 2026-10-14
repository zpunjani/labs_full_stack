import { useEffect, useState } from "react";
import { employeeService } from "../services/employeeService";
import type { Employee, Department } from "../components/employee-directory/employee-directory";

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
    ): Promise<boolean> {
        setError(null);
        try {
            const updatedDepartments = await employeeService.addEmployee(employee, departmentName);
            setDepartments(updatedDepartments);
            return true;
        } catch (error) {
            setError(
                error instanceof Error 
                ? error.message 
                : "Failed to add employee"
            );
            return false;
        }
    }

    return {
        departments,
        loading,
        error,
        addEmployee,
    };  
}

