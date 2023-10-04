import React, {useContext} from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AuthContext from '../store/authContext'; 
import { Link } from 'react-router-dom';
import logo from '../assets/flashbotlogo.png'


export const AuthFooter = () => {

  const { dispatch } = useContext(AuthContext);
  
  const submitHandler = (e) => {
    e.preventDefault();

    dispatch({type: 'LOGOUT'});
  }

  return (
    <div>
       <Navbar expand="lg" className="">
      <Container fluid>
        <Navbar.Brand href="/">
        <img
              src={logo}
              width="100"
              height="70"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
        </Navbar.Brand>
            <Nav.Link onClick={submitHandler}>Logout</Nav.Link>
            <Nav.Link as={Link} to="/ComingSoon">FAQ</Nav.Link>
            <Nav.Link as={Link} to="/ComingSoon">Policy</Nav.Link>
            <Nav.Link as={Link} to="/ComingSoon">Terms</Nav.Link>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Subscribe to newsletter"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Subscribe</Button>
          </Form>
      </Container>
    </Navbar>
    </div>
  )
}

export const NonAuthFooter = () => {
  return (
    <>
    <Navbar expand="lg" className="">
      <Container fluid>
        <Navbar.Brand href="/">
        <img
              src={logo}
              width="100"
              height="70"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
        </Navbar.Brand>
            <Nav.Link as={Link} to="/ComingSoon">FAQ</Nav.Link>
            <Nav.Link as={Link} to="/ComingSoon">Policy</Nav.Link>
            <Nav.Link as={Link} to="/ComingSoon">Terms</Nav.Link>
          <Form className="d-flex">
          <Form.Control
              type="search"
              placeholder="Subscribe to newsletter"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Subscribe</Button>
          </Form>
      </Container>
    </Navbar>
    </>
  )
}
