import { useEffect, useContext, useState } from "react";
import Product from "./Product";
import ecommerceContext from "../context/EcommerceContext";
import { Button, Container, Form, Row } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";
import { getValue } from "@testing-library/user-event/dist/utils";

const ProductSearch = () => {

   // const { products1, setProducts1 } = useContext(ecommerceContext);
   const [ products1, setProducts1 ] = useState([])
   const [titletosearch, setTitletosearch] = useState("");
    //useEffect(() => {
const SubmitSearch=(event)=>{
    setProducts1([]);
    const finalData = new FormData(event.currentTarget)
    console.log(finalData.get("dataToSearch"));
        //Async operation GET
        //fetch("http://localhost:5000/products/featured?type=movie")  =${title}
        fetch(`https://danny-rest-api-mongodb.herokuapp.com/products/title?title==${finalData.get("dataToSearch")}`)
            .then((res) => {

                return res.json()
            })
            .then(json => {
                setProducts1(json.body);
                console.log(products1);
            })
            .catch((err) => {
                console.log(`Error ${err}`);
            })
    }

    return (
        <>
            <div id="container" >
                <Header />

                <main class="p-3 mb-2 bg-dark text-white">
                    <br/>
                    <h4>Search Movies or Tv Shows </h4>
                    <br/>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            id="dataToSearch"
                            
                        />
                        <Button variant="outline-success" onClick={SubmitSearch}>Search</Button>
                    </Form>
                    <br/>
                    <div id="product-rows-area"  >
                        <Container>
                            <Row xs="auto">
                                {products1.map((product1) => (<Product id={product1.id} smallImage={product1.smallImage} />))}
                            </Row>
                        </Container>
                    </div>
                </main>

                <Footer />
            </div>
        </>
    );
}

export default ProductSearch;
