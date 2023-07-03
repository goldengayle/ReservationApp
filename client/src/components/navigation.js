import React from 'react';
// import About from '../pages/About';
// import Signup from '../pages/Signup';
// import Login from '../pages/Login';
// import Menu from '../pages/Menu';
// import Reserve from '../pages/Reserve';

function Navigation({currentPage, handlePageChange}) {
    return (
        <ul className="nav nav-tabs" align="center">
            <li className="nav-item">
                <a href ="#about" onClick ={() => handlePageChange('About')} className={currentPage ==='About' ? 'nav-link active' : 'nav-link'}>About</a>
            </li>
            <li className="nav-item">
                <a href ="#signup" onClick={() => handlePageChange('Signup')} className={currentPage ==='Signup' ? 'nav-link active' : 'nav-link'}>Sign Up</a>
            </li>
            <li className="nav-item">
                <a href ="#login" onClick={() => handlePageChange('Login')} className={currentPage ==='Login' ? 'nav-link active' : 'nav-link'}> Login </a>
            </li>
            <li className="nav-item">
                <a href ="#menu" onClick={() => handlePageChange('Menu')} className={currentPage === 'Menu' ? 'nav-link active' : 'nav-link'}>Current Menu</a>
            </li>
            <li className="nav-item">
                <a href ="#reserve" onClick={() => handlePageChange('Reserve')} className={currentPage === 'Reserve' ? 'nav-link active' : 'nav-link'}>Make a Reservation</a>
            </li>
        </ul>
    )
}

// const Navigation = () => {
//     return (
//         <Signup />
//     )
// }

export default Navigation