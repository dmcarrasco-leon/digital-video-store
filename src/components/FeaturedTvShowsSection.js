import React, { useEffect, useContext, useState } from "react";
import Product from "./Product";
import ecommerceContext from "../context/EcommerceContext";
import { Container, Row } from "react-bootstrap";

const FeaturedTvShowsSection = () => {

    //Here I am going to use the context that was provided in the ContextPRovider

    const { products, setProducts } = useContext(ecommerceContext);
    //const { tvshows, setTvshows } = React.useState();

    useEffect(() => {

        //Async operation GET
        //fetch("https://limitless-gorge-72140.herokuapp.com/products?isBestSeller=false")
        //fetch("http://localhost:5000/products/featured?type=tv show")
        fetch("https://danny-rest-api-mongodb.herokuapp.com/products/featured?type=tv show")
        
            .then((res) => {

                return res.json()
            })
            .then(json => {
                setProducts(json.body);
                //console.log(json.body);
            })
            .catch((err) => {
                console.log(`Error ${err}`);
            })
    }, [])
    
    return (
        <>
            <hr/>
            <h4>Featured TV Shows</h4>
            <div id="product-rows-area"  >
                <Container>
                    <Row xs="auto">
                        {products.map((product) => (<Product id={product.id}  smallImage={product.smallImage} />))}
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default FeaturedTvShowsSection;