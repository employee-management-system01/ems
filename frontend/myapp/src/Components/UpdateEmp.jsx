import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Row, Col, Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import EditIcon from '@mui/icons-material/Edit';
// import { useNavigate } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
// import { Form, Row, Col, Button } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';

function UpdateEmp({ id,getData }) {
  const [formData, setFormData] = useState({
    emp_id: '',
    emp_name: '',
    password: '',
    department: '',
    email: '',
    hire_date: '',
    phone_no: '',
    salary: '',
  })


  //   pre fill data function
  function getdata() {
    setFormData({
      ...formData, 
      emp_id: id.emp_id,
      emp_name: id.emp_name,
      password: id.password,
      department: id.department,
      email: id.email,
      hire_date: id.hire_date,
      phone_no: id.phone_no,
      salary: id.salary,
    })

  }
  // const {emp_id} = useParams;
  // console.log(id)
  //  async function getdata(){
  //   // 
  //   let res= await axios.get(`http://localhost:6060/empDetails`)
  //   setFormData({...formData,
  //       emp_id:res.data.emp_id,
  //       emp_name:res.data.emp_name,
  //       password:res.data.password,
  //       department:res.data.department,
  //       email:res.data.email,
  //       hire_date:res.data.hire_date,
  //       phone_no:res.data.phone_no,
  //       salary:res.data.salary
  //       });

  //  }
  useEffect(() => {
    getdata()

  }, [])


  
  // const { emp_id } = useParams();
  console.log(id.emp_id)
  // useEffect(() => {
  // //   // Fetch initial data (e.g., from an API endpoint)
  //   axios.get(`http://localhost:6060/empDetails/${id} `).then((response) => {
  //     // const {emp_id,emp_name,password,department,email,hire_date,phone_no,salary} = response.data
  //     const userData = response.data[0];
  //     setFormData({
  //       ...formData,
  //       emp_id: userData.emp_id,
  //       emp_name: userData.emp_name,
  //       password: userData.password,
  //       department: userData.department,
  //       email: userData.email,
  //       hire_date: userData.hire_date,
  //       phone_no: userData.phone_no,
  //       salary: userData.salary
  //     });
  //     console.log(response);
  //     console.log(formData);

  //   });
  // }, []);


  // update pre fill
  // const[data,setData] =  useState({
  //   emp_id: ' ',
  //   emp_name:'',
  //   password:'',
  //   department:'',
  //   email:'',
  //   hire_date:'',
  //   phone_no:'',
  //   salary:''
  // })



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleSubmit = (e) => {
  //   // e.preventDefault();
  //   // handleClose();
  //   axios.put(`http://localhost:6060/empDetails/${id}`, formData)
  //     .then(response => {
  //       // Handle the response here
  //       console.log(response.data);
  //     })
  //     .catch(error => {
  //       // Handle the error here
  //       console.error("Error updating data: ", error);
  //     });
  // }


  const handleSubmit = async (id) => {
    const url = 'http://localhost:6060/empDetails'
    const emp_id = id.emp_id
    console.log(emp_id); 

    const res = await axios.put(`${url}/${emp_id}`, formData)
    console.log(res);
    if (res.data.affectedRows > 0) {
      console.log('Form data submitted:', formData);
      getData()
      handleClose();
    } else {
      console.log('Error submit data');
    }
  }


  //modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="light" onClick={handleShow}>
        <EditIcon style={{ color: 'green' }} />
      </Button>

      <Modal
        style={{ zIndex: "1500" }}
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >

        <Modal.Body>
          <Form >
            <h3>Update</h3>
            <Row>
              <Col>
                <Form.Group controlId="emp_id">
                  <Form.Label>Emp_id</Form.Label>
                  <Form.Control type="text" placeholder="Enter emp_id" name='emp_id' value={formData.emp_id} />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="emp_name">
                  <Form.Label>Employee name</Form.Label>
                  <Form.Control type="text" placeholder="Enter employee name" name='emp_name' value={formData.emp_name} onChange={handleInputChange} />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Enter your password" name='password' value={formData.password} onChange={handleInputChange} />
                </Form.Group>
              </Col>

              <Col>  <Form.Group controlId="department">
                <Form.Label>Department</Form.Label>
                <Form.Control type="text" placeholder="Enter your department" name='department' value={formData.department} onChange={handleInputChange} />
              </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" name='email' value={formData.email} onChange={handleInputChange} />
                </Form.Group>
              </Col>

              <Col> <Form.Group controlId="hire_date">
                <Form.Label>Hire Date</Form.Label>
                <Form.Control type="date" placeholder="Enter date" name='hire_date' value={formData.hire_date} onChange={handleInputChange} />
              </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId='phone_no'>
                  <Form.Label>Phone no</Form.Label>
                  <Form.Control type='number' placeholder='Enter phone no' name='phone_no' value={formData.phone_no} onChange={handleInputChange} />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId='salary'>
                  <Form.Label>Salary</Form.Label>
                  <Form.Control type='number' placeholder='Enter salary' name='salary' value={formData.salary} onChange={handleInputChange} />
                </Form.Group>
              </Col>
            </Row>



          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

          <Button variant="success" type='submit' onClick={() => { handleSubmit(id) }} >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>

     
    </>
  )
}

export default UpdateEmp;