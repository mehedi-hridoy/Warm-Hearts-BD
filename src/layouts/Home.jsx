import React from 'react';
import Navbar from '../components/Navbar';
import Bar from '../components/Bar';

const Home = () => {
    return (
        <div>
            <nav>
                <Bar></Bar>
                <Navbar />
            </nav>
        </div>
    );
};

export default Home;