// Form for adding a new employee
import type React from 'react'
import type { Department, Employee } from '../employee-directory/employee-directory'
import useFormInput from '../../hooks/useFormInput'

interface EmployeeFormData {
    departments: Department[];
    onAddEmployee: (employee: Employee, departmentName: string) => Promise<{success: boolean, error: string | null}>;
}

function EmployeeForm( {departments, onAddEmployee}: EmployeeFormData) {

    const firstName = useFormInput('')
    const lastName = useFormInput('')
    const selectedDepartment = useFormInput('')

    async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault()

        firstName.setMessage('');
        selectedDepartment.setMessage('');

        const newEmployee: Employee = {
            firstName: firstName.value.trim(),
            lastName: lastName.value.trim() || undefined
        }

        const result = await onAddEmployee(
            newEmployee,
            selectedDepartment.value
        )

        if (!result.success) {
            const message = result.error || "Unable to add Employee.";

            if (message.includes('First Name')) {
                firstName.setMessage(message)
            } else if (message.includes('Department')) {
                selectedDepartment.setMessage(message)
            } else {
                firstName.setMessage(message)
            }

            return;
        }

        firstName.resetInput()
        lastName.resetInput()
        selectedDepartment.resetInput()
    }

    return(
        <section>
            <h2>Add Employee</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={firstName.value}
                        onChange={(event) => firstName.onChange(event.target.value)}
                    />
                    {firstName.message && <p>{firstName.message}</p>}

                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={lastName.value}
                        onChange={(event) => lastName.onChange(event.target.value)}
                    />

                    <label htmlFor="department">Department</label>
                    <select
                        id="department"
                        name="department"
                        value={selectedDepartment.value}
                        onChange={(event) => selectedDepartment.onChange(event.target.value)}
                    >
                        <option value="">Select a department</option>

                        {departments.map((department) => (
                            <option key={department.name} value={department.name}>
                                {department.name}
                            </option>
                        ))}
                    </select>
                    {selectedDepartment.message && <p>{selectedDepartment.message}</p>}

                    <button type="submit">Add Employee</button>
                </div>
            </form>
        </section>
    )
}

export default EmployeeForm