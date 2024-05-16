import React from 'react'
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useState, useEffect } from 'react'
import axios from 'axios';



const ViewRole = (props) => {

  // get data
  let [data, setData] = useState([])
  // const navigate = useNavigate();

  // let emp_id = id;
  // console.log(emp_id);
  // console.log(emp_id);

  async function getdata() {
    console.log("hh")
    let res = await axios.get(`http://localhost:6060/roleDetails/${props.id}`)

    setData(res.data)
    console.log(res.data);
  }
  // useEffect(() => {
  //   console.log("hiii");
  //   getdata();
  // }, [props.id]);


  //delete 
  async function deleteData(role_id) {

    let url = 'http://localhost:6060/roleDetails/roleassDel/';
    let res = await axios.delete(`${url}${role_id}`);
    console.log(res);
    getdata();

  }


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () =>{
    setShow(true);
    getdata()
    // console.log(props.id)
  } 
  return (
    <div>
      {/* <Button variant="light" > */}
      <VisibilityIcon onClick={handleShow} />
      {/* </Button> */}

      <Modal
        style={{ zIndex: "1500" }}
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >

        <Modal.Body>
          <h2>Role view</h2>
          <Table striped bordered hover variant='light'>
            <thead>
              <tr>
                <th>Emp Id</th>
                <th>Role Id</th>
                <th>Role name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                data.map((item) => {
                  return (
                    <tr>
                      <td>{item.emp_id}</td>
                      <td>{item.role_id}</td>
                      <td>{item.role_name}</td>
                      <td><Button onClick={() => deleteData(item.role_id)}>Delete</Button></td>
                    </tr>
                  )
                })
              }
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>


        </Modal.Footer>
      </Modal>


    </div>
  )
}

export default ViewRole