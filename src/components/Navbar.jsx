import React, {useState, useContext} from 'react'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {Button, Modal} from 'react-bootstrap';
import { CartContext } from '../store/cartContext';
import { CartProduct } from './CartProduct';
import {Link } from 'react-router-dom';
import logo from '../assets/flashbotlogo.png';

export const NonAuthNavbar = () => {
  return (
    <>
      <style type='text/css'>
        {`
          
        `}
      </style>
      <Navbar expand="lg" className="">
        <Container fluid>
        <Navbar.Brand href="/">
        <img
              src={logo}
              width="90"
              height="60"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
        </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#login">Log In</Nav.Link>
              <Nav.Link href="#register">Register Now</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export const AuthNavbar = () => {
  const cart = useContext(CartContext)

  // here I'm setting the initial state of the modal to false meaning it wouldn't display
  const [show, setShow] = useState(false);
  // when the modal is visible and you want to close it, the on hide property to fire therefore setting the new state to false and make it disappear.
  const handleClose = () => setShow(false);
  // When the button is clicked the state will update to true displaying the modal
  const handleShow = () => setShow(true);

  const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0)

  return(
    <>
     <Navbar expand="lg" className="">
      <Container fluid>
        <Navbar.Brand href="/">Welcome To Flash Bot</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className='justify-content-end'>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to="/aboutus">About Us</Nav.Link>
            <Nav.Link as={Link} to='/services'>Services </Nav.Link>
            <Button onClick={handleShow}> Cart ({productsCount} items)</Button>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand href="/">
        <img
              src={logo}
              width="90"
              height="60"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
        </Navbar.Brand>

      </Container>
    </Navbar>

    {/* show property, onHide handle close function */}
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {productsCount > 0 ?
        <>
          <p>Items in your cart:</p>
          {cart.items.map((currentProduct, index) => (
            <CartProduct key={index} id={currentProduct.id} quantity={currentProduct.quantity} />
          ))}

          <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>
          <Button variant='success'>Purchase items!</Button>
        </>
        :
          <h1>There are no items in your cart!</h1>
        }
      </Modal.Body>
    </Modal>
    </>
  )
}
