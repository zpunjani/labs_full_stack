// Form for adding a new employee
import type { Department } from '../employee-directory/employee-directory'

interface EmployeeFormData {
    departments: Department[];
}
function EmployeeForm( {departments}: EmployeeFormData) { 
    return(
        <section>
            <h2>Add Employee</h2>

            <form>
                <div>
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" id="firstName" name="firstName" />

                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" name="lastName" />

                    <label htmlFor="department">Department</label>
                    <select id="department" name="department">
                        <option value="">Select a department</option>
                        
                        {departments.map((department) => (
                            <option key = {department.name} value = {department.name}>
                                {department.name}
                            </option>
                        ))}
                    </select>

                    <button type="submit">Add Employee</button>
                </div>


            </form>
        </section>
    )
}

export default EmployeeForm