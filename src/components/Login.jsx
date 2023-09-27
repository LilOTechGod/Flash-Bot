import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { NonAuthNavbar } from "./Navbar";
import { NonAuthFooter } from "./Footer";

export const Login = () => {
  return (
    <>
      {/* nav bar begins */}
      <NonAuthNavbar />
      {/* nav bar ends */}

      <h1>Welcome to Flash Bot 👟</h1>

      <div className="container">
        {/* Register form begins */}
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
          <Form.Control
            placeholder="First Name"
            aria-label="FirstName"
            aria-describedby="basic-addon1"
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
          <Form.Control
            placeholder="Last Name"
            aria-label="LastName"
            aria-describedby="basic-addon1"
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Email"
            aria-label="Email"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text>#</InputGroup.Text>
          <Form.Control aria-label="hashPass" placeholder="Password" />
          <InputGroup.Text></InputGroup.Text>
        </InputGroup>
        {/* Register form ends */}

        {/* login form begins */}
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        {/* login form ends */}
      </div>

      {/* about us section begins */}
      <h2>About Us</h2>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <img
          src="https://th.bing.com/th/id/OIP.S2S8d0mhY0492hBSZLfzDQHaFS?w=264&h=189&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt=""
        />
      </div>
      {/* about us section ends */}

      {/* Footer begins */}
      <NonAuthFooter />
      {/* Footer ends */}
    </>
  );
};
