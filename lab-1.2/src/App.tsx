import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import './App.css'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import EmployeeDirectory from './components/employee-directory/employee-directory'
import EmployeeForm from './components/employee-form/employee-form'
import departmentsData from './data/employee-department.json'
import type { Department, Employee } from './components/employee-directory/employee-directory'
import Organization from './components/organization/organization'

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
      
      <Header />
      <EmployeeDirectory departments={departments} />
      <EmployeeForm departments={departments} onAddEmployee={addEmployee}
        />
      <Footer />
      
    </>
  )
}
      
export default App
