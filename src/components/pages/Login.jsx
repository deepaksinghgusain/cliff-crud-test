import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const login = {
  email: '',
  password: ''
}

const Login = () => {

  const [validated, setValidated] = useState(false);

  const [formValue, setFormValue] = useState(login);

  const { email, password } = formValue;

  const { admin } = useSelector(state => state.admin);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    const form = event.currentTarget;

    event.preventDefault();

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      setValidated(true);
      
      if (admin.email === formValue.email && admin.password === formValue.password) {
        localStorage.setItem('is_loged_in', true);
        navigate('/employee/list')
      } else {
        toast.error('Credentials does not match. Please try again.');
      }
    }
  };

  const onInputChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value })
  }


  return (
    <Container>

      <Form noValidate validated={validated} onSubmit={handleSubmit} style={{
        width: '30%',
        margin: '10% auto',
        border: '1px solid black',
        padding: '20px',
        borderRadius: '5px'
      }}>
        <Row>
          <h3 className='text-center'>Login</h3>
        </Row>
        <Row>
          <Form.Group as={Col} md="12" controlId="validationCustom01" className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </Form.Group>
          <Form.Group as={Col} md="12" controlId="validationCustom02" className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </Form.Group>
        </Row>
        <Button type="submit">Submit form</Button>
      </Form>
    </Container>
  )
}

export default Login