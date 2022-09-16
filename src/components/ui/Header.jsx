import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Header = () => {


  const navigate = useNavigate();

  const isLogedIn = localStorage.getItem('is_loged_in') ? JSON.parse(localStorage.getItem('is_loged_in')) : false;

  const logout = () => {
    localStorage.setItem('is_loged_in', JSON.stringify(false));

    toast.success('Logout Successfully')

    navigate('/');
  }

  return (
    <>
        <Navbar expand="lg" bg="primary" variant="dark" className="mb-3">
          <Container>
            <Link to='/'><Navbar.Brand>Employee Crud</Navbar.Brand></Link>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                  Employee Crud
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  {                    
                    isLogedIn && 
                    <Nav.Link onClick={() => logout()}>Logout</Nav.Link>  
                  }
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </>
  );
}

export default Header