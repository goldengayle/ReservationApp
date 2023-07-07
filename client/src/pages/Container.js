import React, { useState } from "react";
import About from "./about";
import Login from "./login";
import Menu from "./Menu";
import Reserve from "./reserve";
import Admin from "./admin";
import Navigation from "../components/navigation";

export default function Container() {
  const [currentPage, setCurrentPage] = useState("about");

  const renderPage = () => {
    if (currentPage === "about") {
      return <About />;
    }
    if (currentPage === "login") {
      return <Login />;
    }
    if (currentPage === "menu") {
      return <Menu />;
    }
    if (currentPage === "reserve") {
      return <Reserve />;
    }
    if(currentPage === "admin"){
      return <Admin />
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <header data-bs-theme="dark">
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <div class="container-fluid">
            <Navigation
              currentPage={currentPage}
              handlePageChange={handlePageChange}
            />
          </div>
        </nav>
      </header>

      <main className="container">{renderPage()}</main>

      <footer className="footer bg-dark text-white">
        <div className="footer-container">
          <p class="float-end">
            <a href="./client/public/index.html">Back to top</a>
          </p>
          <h6 className="copyright-text">Salt Your Food Reservation App, Inc. &copy; {new Date().getFullYear()} All rights reserved.</h6>
        </div>
      </footer>
    </div>
  );
}
