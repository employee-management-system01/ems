import Table from 'react-bootstrap/Table';
// import Button from 'react-bootstrap/Button';
import React, { useState, useEffect } from 'react';
// import DeleteIcon from '@mui/icons-material/Delete';
import Switch from '@mui/material/Switch';
// import EditIcon from '@mui/icons-material/Edit';
// import EmpTable from '../Components/EmpTable';
// import Button from 'react-bootstrap/esm/Button';
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment'

import AddEmployee from './AddEmployee';
import UpdateEmp from './UpdateEmp';
import ViewRole from './ViewRole';
import AssRole from './AssRole';


function EmpTable() {
  let [data, setData] = useState([])
  // const navigate = useNavigate();

  async function  getdata() {
    let res = await axios.get('http://localhost:6060/empDetails')

    setData(res.data)
    console.log(res.data);
  }
  useEffect(() => {
    getdata()
  }, [])

  // delete

  // async function deleteData(emp_id) {

  //   let url = 'http://localhost:6060/empDetails';
  //   let res = await axios.delete(`${url}?emp_id=${emp_id}`);
  //   console.log(res);
  //   getdata();

  // }

  // toggle button
  // const [checked, setChecked] = React.useState(true);

  // const handleChange = (event) => {
  //   setChecked(event.target.checked);
  // };

  /////////////////////////////////////////////  toggle api /////////////////////////////////////////////////
  
  async function isActive(emp_id){
    let res =  await axios.put(`http://localhost:6060/status/active/${emp_id}`)
    console.log(res);
  }

  async function isDeactive(emp_id){
    let res =  await axios.put(`http://localhost:6060/status/deactive/${emp_id}`)
    console.log(res);
  }
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h3>Employees List</h3>

        <AddEmployee data={getdata} />
      </div>
      <br></br>
      <Table striped bordered hover variant='light'>

        <thead>
          <tr>
            <th>Emp_id</th>
            <th>Employee name</th>
            <th>Email</th>
            <th>Hire date</th>
            <th>Phone no</th>
            <th>Salary</th>
            <th>Status</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item) => {
              return (
                <tr>
                  <td>{item.emp_id}</td>
                  <td>{item.emp_name}</td>
                  <td>{item.email}</td>
                  <td>{moment(item.hire_date).format('YYYY-MM-DD')}</td>
                  <td>{item.phone_no}</td>
                  <td>{item.salary}</td>
                  <td>  
                  {
                    item.status === 'deactive' ? <Switch
                    // checked={checked}
                    onChange={(e)=>{isActive(item.emp_id,e)}}
                    inputProps={{ 'aria-label': 'controlled' }} /> : <Switch
                    // checked={checked}
                    onChange={(e)=>{isDeactive(item.emp_id,e)}}
                    inputProps={{ 'aria-label': 'controlled' }} />
                  }
                  </td>
                  {/* <td>{item.department}</td> */}

                  <td>
                    {/* <Button variant='light'><VisibilityIcon /></Button> */}
                    {/* <Button variant='light' onClick={()=>{deleteData(item.emp_id)}}><DeleteIcon style={{color:'red'}}/></Button> */}
                    <div style={{ display: 'flex' }}>
                      <ViewRole id={item.emp_id} getData={getdata}/>
                      <AssRole id={item.emp_id} getData={getdata} />
                    </div>

                  </td>

                  <td>
                    {/* <Button variant='light'onClick={()=>{navigate(`/dashboard/UpdateEmp/${item.emp_id}`)}}><EditIcon style={{color:'green'}}/></Button> */}
                    <UpdateEmp id={item} getData={getdata} />
                    {/* <Button variant='light' onClick={() => { deleteData(item.emp_id) }}><DeleteIcon style={{ color: 'red' }} /></Button> */}
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