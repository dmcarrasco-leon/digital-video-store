import React, { useState } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import LoginForm from './LoginForm';
import { Modal, Form } from 'react-bootstrap';

const Header = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {

    setShow(true);
    <LoginForm />
  }

  const [auth, setAuth] = useState(
    {
      "username": "",
      "password": ""
    })

    const SubmitForm = (event) => {
      //console.log(auth);
      //alert(auth);
      
      event.preventDefault();
      fetch("https://danny-rest-api-mongodb.herokuapp.com/auth", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(auth)
      })
        .then((res) => res.json())
        .then(json => {
          alert(`The user ${json.username} was login successfully!!!`)
        })
        .catch((err) => {
          console.log(`Error ${err}`);
        })
        alert(" done ");
        
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
              <Nav.Link href="/pages/tvshowlistingpage">TV Shows</Nav.Link>

            </Nav>
            <Nav>

              <Nav.Link href="/products/registrationForm"> Sign Up</Nav.Link>
              <Nav.Link href="/products/loginForm"> Login</Nav.Link>
              <Nav.Link href="/products/productsearch"> Search </Nav.Link>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Login In to Dcarrasco</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form action='https://danny-rest-api-mongodb.herokuapp.com/auth' method='POST' onSubmit={SubmitForm}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                      <Form.Control
                        type="text"
                        placeholder="username"
                        autoFocus
                        value={auth.username} onChange={(event) => {
                          setAuth({
                            ...auth,
                            username: event.target.value
                          })
                        }} 
                      />

                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >

                      <Form.Control type="password"
                        placeholder="Password"
                        autoFocus 
                        value={auth.password} 
                        onChange={(event) => {
                          setAuth({
                            ...auth,
                            password: event.target.value
                          })
                        }} />
                    </Form.Group>

                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Form.Label onClick={handleClose} > Forgot your password? </Form.Label>
                  <Button variant="secondary" onClick={handleClose}>
                    Create a new account
                  </Button>
                  <Button variant="primary" type="submit" onClick={handleClose} >
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

export default Header;
