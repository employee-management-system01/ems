import React, { useState, useEffect } from 'react'
import EditNoteIcon from '@mui/icons-material/EditNote';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { Form, Row, Col, Button } from 'react-bootstrap';

const AssRole = ({id,getData}) => {

  const [option, setOption] = useState([])


  async function getdata() {

    let res = await axios.get(`http://localhost:6060/roleDetails`)

    setOption(res.data)
    console.log(res.data);
  }
  useEffect(() => {
    getdata()
  }, [])

  // async function getdata2() {
 
  //   let res = await axios.get(`http://localhost:6060/roleDetails/${emp_id}`)
  
  //   // setData(res.data)
  //   console.log(res.data);
  // }


  //post
  const[formData,setFormData] = useState({
    role_id:'',
    emp_id:''

  })

  const emp_id = id
  // const data= getdata2

// pre fill data
 function filldata(){
  setFormData({
    ...formData,
    role_id:'',
    emp_id: emp_id
  })
 }


 useEffect(()=>{
  filldata()
 },[])



  // console.log(formData);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async () => {
    // e.preventDefault();
    try {
      const url = 'http://localhost:6060/roleDetails/roleass'; // Replace with your API endpoint
      //  console.log(formData);
      // post api
      const response = await axios.post(url, formData);

      if (response.status === 200) {
        // Handle success (e.g., show a success message)
        console.log('Data submitted successfully!');
        getData()
        // navigate('/dashboard/emptable')
        // data()
      } else {
        // Handle error (e.g., show an error message)
        console.error('Error submitting data.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
    handleClose()
    getData()
   
  
  };


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>

      <EditNoteIcon onClick={handleShow} />


      <Modal show={show} onHide={handleClose} style={{ zIndex: "1500" }}>
        <Modal.Header closeButton>
          <Modal.Title>Role assign</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form >

            <Row>
              <Col>
                <Form.Group controlId="emp_id">
                  <Form.Label>Emp_id</Form.Label>
                  <Form.Control type="text" placeholder="Enter emp_id" name='emp_id' value={formData.emp_id} readOnly/>
                </Form.Group>
              </Col>

            </Row>
            <Row>
              <Col>
              <Form.Label>Role name</Form.Label>
                <Form.Select aria-label="Default select example" name='role_id'onChange={handleChange}>
                  {option.map((item) =>{
                    return(
                      <option key={item.role_id} value={item.role_id}  >
                      {item.role_name}
                    </option>
                    )
                  })}
                </Form.Select>
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
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AssRole