import React, { useState } from 'react';
import About from './About';
import Login from './Login'
import Menu from './Menu';
import Reserve from './Reserve';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'


export default function Container(){
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage ==='About') {
            return <About />;

        }
        if (currentPage ==='Login'){
            return <Login />;
        }
        if (currentPage === 'Menu'){
            return <Menu />
        }
        if (currentPage === 'Reserve'){
            return <Reserve />
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return(
        <div>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
            <Header />
            {renderPage()}
            <Footer />
        </div>
    )
}