import React from 'react';
import './App.css';
import Dashboard from './Components/Dashboard';
import {Routes,Route} from 'react-router-dom';
import Login from './Components/Login';
import Home from './Pages/Home';

import Profile from './Components/Profile';
import Logout from './Pages/Logout';
// import Department from './Pages/Department';
import Attendance from './Pages/Attendance';
// import AddCategory from './Components/AddDepartment';
import AddEmployee from './Components/AddEmployee';
import EmpTable from './Components/EmpTable';
import UpdateEmp from './Components/UpdateEmp';
import DeptTable from './Components/DeptTable';
import EmpDashboard from './EmpComponent/EmpDashboard';


function App() {
  
  return (
   <>
   
   {/* <Dashboard/> */}
   
   
   
    <Routes>
      <Route path = '/' element={<Login/>}></Route> 
      <Route path = '/emp_dashboard' element={<EmpDashboard/>}></Route> 
      <Route path = '/dashboard' element={<Dashboard/>}>
        <Route path='' element={<Home/>}></Route>
        <Route path='/dashboard/emptable' element={<EmpTable/>}></Route>
        <Route path='/dashboard/deptTable' element={<DeptTable/>}></Route>
        <Route path='/dashboard/attendance' element={<Attendance/>}></Route>
        <Route path='/dashboard/profile' element={<Profile/>}></Route>
        {/* <Route path='/dashboard/logout' element={<Logout/>}></Route> */}
        {/* <Route path='/dashboard/AddCategory' element={<AddCategory/>}></Route> */}
        <Route path='/dashboard/AddEmployee' element={<AddEmployee/>}></Route>
        <Route path='/dashboard/UpdateEmp/:emp_id' element={<UpdateEmp/>}></Route>


      </Route>
    </Routes>
  
   </>
  );
}

export default App;
