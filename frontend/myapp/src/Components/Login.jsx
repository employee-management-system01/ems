import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import '../Components/Login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import MyContext from '../context/MyContext';

function Login() {
  const navigate = useNavigate(); 
  
  // useState form data
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const apiData =  useContext(MyContext)
  console.log(apiData);
  const handleSubmit = (e) => {
    e.preventDefault();
    postData()
    alert('data submitted');
  }




 

  const postData = async () => {
    try {
      const url = 'http://localhost:6060/login';
      console.log(formData)
      const res = await axios.post(url, formData);
      console.log(res.data);
      console.log(res.data.user.role_name);

      //

      if (res.status === 200) {
        console.log('Data submitted successfully');
        console.log(apiData);
        if (res.data.user.role_name === 'Admin') {
          console.log(res.data.user.role_name);
          navigate('/dashboard');
        } else {
          navigate('/emp_dashboard' );
        }
      } else {
        console.log('Error in data submitting');
      }
    } catch (error) {
      console.log(error);
    }
  };
 
  return (
    <>
      <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
        <div className='p-3 rounded w-25 border loginForm'>
          <h2>Login page</h2>
          <div className='center'><AccountCircleIcon /></div>
          <Form onSubmit={(e)=>{handleSubmit(e)}}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={(e) => { setFormData({ ...formData, email: e.target.value }) }} />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={(e) => { setFormData({ ...formData, password: e.target.value }) }} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              
            </Form.Group>
            <Button variant="primary" type="submit" >
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}

export default Login;
