//import { useContext } from "react"
import { useEffect, useContext } from "react";
import Product from "./Product";
import ecommerceContext from "../context/EcommerceContext";
import { Container, Row, Col } from "react-bootstrap";
//import { useState } from 'react';
//import "../assets/css/App.css"

import Image from "react-bootstrap/Image";

const ContentSection = () => {



    return (

        <>
        <hr/>
            <div class="p-3 mb-2 bg-black text-white">
                <Container >
                    <Row xs="auto">
                        <Col>
                    <h1> Actors's </h1>
                    <h1> Spotlight </h1>
                    </Col>
                        <Col>

                        <Image
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9OfEmrQmhaHwt8DTZBxwRRuycWUGQGc8vhg&usqp=CAU"
                            roundedCircle className="App-ContentImage"
                        />

                                                <Image
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJl5rxu-G73qqSt4u8tjAiaLS6H7hCkJy-7Q&usqp=CAU"
                            roundedCircle className="App-ContentImage"
                        />
                        <Image
                            src=
                            "data:image/jpeg;base64,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"
                            roundedCircle className="App-ContentImage"
                        />
                        <Image
                            src=
                            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZCF-XeaOgF8TvBhRHe3OZC55uYEGdU1E0gg&usqp=CAU"
                            roundedCircle className="App-ContentImage"
                        />
                                                <Image
                            src=
                            "data:image/jpeg;base64,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"
                            roundedCircle className="App-ContentImage"
                        />
</Col>
                    </Row>
                </Container>

            </div>
        </>
    );
}

export default ContentSection;