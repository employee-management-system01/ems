// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';

// function AddDepartment() {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <>
//       <div style={{  position: 'relative',  }}>
//        <Button variant="primary" onClick={handleShow}>
//         Add
//       </Button>

//       <Modal
//         show={show}
//         onHide={handleClose}
//         backdrop="static"
//         keyboard={false}
//       >
      
//         <Modal.Body>
//         <Form >
//         <h3>Add</h3>
//         <Row>
//           <Col>
//             <Form.Group controlId="emp_id">
//               <Form.Label>Role id</Form.Label>
//               <Form.Control type="text" placeholder="Enter emp_id" name='emp_id' />
//             </Form.Group>
//           </Col>
//           <Col>
//             <Form.Group controlId="emp_name">
//               <Form.Label>Role</Form.Label>
//               <Form.Control type="text" placeholder="Enter employee name" name='emp_name'value={formData.emp_name} onChange={handleChange} />
//             </Form.Group>
//           </Col>
//         </Row>
//         <Row>
//           <Col>
//             <Form.Group controlId="password">
//               <Form.Label>Password</Form.Label>
//               <Form.Control type="password" placeholder="Enter your password" name='password'value={formData.password} onChange={handleChange}/>
//             </Form.Group>
//           </Col>

//           <Col>  <Form.Group controlId="department">
//             <Form.Label>Department</Form.Label>
//             <Form.Control type="text" placeholder="Enter your department" name='department'value={formData.department} onChange={handleChange}/>
//           </Form.Group>
//           </Col>
//         </Row>
//         <Row>
//           <Col>
//             <Form.Group controlId="email">
//               <Form.Label>Email</Form.Label>
//               <Form.Control type="email" placeholder="Enter email" name='email'value={formData.email} onChange={handleChange}/>
//             </Form.Group>
//           </Col>

//           <Col> <Form.Group controlId="hire_date">
//             <Form.Label>Hire Date</Form.Label>
//             <Form.Control type="date" placeholder="Enter date"  name='hire_date'value={formData.hire_date} onChange={handleChange}/>
//           </Form.Group>
//           </Col>
//         </Row>
//         <Row>
//           <Col>
//             <Form.Group controlId='phone_no'>
//               <Form.Label>Phone no</Form.Label>
//               <Form.Control type='number' placeholder='Enter phone no' name='phone_no'value={formData.phone_no} onChange={handleChange} />
//             </Form.Group>
//           </Col>
//           <Col>
//           <Form.Group controlId='salary'>
//             <Form.Label>Salary</Form.Label>
//             <Form.Control type='number' placeholder='Enter salary' name='salary'value={formData.salary} onChange={handleChange}/>
//           </Form.Group>
//           </Col>
//         </Row>

//         <Button variant="primary" type="submit" onClick={handleSubmit}  >
//           Submit
//         </Button>

//       </Form> 
//         </Modal.Body>
       
//       </Modal>
//       </div>
//     </>
//   );
// }

// export default AddDepartment;