import React, { useState } from 'react';
import About from './about';
import Login from './login'
import Menu from './Menu';
import Reserve from './reserve';
import Header from '../components/header'
import Footer from '../components/footer'
import Navigation from '../components/navigation'


export default function PortfolioContainer(){
    const [currentPage, setCurrentPage] = useState('about');

    const renderPage = () => {
        if (currentPage ==='about') {
            return <About />;

        }
        if (currentPage ==='login'){
            return <Login />;
        }
        if (currentPage === 'menu'){
            return <Menu />
        }
        if (currentPage === 'reserve'){
            return <Reserve />
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return(
        <div>
            <Header />
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
            {renderPage()}
            <Footer />
        </div>
    )
}