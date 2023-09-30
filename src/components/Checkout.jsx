import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';


export const Checkout = () => {
  return (
    <div>
      <div>
        <h3>Service () x 1</h3>
        <h3>Service () x 1</h3>
        total = 
      </div>
      <div>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">#</InputGroup.Text>
        <Form.Control
          placeholder="Credit Card number"
          aria-label="cc_number"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Credit Card Expiration"
          aria-label="cc_expiration"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Text id="basic-addon2">**/**</InputGroup.Text>
      </InputGroup>

      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Credit Card Security Code"
          aria-label="cc_securityCode"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Text id="basic-addon2">***</InputGroup.Text>
      </InputGroup>

      <Form.Label htmlFor="basic-url">Your Billing Address Associated with your Credit Card</Form.Label>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon3">
          123 John Doe
        </InputGroup.Text>
        <Form.Control id="basic-url" aria-describedby="basic-addon3" />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text>&</InputGroup.Text>
        <Form.Control placeholder='ZipCode' aria-label="cc_zipcode" />
        <InputGroup.Text>#####</InputGroup.Text>
      </InputGroup>

      <Button variant="primary" type="submit">
        Submit
      </Button>

      </div>
    </div>
  )
}
