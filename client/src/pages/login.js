import React,{useState} from "react";
import Auth from '../utils/auth';
const Login = () => {
  
  const isLoggedIn = localStorage.getItem('loggedIn') || false; 
  const handleLogin = (event) => {
    event.preventDefault();

    // Retrieve email and password from local storage
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    // Retrieve the entered email and password from the form
    const enteredEmail = document.getElementById("email-login").value;
    const enteredPassword = document.getElementById("password-login").value;
    localStorage.setItem("loggedIn", true);
    // Compare the entered email and password with the stored values
    if (enteredEmail === storedEmail && enteredPassword === storedPassword) {
      // Perform login actions or redirect to the authenticated page
      console.log("Login successful!");
      window.location.reload();
    } else {
      console.log("Login failed. Invalid email or password.");
    }
  };

  return (
    <div>
      <main className="container mt-5">
        <h1 className="mb-4">Login</h1>
        <form className="login-form" onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Email
            </label>
            <input
              type="text"
              className="form-control"
              id="email-login"
              placeholder="Email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password-login"
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            className="btn text-dark"
            style={{ backgroundColor: "#e6ccb3" }}
          >
            Log In
          </button>
        </form>
      </main>
    </div>
  );
};

export default Login;