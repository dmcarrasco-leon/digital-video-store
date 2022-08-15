import React from 'react';
import { useEffect } from "react";
//import ecommerceContext from '../context/EcommerceContext';
import Product from './Product';

import { Carousel, Row, Container } from 'react-bootstrap';

const HeroSection = () => {
    //const { products, setProducts } = useContext(ecommerceContext);

    const [ products1, setProducts1 ] = React.useState([])

    useEffect(() => {

        //Async operation GET
        //fetch("https://limitless-gorge-72140.herokuapp.com/products?isBestSeller=true")
        fetch("https://danny-rest-api-mongodb.herokuapp.com/products/bestseller")
        //fetch("https://danny-rest-api-mongodb.herokuapp.com/products/type?type=tv show")
        

            .then((res) => {

                return res.json()
            })
            .then(json => {
                setProducts1(json.body);
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
                       
                        {products1.map((product1) => (
                            <Product id={product1.id} key={product1.id} title={product1.title}  rentPrice={product1.rentPrice} smallImage={product1.smallImage} />
                        ))}
                    </Row>
                    <Carousel.Caption>
                    <p>caption</p>
                    </Carousel.Caption>
                </Container>

                </Carousel.Item>

                <Carousel.Item>
                <Container>
                <Row xs="auto">
                       
                    {products1.map((product1) => (
                            <Product id={product1.id} key={product1.id} title={product1.title}  rentPrice={product1.rentPrice} smallImage={product1.smallImage} />
                        ))}
                   </Row>
                </Container>
                
                </Carousel.Item>
            </Carousel>

        </div>
    );
}

export default HeroSection;
