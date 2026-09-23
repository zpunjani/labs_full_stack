import EmployeeDirectory from "../employee-directory/employee-directory";
import EmployeeForm from '../employee-form/employee-form';
import type { Department, Employee } from "../employee-directory/employee-directory";

interface EmployeesProps {
    departments: Department[];
    onAddEmployee: (employee: Employee, departmentName: string) => void;
}

function Employees({ departments, onAddEmployee}:EmployeesProps) {
    return (
        <>
            <EmployeeDirectory departments={departments} />
            <EmployeeForm departments={departments} onAddEmployee={onAddEmployee} />
        </>
    )
}

export default Employees