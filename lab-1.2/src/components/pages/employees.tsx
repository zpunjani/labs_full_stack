import EmployeeDirectory from "../employee-directory/employee-directory";
import EmployeeForm from '../employee-form/employee-form';
import  { useEmployee } from '../../hooks/useEmployee';

function Employees()   {
    const { departments, loading, error, addEmployee } = useEmployee();

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <>
            {error && <p>{error}</p>}
            <EmployeeDirectory departments={departments} />
            <EmployeeForm departments={departments} onAddEmployee={addEmployee} />
        </>
    );
}
export default Employees