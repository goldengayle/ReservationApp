import React from "react";
const Login = () => {
  return (
    <div>
      <main className="container mt-5">
        <h1 className="mb-4">Login</h1>
        <form className="login-form">
          <div className="mb-3">
            <label for="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username-login"
              placeholder="Username"
            />
          </div>
          <div className="mb-3">
            <label for="password" className="form-label">
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
          <div id="signupText" className="form-text">
            <a href="SignupForm.js">Create an account.</a>
          </div>
        </form>
      </main>
    </div>
  );
};
export default Login;
