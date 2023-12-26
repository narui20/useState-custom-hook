import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useState } from '../custom-hooks/useState';
import "./UserForm.css"

function UserForm( { onFormSubmit } ) {
 const [name, setName] = useState("");
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");

 const onEmailChange = (event) => {
  setEmail(event.target.value);
 }
 
 const onNameChange = (event) => {
  setName(event.target.value);
 }

 const onPasswordChange = (event) => {
  setPassword(event.target.value);
 }

 const onSubmit = (event) => {
  event.preventDefault();
  onFormSubmit(name, email);
 }

  return (
    <>
      <Form className='form-container'>
        <div className='form-header-container'>
          <h3>User SignIn</h3>
        </div>
        <Form.Group className="mb-3 form-field-container" controlId="formBasicEmail" >
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={onEmailChange}/>
        </Form.Group>
        <Form.Group className="mb-3 form-field-container" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" aria-colspan={3} value={name} onChange={onNameChange}/>
        </Form.Group>

        <Form.Group className="mb-3 form-field-container" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" rows={2} value={password} onChange={onPasswordChange}/>
        </Form.Group>
        <Button variant="primary" type="submit" className="form-submit-button" onClick={(event) => onSubmit(event)}>
          Submit
        </Button>
      </Form>
    </>
  )
}

export default UserForm