import React from 'react';
import Auth from '../utils/auth';

function Navigation({ currentPage, handlePageChange }) {
  const isLoggedIn = localStorage.getItem('loggedIn') || false; 
  const handleLogout = () => {
    // Perform logout actions here (e.g., clear authentication tokens, reset state, etc.)
    localStorage.removeItem('loggedIn');
    // Redirect to the login page or any other desired page
    handlePageChange('login'); // Update 'login' with the appropriate page name
  };

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
            href="#profile"
            onClick={() => handlePageChange('profile')}
            className={currentPage === 'Profile' ? 'nav-link active' : 'nav-link'}
          >
            Profile
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
        <li className="nav-item">
          <a
            href="#logout"
            onClick={handleLogout} // Call the handleLogout function on click
            className={currentPage === 'logout' ? 'nav-link active' : 'nav-link'}
          >
            Logout
          </a>
        </li>
        <li className="nav-item">
                <a href ="#PayPal" onClick={() => handlePageChange('PayPal')} className={currentPage === 'PayPal' ? 'nav-link active' : 'nav-link'}>PayPal</a>
            </li>
            <li className="nav-item">
                <a href ="#CheckOut" onClick={() => handlePageChange('CheckOut')} className={currentPage === 'CheckOut' ? 'nav-link active' : 'nav-link'}>CheckOut</a>
            </li>
      </ul>
    );
  }
  else{
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
}

export default Navigation;