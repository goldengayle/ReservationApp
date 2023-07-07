import React from "react";
const Signup = () => {
  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Get the values from the form inputs
    const email = document.getElementById("email-login").value;
    const password = document.getElementById("password-login").value;

    // Store the values in localStorage
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    // Reset the form inputs
    document.getElementById("email-login").value = "";
    document.getElementById("password-login").value = "";
  };
  
  return (
    <div>
      <main class="container mt-5">
        <h1 class="mb-4">Signup</h1>
        <form class="login-form" onSubmit={handleFormSubmit}>
          <div class="mb-3">
            <label for="username" class="form-label">
              Email
            </label>
            <input
              type="text"
              class="form-control"
              id="email-login"
              placeholder="Email"
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
            Signup
          </button>
        </form>
      </main>
    </div>
  );
};
  
export default Signup;