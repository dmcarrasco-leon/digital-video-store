import { useEffect, useContext } from "react";
import Product from "./Product";
import ecommerceContext from "../context/EcommerceContext";
import { Container, Row} from "react-bootstrap";

const FeaturedMovieSection = () => {

    const { products, setProducts } = useContext(ecommerceContext);

    useEffect(() => {

        //Async operation GET
        //fetch("https://limitless-gorge-72140.herokuapp.com/products?isBestSeller=true")
        //fetch("http://localhost:5000/products/featured?type=movie")
        fetch("https://danny-rest-api-mongodb.herokuapp.com/products/featured?type=movie")
            .then((res) => {

                return res.json()
            })
            .then(json => {
                setProducts(json.body);
                //console.log(products);
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
                        {products.map((product) => (<Product id={product.id} smallImage={product.smallImage} />))}
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default FeaturedMovieSection;
