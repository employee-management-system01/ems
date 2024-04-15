import * as React from 'react';
import Table from 'react-bootstrap/Table';
import axois from 'axios';
import { useState, useEffect } from 'react';

import Button from 'react-bootstrap/Button';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';




export default function DeptTable() {

  // data ko state variable store kr va rhe hai
  const [data, setData] = useState([])
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // data fetch kr rhe hai backend se
  async function getdata() {
    let res = await axois.get('http://localhost:6060/roleDetails')


    // res -> res ke ander obj ke form me data store ho rha hai ,  res obj ke ander data naam ki property hai us data me hamra data store hai
    console.log(res);
    console.log(res.data);
    setData(res.data)
  }
  useEffect(() => {
    getdata()
  }, [])


  React.useEffect(() => {

  })

  return (
    <>
      <Table striped bordered hover variant='light'>

        <thead>
          <tr>
            <th>Role_id</th>
            <th>Role name</th>
            <th>Role description</th>
            <th>Action</th>

          </tr>
        </thead>
        <tbody>
          {
            data.map((item) => {
              {/*data me map method ka use kiya hai  */ }
              return (
                <tr>
                  <td>{item.role_id}</td>
                  <td>{item.role_name}</td>
                  <td>{item.description}</td>



                  <td>
                    <Button variant='light'><EditIcon style={{ color: 'green' }} /></Button>
                    <Button variant='light' ><DeleteIcon style={{ color: 'red' }} /></Button>
                  </td>
                </tr>
              )
            })

          }
        </tbody>
      </Table>
    </>
  );
}


