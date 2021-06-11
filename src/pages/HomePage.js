import React from 'react';
import Header from '../components/Header.js';
import BannerAbout from '../components/BannerAbout.js';
import BannerMenu from '../components/BannerMenu.js';
import "../components/styling/global.css";


const HomePage = () => {
    return (
        <div>
            <Header />
            <BannerAbout />
            <BannerMenu />
        </div>
    );
};

export default HomePage;