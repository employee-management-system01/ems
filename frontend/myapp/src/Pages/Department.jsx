import React from 'react';
import DeptTable from '../Components/DeptTable';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Department() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className='px-5 mt-3'>
      <div>
        <h3 className='d-flex justify-content-center' > Role list</h3>
        <Link to='/dashboard/AddCategory' className='btn btn-success'>Add Roles</Link>
      </div>
      <br></br>
      <DeptTable />
    </div>
  )
}

export default Department