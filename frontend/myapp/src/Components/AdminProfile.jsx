import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';

import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';

const AdminProfile = () => {
  const [data,setData] = useState([])
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {setShow(true)
    handleClose2()
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl(null);
  };
  
  const getData =  async()=>{
    const res =  await axios.get('http://localhost:6060/adminProfile')
    setData(res.data)
    console.log(res.data);
  }

  useEffect(()=>{
    getData()
  },[]);
   
  return (
    <div>

<div>
      {/* <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        
      > */}
      <AccountCircleIcon onClick={handleClick}  id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}/>
      {/* </Button> */}
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={()=>{handleShow()}}>Profile</MenuItem>
        <MenuItem onClick={handleClose2}>My account</MenuItem>
        <MenuItem onClick={handleClose2}>Logout</MenuItem>
      </Menu>
    </div>
     
        
     

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        style={{ zIndex: "1500" }}
      >
        {/* <Modal.Header closeButton>
        </Modal.Header> */}
        <Modal.Body>
          <Modal.Title>Admin Profile</Modal.Title>
           <br />
           <div style={{height:'125px',width:'125px',background:'#ecedee',borderRadius:'50%',display:'inline-block',alignContent:'center', marginLeft:'175px'}}></div>
           <div style={{paddingLeft:'150px',marginTop:'5px'}}>
            {
              data.map((item)=>{
                return(
                  <div>
                  <p >EmpId:<span  style={{ marginLeft: '90px' }}>{item.emp_id}</span></p>
                  <p>Name:<span style={{ marginLeft: '90px' }}>{item.emp_name}</span></p>
                  <p>Email:<span style={{ marginLeft: '90px' }}>{item.email}</span></p>
                  <p>Phone no:<span style={{ marginLeft: '63px' }}>{item.phone_no}</span></p>
                  <p>RoleId:<span style={{ marginLeft: '90px' }}>{item.role_id}</span></p>
                  <p>Role Name:<span style={{ marginLeft: '55px' }}>{item.role_name}</span></p>
                  </div>
                )
              })
            }
          

           </div>
           
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AdminProfile;