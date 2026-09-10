import departments from '../../data/employee-department.json'

interface Employee {
    firstName: string;
    lastName?: string;
}

interface Department {
    name: string;
    employees: Employee[];
}

function EmployeeDirectory() {
    return (
        <main>
            <h2>Employee Directory</h2>
        </main>
    )
}

export default EmployeeDirectory