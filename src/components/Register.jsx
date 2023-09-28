import React from 'react'
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState, useContext } from "react";
import axios from "axios";
import AuthContext from "../store/authContext";


export const Register = () => {

    // state for every input
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // bring in dispatch
    const [register, setRegister] = useState(true);
    const { dispatch } = useContext(AuthContext);

    const submitHandler = (e) => {
        e.preventDefault();

        let body = {firstName, lastName, email, password}

        axios.post(register ? '/register' : '/login', body)
            .then(res => {
                dispatch({type: 'LOGIN', payload: res.data });
            })
            .catch(err => console.error(err))

        console.log('submitHandler called');
    };

  return (
    <form onSubmit={submitHandler}>
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

        <Button variant="primary" onClick={() => setRegister(!register)}>
            Need to {register ? 'Login' : 'Sign Up'}
        </Button>
        {/* Register form ends */}
    </form>
  )
}
