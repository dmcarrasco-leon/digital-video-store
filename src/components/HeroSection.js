import React from 'react';
import { useEffect, useContext } from "react";
import ecommerceContext from '../context/EcommerceContext';
import Product from './Product';

import { Carousel, Row, Container } from 'react-bootstrap';

const HeroSection = () => {
    const { products, setProducts } = useContext(ecommerceContext);

    useEffect(() => {

        //Async operation GET
        fetch("https://limitless-gorge-72140.herokuapp.com/products?isBestSeller=true")
            .then((res) => {

                return res.json()
            })
            .then(json => {
                setProducts(json);
            })
            .catch((err) => {
                console.log(`Error ${err}`);
            })
    }, [])

    return (
        <div className="grid grid-col-4" class="p-3 mb-2 bg-black text-white">

            <Carousel>
                <Carousel.Item>
                <Container>
                    <Row xs="auto">
                       
                        {products.map((product) => (<Product id={product.id} key={product.id} title={product.title} qty={product.qty} rentPrice={product.rentPrice} image={product.image} />))}
                    </Row>
                    <Carousel.Caption>
                    <p>caption</p>
                    </Carousel.Caption>
                </Container>

                </Carousel.Item>

                <Carousel.Item>
                <Container>
                    <Row xs="auto">
                        {products.map((product) => (<Product id={product.id} key={product.id} title={product.title} qty={product.qty} rentPrice={product.rentPrice} image={product.image} />))}
                    </Row>
                </Container>
                
                </Carousel.Item>
            </Carousel>

        </div>
    );
}

export default HeroSection;
