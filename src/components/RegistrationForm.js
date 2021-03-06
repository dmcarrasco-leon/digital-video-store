import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Modal, Form } from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';



const RegistrationForm = () => {


  return (
    <>
      <div id="container" >
        <Header />

        <main>
          <div id="container2" class="p-3 mb-2 bg-dark text-white App-div-center">

            <Form>
              <Form.Label> <h4> Create a New Account </h4></Form.Label>
              <Form.Group className="mb-3 col-6" controlId="formBasicfName"  >
                <Form.Control type="text" placeholder="First Name" />
              </Form.Group>

              <Form.Group className="mb-3  col-6" controlId="formBasiclName">
                <Form.Control type="text" placeholder="Last Name" />
              </Form.Group>
              <Form.Group className="mb-3  col-6" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" />

              </Form.Group>

              <Form.Group className="mb-3  col-6" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
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