import React, { useEffect, useContext } from "react";
import Product from "./Product";
import ecommerceContext from "../context/EcommerceContext";
import {Container, Form, Row } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";

const ProductSearch = () => {

const {products, setProducts } = useContext(ecommerceContext);

const [searchBox, setSearchBox] = React.useState("");

useEffect(() => {

    //Async operation  GET//POST,PUT OR DELETE
    //fetch("https://limitless-gorge-72140.herokuapp.com/products")
    fetch("https://danny-rest-api-mongodb.herokuapp.com/products")
        .then((res) => {

            return res.json()
        })
        .then(json => {
            setProducts(json.body);
        })
        .catch((err) => {
            console.log(`Error ${err}`);
        })
        console.log("rrrr : " + searchBox);
}, [])


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
                            
                            value={searchBox} onChange={(event) => {
                                setSearchBox(event.target.value)
                                
                              }} 
                            
                        />
                    </Form>
                    <br/>
                    <div id="product-rows-area"  >
                        <Container>
                            <Row xs="auto">
                                {searchBox}
                                {products.filter(product => product.title.toUpperCase().includes(`${searchBox.toUpperCase()}`))
                                    .map((product) => (<Product id={product.id} smallImage={product.smallImage} />))
                                }
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

/*const ProductSearch = () => {

   // const { products1, setProducts1 } = useContext(ecommerceContext);
   const [ products1, setProducts1 ] = React.useState([])
   const [titletosearch, setTitletosearch] = useState("");
    //useEffect(() => {
const SubmitSearch=()=>{
    setProducts1([]);
    //const finalData = new FormData(event.currentTarget)
    //console.log(finalData.get("dataToSearch"));
        //Async operation GET
        //fetch("http://localhost:5000/products/featured?type=movie")  =${title}
        ///title?title=The notebook
        fetch(`https://danny-rest-api-mongodb.herokuapp.com/products`)
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
*/
