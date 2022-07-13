import React, { useEffect, useContext } from 'react';
import Header from "../components/Header";
import FeaturedMovieSeccion from "../components/FeaturedMovieSection";
import ecommerceContext from '../context/EcommerceContext';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import FeaturedTvShowsSection from '../components/FeaturedTvShowsSection';
import ContentSection from '../components/ContentSection';

const HomePage = () => {


    const {setProducts } = useContext(ecommerceContext);

    useEffect(() => {

        //Async operation  GET//POST,PUT OR DELETE
        fetch("https://limitless-gorge-72140.herokuapp.com/products")
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
