import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { useState, useContext } from "react";
import axios from "axios";
import AuthContext from "../store/authContext";

export const Login = () => {
  // add state for every input
  const [user_email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // bring in dispatch, here were destructuring dispatch from Authcontext, we have access to authcontext thanks to usecontext
  const { dispatch } = useContext(AuthContext);
  
  // my on submit handler function when a user hits submit on the login form
  const submitHandler = (e) => {
    e.preventDefault();

    let body = {user_email, password}
    console.log(body);
    axios
      .post("http://localhost:4004/login", body)
      .then(res => {
        dispatch({type: 'LOGIN', payload: res.data });
      })
      .catch(err => console.error(err));
    console.log('submit login Handler called');
  }

  return (
    <>
        {/* login form begins */}
        <Form onSubmit={evt => submitHandler(evt)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
            type="email" 
            placeholder="Enter email" 
            value={user_email}
            onChange={e => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
            type="password" 
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)} 
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            submit
          </Button>
        </Form>
        {/* login form ends */}
    </>
  );
};
