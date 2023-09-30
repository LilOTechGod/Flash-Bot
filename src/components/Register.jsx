import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState, useContext } from "react";
import axios from "axios";
import AuthContext from "../store/authContext";

export const Register = () => {
  // state for every input
  const [user_firstName, setFirstName] = useState("");
  const [user_lastName, setLastName] = useState("");
  const [user_email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // bring in dispatch
  const { dispatch } = useContext(AuthContext);

  const submitHandler = (e) => {
    e.preventDefault();

    let body = { user_firstName, user_lastName, user_email, password };
    console.log(body);
    axios
      .post("http://localhost:4004/register", body)
      .then((res) => {
        dispatch({ type: "LOGIN", payload: res.data });
      })
      .catch((err) => console.error(err));

    console.log("submit register Handler called");
  };

  return (
    <Form onSubmit={(evt) => submitHandler(evt)}>
      {/* Register form begins */}
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <Form.Control
          placeholder="First Name"
          aria-label="FirstName"
          aria-describedby="basic-addon1"
          value={user_firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <Form.Control
          placeholder="Last Name"
          aria-label="LastName"
          aria-describedby="basic-addon1"
          value={user_lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Email"
          aria-label="Email"
          aria-describedby="basic-addon2"
          value={user_email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text>#</InputGroup.Text>
        <Form.Control 
        aria-label="hashPass" 
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)} 
        />
        <InputGroup.Text></InputGroup.Text>
      </InputGroup>

      <Button variant="primary" type="submit">
        Submit
      </Button>
      {/* Register form ends */}
    </Form>
  );
};
