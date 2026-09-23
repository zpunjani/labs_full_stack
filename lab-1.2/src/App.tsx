import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import departmentsData from './data/employee-department.json';
import type { Department, Employee } from './components/employee-directory/employee-directory';
import Organization from './components/organization/organization';
import { Layout } from './components/layout/layout';
import Employees from './components/pages/employees';

function App() {

  const [departments, setDepartments] = useState<Department[]> (
    departmentsData as Department[]
  )

  function addEmployee(employee: Employee, departmentName: string) {
    setDepartments((currentDepartments) =>
      currentDepartments.map((department) =>
        department.name === departmentName ? {
          ...department,
          employees:[
            ...department.employees,
            employee
          ]}: department
        )
      )
  }

  return (
    <>
      
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="employees" element={<Employees departments={departments} onAddEmployee={addEmployee} />} />
          <Route path="organization" element={<Organization />} />
        </Route>
      </Routes>
    </>
  )
}
      
export default App
