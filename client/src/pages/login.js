import React from "react";
const Login = () => {
  return (
    <div>
      <main class="container mt-5">
        <h1 class="mb-4">Login</h1>
        <form class="login-form">
          <div class="mb-3">
            <label for="username" class="form-label">
              Username
            </label>
            <input
              type="text"
              class="form-control"
              id="username-login"
              placeholder="Username"
            />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="password-login"
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            class="btn text-dark"
            style={{ backgroundColor: "#e6ccb3" }}
          >
            Log In
          </button>
          <div id="signupText" class="form-text">
            <a href="SignupForm.js">Create an account.</a>
          </div>
        </form>
      </main>
    </div>
  );
};
export default Login;
