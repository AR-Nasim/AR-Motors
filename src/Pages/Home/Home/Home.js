import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About/>
            <Services></Services>
            <Reviews></Reviews>
            <Contact></Contact>
        </div>
    );
};

export default Home;













