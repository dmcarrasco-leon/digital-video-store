import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Modal, Form } from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';



const RegistrationForm = () => {

  const [user, setUser] = useState(
    {
      "firstName": "",
      "lastName": "",
      "email": "",
      "username": "",
      "password": "",
      "role": ""
    })

  const SubmitForm = (event) => {
    //console.log(user);
    //alert(user);
    event.preventDefault();
    fetch("https://danny-rest-api-mongodb.herokuapp.com/users", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then((res) => res.json())
      .then(json => {
        //setProducts(json.body);
        //console.log(products);
        alert(`The user ${json.username} was added successfully!!!`)
      })
      .catch((err) => {
        console.log(`Error ${err}`);
      })

  }

  return (
    <>
      <div id="container" >
        <Header />

        <main>
          <div id="container2" class="p-3 mb-2 bg-dark text-white App-div-center">

            <Form action='https://danny-rest-api-mongodb.herokuapp.com/users' method='POST' onSubmit={SubmitForm}>

              <Form.Label> <h4> Create a New Account </h4></Form.Label>
              <Form.Group className="mb-3 col-6" controlId="formBasicfName"  >
                <Form.Control type="text" placeholder="First Name"  value={user.firstName} onChange={(event) => {
                  setUser({
                    ...user,
                    firstName: event.target.value
                  })
                }} />
              </Form.Group>

              <Form.Group className="mb-3  col-6" controlId="formBasiclName">
                <Form.Control type="text" placeholder="Last Name"  value={user.lastName} onChange={(event) => {
                  setUser({
                    ...user,
                    lastName: event.target.value
                  })
                }} />
              </Form.Group>
              <Form.Group className="mb-3  col-6" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Email" value={user.email} onChange={(event) => {
                  setUser({
                    ...user,
                    email: event.target.value
                  })
                }} />
              </Form.Group>

              <Form.Group className="mb-3  col-6" controlId="formBasicUserName">
                <Form.Control type="username" placeholder="Username"  value={user.username} onChange={(event) => {
                  setUser({
                    ...user,
                    username: event.target.value
                  })
                }} />
              </Form.Group>

              <Form.Group className="mb-3  col-6" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" value={user.password} onChange={(event) => {
                  setUser({
                    ...user,
                    password: event.target.value
                  })
                }} />
              </Form.Group>

              <Form.Group className="mb-3  col-6" controlId="formBasicRol">
                <Form.Control type="role" placeholder="role"  value={user.role} onChange={(event) => {
                  setUser({
                    ...user,
                    role: event.target.value
                  })
                }} />
              </Form.Group>

              <Form.Group className="mb-3  col-6" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="I certify that I am at least 18 years old and that I agree to the Terms and Policies and Privacy Policy. This service is for the U.S. only." />
              </Form.Group>

              <Form.Group className="mb-3 " controlId="formBasicCheckbox">
                <Button variant="primary" type="submit">
                  Sign Up
                </Button>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Or Sign Up With</Form.Label>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicWalmartFacebook">
                <Button variant="primary" type="submit">
                  Walmart
                </Button>
                <Button variant="secondary" type="submit">
                  Facebook
                </Button>
              </Form.Group>

            </Form>

          </div>
        </main>
        <Footer />
      </div>

    </>
  );

}

export default RegistrationForm;

/**/