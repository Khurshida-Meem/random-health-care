import React from 'react';
import About from '../About/About';
import Advice from '../Advice/Advice';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <About></About>
            <Advice></Advice>
        </div>
    );
};

export default Home;