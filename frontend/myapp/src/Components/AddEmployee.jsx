import React from 'react'
import  { useState } from 'react';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import EmpTable from './EmpTable';


import { Form, Row, Col, Button } from 'react-bootstrap';




function AddEmployee({data}) {
  const [formData,setFormData]=useState({
    emp_id: '',
    emp_name :'',
    password:'',
    department:'',
    email: '',
    hire_date: '',
    phone_no:'',
    salary:'',
  }) ;

//   const [searchData,setSearchData] = useState('');
//   const [results,setresults] =  useState([]);
//   const handleChange1 = (event) =>{
//     setSearchData(event.target.value);
//   };

// useEffect(()=>{
//   const getData = async () =>{
//     if (searchData){
//       const res =  await axios.get(`http://localhost:6060/empDetails_search/${searchData}`);
//       setresults(res.data)
//     }else {
//       setresults([])
//     }
//   } 
//  getData()
// },[searchData])
  

  // const navigate =useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    // e.preventDefault();
    try {
      const url = 'http://localhost:6060/empDetails'; // Replace with your API endpoint

      // post api
      const response = await axios.post(url, formData);

      if (response.status === 200) {
        // Handle success (e.g., show a success message)
        console.log('Data submitted successfully!');
        
        
        // navigate('/dashboard/emptable')
      } else {
        // Handle error (e.g., show an error message)
        console.error('Error submitting data.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
    handleClose()
    data()
  
  };

  // useEffect(()=>{
  //   handleSubmit()
  // },[])

    //  modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return(
    <div style={{  position: 'relative',  }}>
      <div class="d-flex">
      
       
       
      <Button variant="primary" onClick={handleShow}>
        Add
      </Button>
    
      </div>
   

      <Modal
      style={{zIndex:"1500"}}
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
      
        <Modal.Body>
        <Form >
        <h3>Adding employee</h3>
        <Row>
          <Col>
            <Form.Group controlId="emp_id">
              <Form.Label>Emp_id</Form.Label>
              <Form.Control type="text" placeholder="Enter emp_id"   onChange={(e)=>{setFormData({...formData,emp_id:e.target.value})}}/>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="emp_name">
              <Form.Label>Employee name</Form.Label>
              <Form.Control type="text" placeholder="Enter employee name" name='emp_name' onChange={handleChange} />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter your password" name='password' onChange={handleChange}/>
            </Form.Group>
          </Col>

          <Col>  <Form.Group controlId="department">
            <Form.Label>Department</Form.Label>
            <Form.Control type="text" placeholder="Enter your department" name='department' onChange={handleChange}/>
          </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" name='email'onChange={handleChange}/>
            </Form.Group>
          </Col>

          <Col> <Form.Group controlId="hire_date">
            <Form.Label>Hire Date</Form.Label>
            <Form.Control type="date" placeholder="Enter date"  name='hire_date' onChange={handleChange}/>
          </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId='phone_no'>
              <Form.Label>Phone no</Form.Label>
              <Form.Control type='text' placeholder='Enter phone no' name='phone_no' onChange={handleChange} />
            </Form.Group>
          </Col>
          <Col>
          <Form.Group controlId='salary'>
            <Form.Label>Salary</Form.Label>
            <Form.Control type='number' placeholder='Enter salary' name='salary'onChange={handleChange}/>
          </Form.Group>
          </Col>
        </Row>

        {/* <Button variant="primary" type="submit" onClick={handleSubmit}  >
          Submit
        </Button> */}

      </Form> 
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="secondary" type='submit' onClick={handleSubmit}>
           Submit
          </Button>
          
        </Modal.Footer>
      </Modal>

      {/* <Form onSubmit={handleSubmit}>
        <h3>Adding employee</h3>
        <Row>
          <Col>
            <Form.Group controlId="emp_id">
              <Form.Label>Emp_id</Form.Label>
              <Form.Control type="text" placeholder="Enter emp_id" name='emp_id' value={formData.emp_id} onChange={handleChange}/>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="emp_name">
              <Form.Label>Employee name</Form.Label>
              <Form.Control type="text" placeholder="Enter employee name" name='emp_name'value={formData.emp_name} onChange={handleChange} />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter your password" name='password'value={formData.password} onChange={handleChange}/>
            </Form.Group>
          </Col>

          <Col>  <Form.Group controlId="department">
            <Form.Label>Department</Form.Label>
            <Form.Control type="text" placeholder="Enter your department" name='department'value={formData.department} onChange={handleChange}/>
          </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" name='email'value={formData.email} onChange={handleChange}/>
            </Form.Group>
          </Col>

          <Col> <Form.Group controlId="hire_date">
            <Form.Label>Hire Date</Form.Label>
            <Form.Control type="date" placeholder="Enter date"  name='hire_date'value={formData.hire_date} onChange={handleChange}/>
          </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId='phone_no'>
              <Form.Label>Phone no</Form.Label>
              <Form.Control type='number' placeholder='Enter phone no' name='phone_no'value={formData.phone_no} onChange={handleChange} />
            </Form.Group>
          </Col>
          <Col>
          <Form.Group controlId='salary'>
            <Form.Label>Salary</Form.Label>
            <Form.Control type='number' placeholder='Enter salary' name='salary'value={formData.salary} onChange={handleChange}/>
          </Form.Group>
          </Col>
        </Row>

        <Button variant="primary" type="submit"   >
          Submit
        </Button>

      </Form> */}


    </div>
  )
}

export default AddEmployee;