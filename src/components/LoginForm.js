import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Modal, Form } from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';
import DashboardPage from '../pages/DashboardPage';
import { useNavigate } from 'react-router-dom';



const LoginForm = () => {

  const [auth, setAuth] = useState(
    {
      "username": "",
      "password": ""
    })

    const navigate = useNavigate();

  const SubmitForm = (event) => {
    //console.log(user);
    //alert(user);
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
        navigate("/dashboardpage");
        //console.log(auth)
      })
      .catch((err) => {
        alert(`The user was not login, Error :  ${err}`);
      })

  }

  return (
    <>
      <div id="container" >
        <Header />

        <main>
          <div id="container2" class="p-3 mb-2 bg-dark text-white App-div-center">

            <Form action='https://danny-rest-api-mongodb.herokuapp.com/auth' method='POST' onSubmit={SubmitForm} >

              <Form.Label> <h4> Log In to Dcarrasco</h4></Form.Label>

              <Form.Group className="mb-3  col-6" controlId="formBasicUserName">
                <Form.Control type="username" placeholder="Username"  value={auth.username} onChange={(event) => {
                  setAuth({
                    ...auth,
                    username: event.target.value
                  })
                }} />
              </Form.Group>

              <Form.Group className="mb-3  col-6" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" value={auth.password} onChange={(event) => {
                  setAuth({
                    ...auth,
                    password: event.target.value
                  })
                }} />
              </Form.Group>

              <Form.Group className="mb-3 " controlId="formBasicCheckbox">
                <Button variant="primary" type="submit">
                  Sign In
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

export default LoginForm;

/**/