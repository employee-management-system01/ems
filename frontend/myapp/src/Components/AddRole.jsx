import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Form, Row, Col, Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';


const AddRole = ({data}) => {

  const [formData, setFormData] = useState({
    role_id: '',
    role_name: '', 
    description: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = async () => {
    try {
      const url = 'http://localhost:6060/roleDetails';
      const res = await axios.post(url, formData);
      if (res.status === 200) {
        // Handle success (e.g., show a success message)
        console.log('Data submitted successfully!');
        // navigate('/dashboard/emptable')
      } else {
        // Handle error (e.g., show an error message)
        console.error('Error submitting data.');
      }
    } catch (error) {
      console.log('Error:', error);
    }
     data()
     handleClose()
  }


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (

    <div style={{ position: 'relative', }}>
      <Button variant="primary" onClick={handleShow}>
        Add
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
            <h3>Adding Role</h3>
            <Row>
              <Col>
                <Form.Group controlId="emp_id">
                  <Form.Label>Role_id</Form.Label>
                  <Form.Control type="text" placeholder="Enter role_id" name='role_id' value={formData.emp_id} onChange={handleChange} />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="role_name">
                  <Form.Label>Role name</Form.Label>
                  <Form.Control type="text" placeholder="Enter role name" name='role_name' value={formData.emp_name} onChange={handleChange} />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>

                <Form.Group controlId="description">
                  <Form.Label>Description</Form.Label>


                  <Form.Control type="text" placeholder="Enter description" name='description' value={formData.password} onChange={handleChange} />
                </Form.Group>
              </Col>


            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" type='submit' onClick={handleSubmit}>
            Submit
          </Button>

        </Modal.Footer>
      </Modal>
    </div>

  )
}

export default AddRole;