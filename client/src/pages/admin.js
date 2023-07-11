import React from 'react';
const Admin =() =>{
    const isLoggedIn = localStorage.getItem('loggedIn') || false; 
    const handleLogin = (event) => {
      event.preventDefault();
      const enteredEmail = document.getElementById("email-login").value;
      const enteredPassword = document.getElementById("password-login").value;
   
      const foundAdmin = adminSeeds.find(
        (admin) => admin.email === enteredEmail && admin.password === enteredPassword
      );
      
      // Retrieve the entered email and password from the form
      
      localStorage.setItem("loggedIn", true);
      // Compare the entered email and password with the stored values
      if (foundAdmin) {
        // Perform login actions or redirect to the authenticated page
        localStorage.setItem("loggedIn", true);
        console.log("Login successful!");
        window.location.reload();
      } else {
        console.log("Login failed. Invalid email or password.");
      }
    };
    if (isLoggedIn) {
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
  }
  else {
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
  }
}


export default Admin