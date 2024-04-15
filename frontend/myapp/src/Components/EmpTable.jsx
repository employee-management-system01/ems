import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import React, { useState, useEffect } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
// import EmpTable from '../Components/EmpTable';
// import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function EmpTable() {
  let [data, setData] = useState([])
  const navigate = useNavigate();

  async function getdata() {
    let res = await axios.get('http://localhost:6060/empDetails')

    setData(res.data)
    console.log(res.data);
  }
  useEffect(() => {
    getdata()
  }, [])

  // delete
  
  async function deleteData(emp_id){
   
    let url = 'http://localhost:6060/empDetails';
    let res =await axios.delete(`${url}?emp_id=${emp_id}`);
    console.log(res);
    getdata();
    
  }
 
  
  return (
    <div>
   <div style={{display:'flex', justifyContent:'space-between'}}>
      <h3>Employees List</h3>
      <Button onClick={()=>{navigate("/dashboard/AddEmployee")}} >Add</Button>   
      </div>
      <br></br>
    <Table striped bordered hover variant='light'>
     
      <thead>
        <tr>
          <th>Emp_id</th>
          <th>Employee name</th>
          <th>Department</th>
          <th>Email</th>
          <th>Hire date</th>
          <th>Phone no</th>
          <th>Salary</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((item)=>{
            return(
              <tr>
              <td>{item.emp_id}</td>
              <td>{item.emp_name}</td>
              <td>{item.department}</td>
              <td>{item.email}</td>
              <td>{item.hire_date}</td>
              <td>{item.phone_no}</td>
              <td>{item.salary}</td>
              
              
              <td>
                <Button variant='light'onClick={()=>{navigate(`/dashboard/UpdateEmp/${item.emp_id}`)}}><EditIcon style={{color:'green'}}/></Button>
                <Button variant='light' onClick={()=>{deleteData(item.emp_id)}}><DeleteIcon style={{color:'red'}}/></Button>
                </td>
            </tr>
            )
          })
            
        }
      </tbody>
    </Table>
    </div>
  );
      }

export default EmpTable;