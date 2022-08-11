import React, { useState,useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Modal, Form } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';


const DashboardPage = () => {

  const [user, setUser] = useState([])

    useEffect(() => {

      fetch("https://danny-rest-api-mongodb.herokuapp.com/users/62e9ee5cf19d8f58bd9198e0")
          .then((res) => {
            return res.json()
          })
          .then(json => {
            setUser(json.body[0]);
              //console.log(products);
          })
          .catch((err) => {
              console.log(`Error ${err}`);
          })
  }, [])

  return (
    <>
      <div id="container" >
        <Header />

        <main>
          <div id="container2" class="p-3 mb-2 bg-dark text-white App-div-center">

            <Form >

              <Form.Label> <h4> User Dashboard Page </h4></Form.Label>
              <Form.Group className="mb-3 col-6" controlId="formBasicfName"  >
                <Form.Control type="text" placeholder="First Name"  value={user.firstName} />
              </Form.Group>

              <Form.Group className="mb-3  col-6" controlId="formBasiclName">
                <Form.Control type="text" placeholder="Last Name"  value={user.lastName}/>
              </Form.Group>
              <Form.Group className="mb-3  col-6" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Email" value={user.email} />
              </Form.Group>

              <Form.Group className="mb-3  col-6" controlId="formBasicUserName">
                <Form.Control type="username" placeholder="Username"  value={user.username} />
              </Form.Group>

              
              <Form.Group className="mb-3  col-6" controlId="formBasicRol">
                <Form.Control type="role" placeholder="role"  value={user.role} />
              </Form.Group>


            </Form>

          </div>
        </main>
        <Footer />
      </div>

    </>
  );

}

export default DashboardPage;

