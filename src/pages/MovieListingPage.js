import React from 'react';
import Product from "../components/Product";

import { useContext } from "react"
import ecommerceContext from "../context/EcommerceContext";
import { Container, Row, ButtonGroup, ToggleButton } from "react-bootstrap";
import { useState } from 'react';


const MovieListingPage = () => {
     //Here I am going to use the context that was provided in the ContextPRovider
     const { products } = useContext(ecommerceContext);
     const [radioValue, setRadioValue] = useState('1');
 
     const radios = [
         { name: 'Most Whatched', value: '1' },
         { name: 'Release Date', value: '0' },
         { name: 'Recently Added', value: '0' },
     ];
 
     return (
 
         <>
             <div id="heading-area" className="grid grid-col-4">
                 <br />
                 <Container>
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
                         {products.map((product) => (<Product id={product.id} key={product.id} title={product.title} qty={product.qty} rentPrice={product.rentPrice} image={product.image} />))}
                         
                     </Row>
                 </Container>
             </div>
 
         </>
 
 
     );
}

export default MovieListingPage;
