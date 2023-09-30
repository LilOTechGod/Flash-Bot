import React, {useContext} from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AuthContext from '../store/authContext'; 


export const AuthFooter = () => {

  const { dispatch } = useContext(AuthContext);
  
  const submitHandler = (e) => {
    e.preventDefault();

    dispatch({type: 'LOGOUT'});
  }

  return (
    <div>
       <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Logo here</Navbar.Brand>
            <Nav.Link onClick={submitHandler}>Logout</Nav.Link>
            <Nav.Link href="#action2">FAQ</Nav.Link>
            <Nav.Link href="#action3">Policy</Nav.Link>
            <Nav.Link href="#action4">Terms</Nav.Link>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
      </Container>
    </Navbar>
    </div>
  )
}

export const NonAuthFooter = () => {
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Logo here</Navbar.Brand>
            <Nav.Link href="#action2">FAQ</Nav.Link>
            <Nav.Link href="#action3">Policy</Nav.Link>
            <Nav.Link href="#action4">Terms</Nav.Link>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
      </Container>
    </Navbar>
    </>
  )
}
