import { useEffect, useContext } from "react";
import Product from "./Product";
import ecommerceContext from "../context/EcommerceContext";
import { Container, Row } from "react-bootstrap";

const FeaturedTvShowsSection = () => {

    //Here I am going to use the context that was provided in the ContextPRovider

    const { products, setProducts } = useContext(ecommerceContext);

    useEffect(() => {

        //Async operation GET
        fetch("http://localhost:5000/products?isBestSeller=false", {
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
            <hr/>
            <h4>Featured TV Shows</h4>
            <div id="product-rows-area"  >
                <Container>
                    <Row xs="auto">
                        {products.map((product) => (<Product id={product.id}  image={product.image} />))}
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default FeaturedTvShowsSection;