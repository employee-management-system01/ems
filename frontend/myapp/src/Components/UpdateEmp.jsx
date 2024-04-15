import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function UpdateEmp() {
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

  // const {emp_id} = useParams;
  // console.log(emp_id)
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
  //  useEffect(()=>{
  //   getdata()
  //  },[])

  const { emp_id } = useParams();
  console.log(emp_id)
  useEffect(() => {
    // Fetch initial data (e.g., from an API endpoint)
    axios.get(`http://localhost:6060/empDetails/${emp_id} `).then((response) => {
      // const {emp_id,emp_name,password,department,email,hire_date,phone_no,salary} = response.data
      const userData = response.data[0];
      setFormData({
        ...formData,
        emp_id: userData.emp_id,
        emp_name: userData.emp_name,
        password: userData.password,
        department: userData.department,
        email: userData.email,
        hire_date: userData.hire_date,
        phone_no: userData.phone_no,
        salary: userData.salary
      });
      console.log(response);
      console.log(formData);

    });
  }, []);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // await axios.put(`http://localhost:6060/empDetails/${emp_id} `,formData)
  }

  return (
    <div>
      <div style={{ position: 'relative', height: '260px' }}>


        <Form onSubmit={handleSubmit}>
          <h3>Update</h3>
          <Row>
            <Col>
              <Form.Group controlId="emp_id">
                <Form.Label>Emp_id</Form.Label>
                <Form.Control type="text" placeholder="Enter emp_id" name='emp_id' value={formData.emp_id} onChange={handleInputChange} />
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

          <Button variant="primary"  >
            Submit
          </Button>

        </Form>
      </div>
    </div>
  )
}

export default UpdateEmp