import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import SocialFollow from "./SocialFollow"


const Footer = () => {
    return (
        <div id="Service-rows-area" className="p-3 mb-2 bg-dark text-white" >
            <hr />
            <Container>
                <Row>
                </Row>
                <Row xs="auto">
                    <Col>
                        <h4>Watch</h4>
                        <p>Spotlight</p>
                        <p>Movies</p>
                        <p>TV</p>
                        <p>Free</p>
                    </Col>
                    <Col>
                        <h4>My Account</h4>
                        <p>My Dcarrasco</p>
                        <p>Account</p>
                        <p>Settings</p>
                        <p>Manage Devices</p>
                    </Col>
                    <Col>
                        <h4>Features</h4>
                        <p>Lists</p>
                        <p>Family</p>
                        <p>Disc to Digital</p>
                        <p>Movies Anywhere</p>
                        <p>InstaWatch</p>
                        <p>Gift Cards</p>
                    </Col>
                    <Col>
                        <h4>Help</h4>
                        <p>About Us</p>
                        <p>Devices</p>
                        <p>Customer Support</p>
                        <p>Forums</p>
                        <p>Contact Us</p>
                        <p>Advertise</p>
                        <p>Accessibility</p>
                        <p>Jobss</p>
                    </Col>

                    <Col>
                        <SocialFollow />
                    </Col>
                </Row>
                <Row>

                </Row>
            </Container>
        </div >
    );
};

export default Footer;
