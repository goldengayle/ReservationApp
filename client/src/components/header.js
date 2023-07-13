import React from "react";

const Header = () => {
  return (
    <div>
      <header data-bs-theme="dark">
        <nav class="navbar navbar-expand-md navbar-dark fixed-top">
          <div class="container-fluid">
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              ></input>
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </nav>
      </header>
    </div>
  );
};
export default Header;
