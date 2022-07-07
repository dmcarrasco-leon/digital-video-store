import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
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


const App = () => {
  const [products, setProducts] = useState([]);

  return (
    <ecommerceContext.Provider value={{ products, setProducts }}>
      <BrowserRouter>

        <Routes>
          
          <Route path="/" element={<HomePage />} />
          <Route path = "/products/herosection" element = {<HeroSection/>}/>
          <Route path = "/products/:id" element = {<MovieDetailsPage/>}/>
          <Route path = "/featuredMovieSection" element = {<FeaturedMovieSection/>}/>
          <Route path = "/pages/movielistingpage" element = {<MovieListingPage/>}/>
          <Route path = "/pages/contentSection" element = {<ContentSection/>}/>
          
          <Route path = "/products/LoginForm" element = {<LoginForm/> } />
          <Route path = "/products/registrationForm" element = {<RegistrationForm/> } />


          
        </Routes>

      </BrowserRouter>
    </ecommerceContext.Provider>
  );
}

export default App;
