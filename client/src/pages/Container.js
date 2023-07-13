import React, { useState } from "react";
import About from "./about";
import Login from "./login";
import Menu from "./Menu";
import Reserve from "./reserve";
import Admin from "./admin";
import Navigation from "../components/navigation";
import Signup from "./signup";
import Carousel from "../components/carousel";
import PayPal from "../components/PaypalButton";
import CheckOut from "../components/CheckOut"
import UserProfile from "./profile"


export default function Container() {
  const loggedin = localStorage.getItem("loggedIn")
  const mustPay =localStorage.getItem("mustpay")
  const [currentPage, setCurrentPage] = useState( loggedin ?  "profile" : "about");

  // if (mustPay) {setCurrentPage('Checkout')}
 

  const renderPage = () => {
     
    if (currentPage === "about") {
      return <About />;
    }
    if (currentPage === "login") {
      return <Login />;
    }
    if (currentPage === "signup") {
      return <Signup />;
    }
    if (currentPage === "menu") {
      return <Menu />;
    }
    if (currentPage === "reserve") {
      return <Reserve />;
    }
    if (currentPage === "PayPal") {
      return <PayPal />;
    }
    if (currentPage === "CheckOut") {
      return <CheckOut />;
    }
    if(currentPage === "admin"){
      return <Admin />
    }
    if(currentPage ==="profile"){
      return<UserProfile />
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <header data-bs-theme="dark">
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <div className="container-fluid">
            <Navigation
              currentPage={currentPage}
              handlePageChange={handlePageChange}
            />
          </div>
        </nav>
      </header>

      <Carousel />

      <main className="container">{renderPage()}</main>

      <footer className="footer text-white">
        <div className="footer-container">
          <h6 className="copyright-text">Salt Your Food Reservation App, Inc. &copy; {new Date().getFullYear()} All rights reserved.</h6>
        </div>
      </footer>
    </div>
  );
}
