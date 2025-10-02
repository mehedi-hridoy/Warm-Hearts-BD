import React from 'react';
import { Outlet } from 'react-router-dom';
import Bar from '../components/Bar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AuthLayout = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-[#f8fbff] to-white">
            <header className="relative">
                <Bar />
                <Navbar />
            </header>
            <main className="flex-1 flex items-center justify-center py-16">
                <div className="app-container">
                    <Outlet />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default AuthLayout;