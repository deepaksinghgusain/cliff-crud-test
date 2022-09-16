import React, {  useState } from 'react'
import { Button, Col, Container, InputGroup, Row } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { addEmployee, updateEmployee } from '../../redux/actions/EmployeeAction';


let employee = {};

const AddEditEmployee = () => {

  const { id } = useParams();

  console.log(id);

  const { employees } = useSelector(state => state.employee);

  if (id !== undefined) {
    employee = employees.find((e, index) => index === parseInt(id));
  } else {
    employee = {
      name: '',
      contact: '',
      phone: '',
      address: '',
      pincode: ''
    };
  }

  const [validated, setValidated] = useState(false);

  const [formValue, setFormValue] = useState(employee)

  const { name, contact, phone, address, pincode } = formValue;

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = (event) => {

    event.preventDefault();

    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      setValidated(true);

      if(id !== undefined) {
        dispatch(updateEmployee(formValue,id))

        toast.success("Employee Updated successfully")

      }else{
        dispatch(addEmployee(formValue))

        toast.success("Employee added successfully")
      }
      
      navigate('/employee/list')
    }
  };

  const onInputChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value })
  }

  return (
    <Container>
      <h1>Add Employee <Link to="/employee/list" ><Button className='float-right' style={{
        float: 'right',
      }}>Back</Button></Link></h1>
      <Form noValidate validated={validated} onSubmit={handleSubmit} style={{
        width: '70%',
        margin: '5% auto',
      }}>
        <Row>
          <Form.Group as={Col} md="6" className="mb-4" controlId="validationCustom01">
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First name"
              name="name"
              value={name}
              onChange={onInputChange}
            />
          </Form.Group>
          <Form.Group as={Col} md="6" className="mb-4" controlId="validationCustom02">
            <Form.Label>Contact</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Contact"
              name="contact"
              value={contact}
              onChange={onInputChange}
            />
          </Form.Group>
          <Form.Group as={Col} md="6" className="mb-4" controlId="validationCustomUsername">
            <Form.Label>Phone</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="text"
                placeholder="Phone"
                name="phone"
                value={phone}
                onChange={onInputChange}
                required
              />
            </InputGroup>
          </Form.Group>

          <Form.Group as={Col} md="6" className="mb-4" controlId="validationCustomUsername">
            <Form.Label>Address</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="text"
                placeholder="Address"
                name="address"
                value={address}
                onChange={onInputChange}
                required
              />
            </InputGroup>
          </Form.Group>

          <Form.Group as={Col} md="6" className="mb-4" controlId="validationCustomUsername">
            <Form.Label>Pincode</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="number"
                min="6"
                placeholder="Pincode"
                name="pincode"
                value={pincode}
                onChange={onInputChange}
                required
              />
            </InputGroup>
          </Form.Group>
        </Row>
        <Button type="submit">Submit form</Button>
      </Form>
    </Container>
  )
}

export default AddEditEmployee