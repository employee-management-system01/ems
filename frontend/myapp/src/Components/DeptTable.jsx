import * as React from 'react';
import Table from 'react-bootstrap/Table';
import axois from 'axios';
import { useState, useEffect } from 'react';

import Button from 'react-bootstrap/Button';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddRole from './AddRole';
// import AddDepartment from './AddDepartment';




const DeptTable = () => {
   // data ko state variable store kr va rhe hai
  const [data, setData] = useState([])
  
  // data fetch kr rhe hai backend se
  async function getData() {
    let res = await axois.get('http://localhost:6060/roleDetails')
        // res -> res ke ander obj ke form me data store ho rha hai ,  res obj ke ander data naam ki property hai us data me hamra data store hai
    console.log(res.data);
    
    setData(res.data)
  }
  useEffect(() => {
  getData()
  }, [])

//delete
    async function deleteData(role_id){
      console.log(role_id);
      let res =  await axois.delete(`http://localhost:6060/roleDetails/${role_id}`)
      console.log(res);
      getData()
    }

  return (
    <>
        <div>
   <div style={{display:'flex', justifyContent:'space-between'}}>
      <h3>Add Role</h3>
       <AddRole data = {getData}/>
      {/* Add component call */}
      </div>
      <br></br>
    <Table striped bordered hover variant='light'>
     
      <thead>
        <tr>
          <th>Role Id</th>
          <th>Role name</th>
          <th>Describe </th>
          <th>Action </th>
        
        </tr>
      </thead>
      <tbody>
        {
          data.map((item)=>{
            return(
              <tr>
              <td>{item.role_id}</td>
              <td>{item.role_name}</td>
              <td>{item.description}</td>
                <td>  
                  {/* <Button variant='light'><EditIcon style={{ color: 'green' }} /></Button> */}
                  <Button variant='light'onClick={()=>{deleteData(item.role_id)}} ><DeleteIcon style={{ color: 'red' }} /></Button>
                </td>
              </tr>
            )
          })
            
        }
      </tbody>
    </Table>
    </div>
    </>
  )
}

export default DeptTable;





//  function DeptTable() {

//   // data ko state variable store kr va rhe hai
//   const [data, setData] = useState([])
  

//   // data fetch kr rhe hai backend se
//   async function getData() {
//     let res = await axois.get('http://localhost:6060/roleDetails')


//     // res -> res ke ander obj ke form me data store ho rha hai ,  res obj ke ander data naam ki property hai us data me hamra data store hai
//     console.log(res.data);
    
//     setData(res.data)
//   }
//   useEffect(() => {
//   getData()
//   }, [])

// //  modal
 
//   return (
//     <>
//     <div style={{display:'flex', justifyContent:'space-between'}}>
//       <h3>Role List</h3>
      
//       <AddDepartment/>
//       </div>
//       <br></br>
      
//       <Table striped bordered hover variant='light'>

//         <thead>
//           <tr>
//             <th>Role_id</th>
//             <th>Role name</th>
//             <th>Role description</th>
//             <th>Action</th>

//           </tr>
//         </thead>
//         <tbody>
//           {
//             data.map((item) => {
//               {/*data me map method ka use kiya hai  */ }
//               return (
//                 <tr>
//                   <td>{item.role_id}</td>
//                   <td>{item.role_name}</td>
//                   <td>{item.description}</td>



//                   <td>
//                     <Button variant='light'><EditIcon style={{ color: 'green' }} /></Button>
//                     <Button variant='light' ><DeleteIcon style={{ color: 'red' }} /></Button>
//                   </td>
//                 </tr>
//               )
//             })

//           }
//         </tbody>
//       </Table>
//     </>
//   );
// }


// export default DeptTable;