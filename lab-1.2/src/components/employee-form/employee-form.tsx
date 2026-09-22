// Form for adding a new employee

function EmployeeForm() { 
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
                    </select>

                    <button type="submit">Add Employee</button>
                </div>


            </form>
        </section>
    )
}

export default EmployeeForm