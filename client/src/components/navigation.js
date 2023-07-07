import React from 'react';
import Auth from '../utils/auth';

function Navigation({ currentPage, handlePageChange }) {
  const isLoggedIn = Auth.loggedIn(); 

  if (isLoggedIn) {
    return (
      <ul className="nav nav-tabs" align="center">
        <li className="nav-item">
          <a
            href="#about"
            onClick={() => handlePageChange('about')}
            className={currentPage === 'about' ? 'nav-link active' : 'nav-link'}
          >
            About
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#menu"
            onClick={() => handlePageChange('menu')}
            className={currentPage === 'menu' ? 'nav-link active' : 'nav-link'}
          >
            Current Menu
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#reserve"
            onClick={() => handlePageChange('reserve')}
            className={currentPage === 'reserve' ? 'nav-link active' : 'nav-link'}
          >
            Make a Reservation
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#admin"
            onClick={() => handlePageChange('admin')}
            className={currentPage === 'admin' ? 'nav-link active' : 'nav-link'}
          >
            Admin Page
          </a>
        </li>
      </ul>
    );
  }

  return (
    <ul className="nav nav-tabs" align="center">
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('about')}
          className={currentPage === 'about' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#login"
          onClick={() => handlePageChange('login')}
          className={currentPage === 'login' ? 'nav-link active' : 'nav-link'}
        >
          Login
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#signup"
          onClick={() => handlePageChange('signup')}
          className={currentPage === 'signup' ? 'nav-link active' : 'nav-link'}
        >
          Signup
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#menu"
          onClick={() => handlePageChange('menu')}
          className={currentPage === 'menu' ? 'nav-link active' : 'nav-link'}
        >
          Current Menu
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#reserve"
          onClick={() => handlePageChange('reserve')}
          className={currentPage === 'reserve' ? 'nav-link active' : 'nav-link'}
        >
          Make a Reservation
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#admin"
          onClick={() => handlePageChange('admin')}
          className={currentPage === 'admin' ? 'nav-link active' : 'nav-link'}
        >
          Admin Page
        </a>
      </li>
    </ul>
  );
}

export default Navigation;