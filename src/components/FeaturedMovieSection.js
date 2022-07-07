//import { useContext } from "react"
import { useEffect, useContext } from "react";
import Product from "./Product";
import ecommerceContext from "../context/EcommerceContext";
import { Container, Row} from "react-bootstrap";
//import { useState } from 'react';

const FeaturedMovieSection = () => {

    //Here I am going to use the context that was provided in the ContextPRovider
    //const { products } = useContext(ecommerceContext);

    const { products, setProducts } = useContext(ecommerceContext);

    useEffect(() => {

        //Async operation GET
        fetch("http://localhost:5000/products?isBestSeller=true", {
            method: "GET"
        })
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

        <>
            <h4>Featured Movies</h4>
            <div id="product-rows-area"  >
                <Container>
                    <Row xs="auto">
                        {products.map((product) => (<Product id={product.id} key={product.id} title={product.title} qty={product.qty} rentPrice={product.rentPrice} image={product.image} />))}
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default FeaturedMovieSection;
