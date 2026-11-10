import { Navigate,Routes, Route } from "react-router-dom";
import './App.css';
import Organization from './components/organization/organization';
import { Layout } from './components/layout/layout';
import Employees from './components/pages/employees';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/employees"  replace/>} />
        <Route path="employees" element={<Employees />} />
        <Route path="organization" element={<Organization />} />
      </Route>
    </Routes>   
    
  );
}

export default App;
