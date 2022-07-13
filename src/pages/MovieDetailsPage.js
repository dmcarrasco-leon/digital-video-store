import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { Container } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Footer from "../components/Footer";


const MovieDetailsPage = () => {

    const [product, setProduct] = useState({
        title: "",
        rentPrice: 0,
        description: "",
        buyPrice: 0,
        image: ""

    })

    const { id } = useParams();


    useEffect(() => {

        //Async operation GET
        fetch(`https://limitless-gorge-72140.herokuapp.com/products/${id}`)
            .then((res) => {

                return res.json()
            })
            .then(json => {
                setProduct(json);
            })
            .catch((err) => {
                console.log(`Error ${err}`);
            })
    }, [])

    return (
        <>
            <Header />
            <div id="container2" class="p-2 mb-2 bg-dark text-white">
            <main>
 
                    <Container >
                        <div style={{ display: 'block', width: 700, padding: 30 }}>
                            <Row>
                                <Col >
                                    <p>
                                        <img className="product-image" src={product.image} />
                                    </p>

                                </Col>
                                <Col >

                                    <p>
                                        Title : {product.title}
                                    </p>
                                    <p>
                                        Unit Price : {product.rentPrice.toFixed(2)}
                                    </p>

                                    <p>
                                        Cost Price : {product.buyPrice}
                                    </p>

                                    <p>
                                        Details : {product.details}
                                    </p>
                                </Col>

                            </Row>
                        </div>
                    </Container>
                
            </main>
            <Footer/>
            </div>
        </>
    );
}

export default MovieDetailsPage;
