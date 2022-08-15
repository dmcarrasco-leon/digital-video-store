import React from 'react';
import { useEffect, useContext } from "react";
import ecommerceContext from "../context/EcommerceContext";
import { Container, Row, ButtonGroup, ToggleButton } from "react-bootstrap";
import { useState } from 'react';
import Header from "../components/Header";
import Footer from '../components/Footer';
import Product from '../components/Product';

const MovieListingPage = () => {
    //Here I am going to use the context that was provided in the ContextPRovider
    //const { products, setProducts } = useContext(ecommerceContext);
    const [radioValue, setRadioValue] = useState('1');

    const radios = [
        { name: 'Most Whatched', value: '1' },
        { name: 'Release Date', value: '0' },
        { name: 'Recently Added', value: '0' },
    ];

    //const { products, setProducts } = useContext(ecommerceContext);
    const [ products, setProducts ]= React.useState([]);

    useEffect(() => {
        setProducts([]);
        //Async operation GET
        //fetch("https://limitless-gorge-72140.herokuapp.com/products")
        //fetch("http://localhost:5000/products/type?type=movie")
        fetch("https://danny-rest-api-mongodb.herokuapp.com/products/type?type=movie")

            .then((res) => {

                return res.json()
            })
            .then(json => {
                setProducts(json.body);
            })
            .catch((err) => {
                console.log(`Error ${err}`);
            })
    }, []);

    return (

        <>
            <div id="container" >
                <Header />

                <main id="body-area"  className="p-3 mb-2 bg-dark text-white">
                    <div >
                        <br />
                        <Container color='bg-dark'>
                            <ButtonGroup>
                                {radios.map((radio, idx) => (
                                    <ToggleButton
                                        key={idx}
                                        id={`radio-${idx}`}
                                        type="radio"
                                        variant={idx % 2 ? 'outline-primary' : 'outline-secondary'}
                                        name="radio"
                                        value={radio.value}
                                        checked={radioValue === radio.value}
                                        onChange={(e) => setRadioValue(e.currentTarget.value)}
                                    >
                                        {radio.name}
                                    </ToggleButton>
                                ))}
                            </ButtonGroup>
                        </Container>
                    </div>
                    <br />
                    <div id="product2-rows-area"  >
                        <Container>
                            <Row xs="auto">
                                {products.map((product) => (<Product id={product.id} smallImage={product.smallImage} />))}

                            </Row>
                        </Container>
                    </div>
                </main>

                <Footer />
            </div>
        </>
    );
}

export default MovieListingPage;
