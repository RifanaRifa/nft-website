import React from 'react'
import HeroSection from '../components/UI/HeroSection'
import LiveAuction from '../components/UI/live-auction/LiveAuction';
import SellerSection from '../components/UI/seller-section/SellerSection';
import Trending from '../components/UI/trending-section/Trending';
import StepSection from '../components/UI/step-section/StepSection';
import WantToSell from '../components/UI/WantToSell';


const Home = () => {
    return (
        <>
            <HeroSection />
            <LiveAuction />
            <SellerSection />
            <Trending />
            <StepSection />
            <WantToSell />

        </>
    );
};

export default Home;