import React, { useEffect, useContext } from 'react';
import Header from "../components/Header";
import FeaturedMovieSeccion from "../components/FeaturedMovieSection";
import ecommerceContext from '../context/EcommerceContext';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
//import MovieListingPage from './MovieListingPage';
import FeaturedTvShowsSection from '../components/FeaturedTvShowsSection';
import MovieListingPage from './MovieListingPage';
import ContentSection from '../components/ContentSection';
//import { Link } from 'react-router-dom';

const HomePage = () => {


    const {setProducts } = useContext(ecommerceContext);

    useEffect(() => {

        //Async operation  GET//POST,PUT OR DELETE
        fetch("http://localhost:5000/products",{
            method:"GET"
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
        <div id="container" >
            <Header />

            <main>
                <HeroSection />
                <div id="container2" class="p-3 mb-2 bg-dark text-white">
                    <FeaturedMovieSeccion />
                    <FeaturedTvShowsSection/>
                    <ContentSection/>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default HomePage;
