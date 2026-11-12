import type { EmployeeData } from '../../types/EmployeeDepartment'

function EmployeeDirectory({ departments }: EmployeeData) {
    return (
        <main>
            <h2>Employee Directory</h2>

            {departments.map((department) => (
                <section key={department.name}>
                    <h3>{department.name}</h3>

                    <table>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {department.employees.map((employee) => (
                                <tr key={employee.firstName}>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
            ))}
        </main>
    )
}

export default EmployeeDirectory