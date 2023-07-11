import React from 'react';
function Navigation({currentPage, handlePageChange}) {
    return (
        <ul className="nav nav-tabs" align="center">
            <li className="nav-item">
                <a href ="#about" onClick ={() => handlePageChange('about')} className={currentPage ==='about' ? 'nav-link active' : 'nav-link'}>About</a>
            </li>
            <li className="nav-item">
                <a href ="#login" onClick={() => handlePageChange('login')} className={currentPage ==='login' ? 'nav-link active' : 'nav-link'}> Login </a>
            </li>
            <li className="nav-item">
                <a href ="#menu" onClick={() => handlePageChange('menu')} className={currentPage === 'menu' ? 'nav-link active' : 'nav-link'}>Current Menu</a>
            </li>
            <li className="nav-item">
                <a href ="#reserve" onClick={() => handlePageChange('reserve')} className={currentPage === 'reserve' ? 'nav-link active' : 'nav-link'}>Make a Reservation</a>
            </li>
            <li className="nav-item">
                <a href ="#PayPal" onClick={() => handlePageChange('PayPal')} className={currentPage === 'PayPal' ? 'nav-link active' : 'nav-link'}>PayPal</a>
            </li>
            <li className="nav-item">
                <a href ="#CheckOut" onClick={() => handlePageChange('CheckOut')} className={currentPage === 'CheckOut' ? 'nav-link active' : 'nav-link'}>CheckOut</a>
            </li>
        </ul>
    )
}

export default Navigation