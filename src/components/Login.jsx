import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { useState, useContext } from "react";
import axios from "axios";
import AuthContext from "../store/authContext";

export const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [logIn, setLogIn] = useState(true);
  const { dispatch } = useContext(AuthContext);
  
  const submitHandler = (e) => {
    e.preventDefault();

    let body = {email, password}

    axios.post(logIn ? '/login' : '/register', body)
      .then(res => {
        dispatch({type: 'LOGIN', payload: res.data });
      })
      .catch(err => console.err(err));
    console.log('submitHandler called');
  }

  return (
    <>
        {/* login form begins */}
        <Form onSubmit={submitHandler}>
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
          <Button variant="primary" onClick={() => setLogIn(!logIn)}>
            submit
          </Button>
        </Form>
        {/* login form ends */}
    </>
  );
};
