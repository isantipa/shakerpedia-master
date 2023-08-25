import React from 'react';
import Header from '../components/Header';
import Slider from '../components/Slider';
import AboutUs from '../components/AboutUs';
import History from '../components/History';
import Footer from '../components/Footer';

function HomePage() {
    return (
        <>
            <Header />
            <Slider />
            <History />
            <AboutUs />
            <Footer />
        </>
    )
}

export default HomePage;