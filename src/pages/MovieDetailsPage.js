import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { Container } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Footer from "../components/Footer";
import ecommerceContext from "../context/EcommerceContext";
import { useContext } from "react";


const MovieDetailsPage = () => {

    //const { product, setProduct } = useContext(ecommerceContext);

    const [product, setProduct] = useState({
        
        title: "",
        price: 0,
        rentPrice: 0,
        purchasePrice: 0,
        synopsis: "",
        smallImage: ""
    })

    const { id } = useParams();

    useEffect(() => {
        //fetch(`https://limitless-gorge-72140.herokuapp.com/products/${id}`)
        fetch(`https://danny-rest-api-mongodb.herokuapp.com/products/${id}`)
            .then((res) => {
                return res.json()
            })
            .then(json => {
                setProduct(json.body[0]);
                console.log(product);
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
                        <div style = {{ display: 'block', width: 1200, padding: 30 }}>
                            <Row>
                                <Col >
                                    <p>
                                    <img className="product-image" src={product.smallImage} />
                                    </p>
                                </Col>
                                <Col >
                                    <p> TITLE : {product.title}  </p>
                                    <p> PRICE : ${product.price.toFixed(2)}  </p>
                                    <p> RENT PRICE : ${product.rentPrice.toFixed(2)}  </p>
                                    <p> PURCHASE PRICE : ${product.purchasePrice.toFixed(2)}  </p>
                                    <p> SYNOPSIS : {product.synopsis}  </p>
                                </Col>
                                <Col  >
                                    <p>
                                    <img className="product-image" src={product.smallImage} />
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

/* return (
        <>
            <Header />
            <div id="container2" class="p-2 mb-2 bg-dark text-white">
            <main>
 
                    <Container >
                        <div style={{ display: 'block', width: 700, padding: 30 }}>
                            <Row>
                                <Col >
                                    <p>
                                        <img className="product-image" src={product.smallImage} />
                                    </p>

                                </Col>
                                <Col >

                                    <p>
                                        Title : {product.title}
                                    </p>
                                    <p>
                                        Unit Price : {product.price.toFixed(2)}
                                    </p>
                                    <p>
                                        Unit Price : {product.rentPrice.toFixed(2)}
                                    </p>
                                    <p>
                                        Unit Price : {product.purchasePrice.toFixed(2)}
                                    </p>
                                    <p>
                                        Synopsis : {product.synopsis}
                                    </p>

                                </Col>

                            </Row>
                        </div>
                    </Container>
                
            </main>
            <Footer/>
            </div>
        </>
    ); */