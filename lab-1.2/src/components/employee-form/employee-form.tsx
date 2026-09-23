// Form for adding a new employee
import { useState } from 'react'
import type { Department } from '../employee-directory/employee-directory'

interface EmployeeFormData {
    departments: Department[];
}
function EmployeeForm( {departments}: EmployeeFormData) { 

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [selectedDepartment, setSelectedDepartment] = useState('')
    const [validationMessage, setValidationMessage] = useState('')

    function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault()
        setValidationMessage('')

        if (firstName.trim().length < 3) {
            setValidationMessage('First name must be atleast 3 characters')
            return
        }

        if(!selectedDepartment) {
            setValidationMessage('Please select a department')
            return
        }
    }

    return(
        <section>
            <h2>Add Employee</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" id="firstName" name="firstName" 
                        value={firstName} onChange={(event)=> setFirstName(event.target.value)}/>

                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" name="lastName"
                        value={lastName} onChange={(event)=> setLastName(event.target.value)} />

                    <label htmlFor="department">Department</label>
                    <select id="department" name="department"
                        value={selectedDepartment} onChange={(event)=> setSelectedDepartment(event.target.value)}>
                        
                        <option value="">Select a department</option>
                        
                        {departments.map((department) => (
                            <option key = {department.name} value = {department.name}>
                                {department.name}
                            </option>
                        ))}
                    </select>

                    {validationMessage && (<p>{validationMessage}</p>)}

                    <button type="submit">Add Employee</button>
                </div>


            </form>
        </section>
    )
}

export default EmployeeForm