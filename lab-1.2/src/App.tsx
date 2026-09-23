import { useState } from 'react'
import './App.css'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import EmployeeDirectory from './components/employee-directory/employee-directory'
import EmployeeForm from './components/employee-form/employee-form'
import departmentsData from './data/employee-department.json'
import type { Department } from './components/employee-directory/employee-directory'

function App() {

  const [departments, setDepartments] = useState<Department[]> (
    departmentsData as Department[]
  )

  return (
    <>
      
      <Header />
      <EmployeeDirectory departments={departments} />
      <EmployeeForm departments={departments}/>
      <Footer />
      
    </>
  )
}
      
export default App
