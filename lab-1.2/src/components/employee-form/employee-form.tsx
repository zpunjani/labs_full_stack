// Form for adding a new employee
import type React from 'react'
import type { Department, Employee } from '../employee-directory/employee-directory'
import useFormInput from '../../hooks/useFormInput'

interface EmployeeFormData {
    departments: Department[];
    onAddEmployee: (employee: Employee, departmentName: string) => void;
}

function EmployeeForm( {departments, onAddEmployee}: EmployeeFormData) {

    const firstName = useFormInput('')
    const lastName = useFormInput('')
    const selectedDepartment = useFormInput('')

    async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault()

        const isFirstNameValid = firstName.validateInput((value) => {
            if (value.trim().length < 3) {
                return 'First name must be at least 3 characters long'
            }
            return null
        })

        const isDepartmentValid = selectedDepartment.validateInput((value) => {
            if (!value) {
                return 'Please select a department'
            }
            return null
        })

        if (!isFirstNameValid || !isDepartmentValid) {
            return
        }

        const newEmployee: Employee = {
            firstName: firstName.value.trim(),
            lastName: lastName.value.trim() || undefined
        }

        onAddEmployee(newEmployee, selectedDepartment.value)

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