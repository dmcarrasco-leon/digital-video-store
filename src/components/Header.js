import React, { useState } from 'react';
import { Navbar, Container, Nav, Button, FormGroup } from 'react-bootstrap';
import LoginForm from './LoginForm';
//import { Button } from 'react-bootstrap';
import { Modal, Form } from 'react-bootstrap';

const Header = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {

    setShow(true);
    <LoginForm />
  }

  return (
    <header>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/" > DCarrasco </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">

              <Nav.Link href="/pages/movielistingpage">Movies</Nav.Link>
              <Nav.Link href="#pricing">TV</Nav.Link>

            </Nav>
            <Nav>

              <Nav.Link href="/products/registrationForm"> Sign Up</Nav.Link>

              <Nav.Link eventKey={2} onClick={handleShow} >
                Login
              </Nav.Link>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Login In to Dcarrasco</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                      <Form.Control
                        type="email"
                        placeholder="Email"
                        autoFocus
                      />

                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >

                      <Form.Control type="password"
                        placeholder="Password"
                        autoFocus />
                    </Form.Group>

                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Form.Label onClick={handleClose} > Forgot your password? </Form.Label>
                  <Button variant="secondary" onClick={handleClose}>
                    Create a new account
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Sign In
                  </Button>
                </Modal.Footer>
              </Modal>


            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>

    </header>
  )
};

export default Header
