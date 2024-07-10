// import Table from 'react-bootstrap/Table';
// // import Button from 'react-bootstrap/Button';
// import React, { useState, useEffect } from 'react';
// // import DeleteIcon from '@mui/icons-material/Delete';
// import Switch from '@mui/material/Switch';
// // import EditIcon from '@mui/icons-material/Edit';
// // import EmpTable from '../Components/EmpTable';
// // import Button from 'react-bootstrap/esm/Button';
// // import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import moment from 'moment'

// import AddEmployee from './AddEmployee';
// import UpdateEmp from './UpdateEmp';
// import ViewRole from './ViewRole';
// import AssRole from './AssRole';


// function EmpTable() {
//   let [data, setData] = useState([])
//   // const navigate = useNavigate();

//   async function  getdata() {
//     let res = await axios.get('http://localhost:6060/empDetails')

//     setData(res.data)
//     console.log(res.data);
//   }
//   useEffect(() => {
//     getdata()
//   }, [])

//   // delete

//   // async function deleteData(emp_id) {

//   //   let url = 'http://localhost:6060/empDetails';
//   //   let res = await axios.delete(`${url}?emp_id=${emp_id}`);
//   //   console.log(res);
//   //   getdata();

//   // }

//   // toggle button
//   // const [checked, setChecked] = React.useState(true);

//   // const handleChange = (event) => {
//   //   setChecked(event.target.checked);
//   // };

//   /////////////////////////////////////////////  toggle api /////////////////////////////////////////////////
  
//   async function isActive(emp_id){
//     let res =  await axios.put(`http://localhost:6060/status/active/${emp_id}`)
//     console.log(res);
//   }

//   async function isDeactive(emp_id){
//     let res =  await axios.put(`http://localhost:6060/status/deactive/${emp_id}`)
//     console.log(res);
//   }



//   return (
//     <div>
//       <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//         <h3>Employees List</h3>
//         <div class="d-flex">
//         <input class="form-control me-2 m " type="search" placeholder="Search..." aria-label="Search" />
//         <button class="btn btn-outline-success" type="submit" style={{marginRight:'15px'}}>Search</button>
//         <AddEmployee data={getdata} />
//         </div>
        
//       </div>
//       <br></br>
//       <Table striped bordered hover variant='light' >

//         <thead>
//           <tr>
//             <th>Emp_id</th>
//             <th>Employee name</th>
//             <th>Email</th>
//             <th>Hire date</th>
//             <th>Phone no</th>
//             <th>Salary</th>
//             <th>Status</th>
//             <th>Role</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {
//             data.map((item) => {
//               return (
//                 <tr>
//                   <td>{item.emp_id}</td>
//                   <td>{item.emp_name}</td>
//                   <td>{item.email}</td>
//                   <td>{moment(item.hire_date).format('YYYY-MM-DD')}</td>
//                   <td>{item.phone_no}</td>
//                   <td>{item.salary}</td>
//                   <td>  
//                   {
//                     item.status === 'deactive' ? <Switch
//                     // checked={checked}
//                     onChange={(e)=>{isActive(item.emp_id,e)}}
//                     inputProps={{ 'aria-label': 'controlled' }} /> : <Switch
//                     // checked={checked}
//                     onChange={(e)=>{isDeactive(item.emp_id,e)}}
//                     inputProps={{ 'aria-label': 'controlled' }} />
//                   }
//                   </td>
//                   {/* <td>{item.department}</td> */}

//                   <td>
//                     {/* <Button variant='light'><VisibilityIcon /></Button> */}
//                     {/* <Button variant='light' onClick={()=>{deleteData(item.emp_id)}}><DeleteIcon style={{color:'red'}}/></Button> */}
//                     <div style={{ display: 'flex' }}>
//                       <ViewRole id={item.emp_id} getData={getdata}/>
//                       <AssRole id={item.emp_id} getData={getdata} />
//                     </div>

//                   </td>

//                   <td>
//                     {/* <Button variant='light'onClick={()=>{navigate(`/dashboard/UpdateEmp/${item.emp_id}`)}}><EditIcon style={{color:'green'}}/></Button> */}
//                     <UpdateEmp id={item} getData={getdata} />
//                     {/* <Button variant='light' onClick={() => { deleteData(item.emp_id) }}><DeleteIcon style={{ color: 'red' }} /></Button> */}
//                   </td>
//                 </tr>
//               )
//             })

//           }
//         </tbody>
//       </Table>
//     </div>
//   );
// }

// export default EmpTable;

import Table from 'react-bootstrap/Table';
import React, { useState, useEffect } from 'react';
import Switch from '@mui/material/Switch';
import axios from 'axios';
import moment from 'moment';
import AddEmployee from './AddEmployee';
import UpdateEmp from './UpdateEmp';
import TablePagination from '@mui/material/TablePagination';
import ViewRole from './ViewRole';
import AssRole from './AssRole';

function EmpTable() {
  let [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  async function getdata() {
    let res = await axios.get('http://localhost:6060/empDetails');
    setData(res.data);
    setFilteredData(res.data); // Initialize filteredData with the full data
  }

  useEffect(() => {
    getdata();
  }, []);

  async function isActive(emp_id) {
    let res = await axios.put(`http://localhost:6060/status/active/${emp_id}`);
    console.log(res);
  }

  async function isDeactive(emp_id) {
    let res = await axios.put(`http://localhost:6060/status/deactive/${emp_id}`);
    console.log(res);
  }

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    const searchResults = data.filter((item) =>
      item.emp_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(searchResults);
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h3>Employees List</h3>
        <div className="d-flex">
          <input
            className="form-control me-2 m"
            type="search"
            placeholder="Search by name..."
            aria-label="Search"
            onChange={handleSearch}
            value={searchTerm}
          />
          <button
            className="btn btn-outline-success"
            type="button"
            style={{ marginRight: '15px' }}
            onClick={handleSearchClick}
          >
            Search
          </button>
          <AddEmployee data={getdata} />
        </div>
      </div>
      <br />
      <Table striped bordered hover variant="light">
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
          {filteredData
         .slice((page * rowsPerPage), (page * rowsPerPage) + rowsPerPage)
          .map((item) => {
            
            return (
              <tr key={item.emp_id}>
                <td>{item.emp_id}</td>
                <td>{item.emp_name}</td>
                <td>{item.email}</td>
                <td>{moment(item.hire_date).format('YYYY-MM-DD')}</td>
                <td>{item.phone_no}</td>
                <td>{item.salary}</td>
                <td>
                  {item.status === 'deactive' ? (
                    <Switch
                      onChange={(e) => {
                        isActive(item.emp_id, e);
                      }}
                      inputProps={{ 'aria-label': 'controlled' }}
                    />
                  ) : (
                    <Switch
                      onChange={(e) => {
                        isDeactive(item.emp_id, e);
                      }}
                      inputProps={{ 'aria-label': 'controlled' }}
                    />
                  )}
                </td>
                <td>
                  <div style={{ display: 'flex' }}>
                    <ViewRole id={item.emp_id} getData={getdata} />
                    <AssRole id={item.emp_id} getData={getdata} />
                  </div>
                </td>
                <td>
                  <UpdateEmp id={item} getData={getdata} />
                </td>
              </tr>
            );
          })}
        </tbody>
        
      </Table>
      <TablePagination
  rowsPerPageOptions={[5,10]}
  component="div"
  count={filteredData.length}
  page={page}
  onPageChange={handleChangePage}
  rowsPerPage={rowsPerPage}
  onRowsPerPageChange={handleChangeRowsPerPage}
/>
    </div>
    
  );
}

export default EmpTable;