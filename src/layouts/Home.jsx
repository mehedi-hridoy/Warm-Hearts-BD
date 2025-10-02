import React from 'react';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import SupportedDivisions from '../components/SupportedDivisions';
import MainLayout from './MainLayout';


const Home = () => {
    return (
        <MainLayout>
            <Hero />
            <HowItWorks />
            <SupportedDivisions />
        </MainLayout>
    );
};

export default Home;