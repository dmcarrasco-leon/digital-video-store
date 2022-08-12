import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import "../assets/css/App.css"
import HomePage from "../pages/HomePage";
import MovieDetailsPage from "../pages/MovieDetailsPage";
import ecommerceContext from '../context/EcommerceContext';
import HeroSection from "./HeroSection";
import MovieListingPage from "../pages/MovieListingPage";
import FeaturedMovieSection from "./FeaturedMovieSection";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";
import ContentSection from "./ContentSection"
import TvShowListingPage from "../pages/TvShowListingPage";
import LoginForm2 from "./LoginForm";
import DashboardPage from "../pages/DashboardPage";
import ProductSearch from "./ProductSearch";
import Product from "./Product";


//import React, { useEffect, useState } from 'react';

/*
//{productsX.map(prod=> prod.id )}
  return (
    <div>
      
    </div>
  )
}

export default App
*/




//const App = () => {
//  const [products, setProducts] = useState([]);

  
//  const [productsX, setProductsX] = useState([]);

const App = () => {

    const [products, setProducts] = useState([]);
  
    useEffect(()=>{
//      fetch("http://localhost:5000/products")
      fetch("https://danny-rest-api-mongodb.herokuapp.com/products")

      .then((res)=> res.json())
      .then(data =>{
        setProducts(data.body);
        //console.log(data.body);
      })
      .catch(err=>console.log(`error ${err}`));
      
    },[]);
  
  return (
    <ecommerceContext.Provider value={{ products, setProducts }}>
      <BrowserRouter>

        <Routes>
          
          <Route path="/" element={<HomePage />} />
          <Route path = "/products/herosection" element = {<HeroSection/>}/>
          <Route path = "/products/:id" element = {<MovieDetailsPage/>}/>
          <Route path = "/featuredMovieSection" element = {<FeaturedMovieSection/>}/>
          <Route path = "/movielistingpage" element = {<MovieListingPage/>}/>
          <Route path = "/tvshowlistingpage" element = {<TvShowListingPage/>}/>
          <Route path = "/pages/contentSection" element = {<ContentSection/>}/>
          
          <Route path = "/products/LoginForm" element = {<LoginForm/> } />
          <Route path = "/products/registrationForm" element = {<RegistrationForm/> } />
          <Route path = "/pages/dashboardpage" element = {<DashboardPage/> } />
          <Route path = "/products/productsearch" element = {<ProductSearch/> } />
          
          <Route path = "/products" element = {<Product/> } />
          
        </Routes>

      </BrowserRouter>
    </ecommerceContext.Provider>
  );
}

export default App;
