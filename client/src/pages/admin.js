import React from 'react';
import {QUERY_RESERVATIONS} from '../utils/queries'
import { useQuery } from '@apollo/client';
const Admin =() =>{
    const isLoggedInAdmin = localStorage.getItem('loggedInAdmin') || false;
    const {loading, data}= useQuery(QUERY_RESERVATIONS) 
    console.log(data)
    // const userData = data?.me || []
    const handleLogin = (event) => {
      event.preventDefault();
      const enteredEmail = document.getElementById("email-login").value;
      const enteredPassword = document.getElementById("password-login").value;
      const storedEmail = "admin17@gmail.com";
      const storedPassword = "password17";
      
     
      
      // Retrieve the entered email and password from the form
      
      localStorage.setItem("loggedInAdmin", true);
      // Compare the entered email and password with the stored values
      if(enteredEmail === storedEmail && enteredPassword === storedPassword) {
        // Perform login actions or redirect to the authenticated page
       
        console.log("Login successful!");
        window.location.reload();
      } else {
        console.log("Login failed. Invalid email or password.");
      }
    };
    
    if (isLoggedInAdmin) {
      const reservations = data?.reservations || [];
  
      return (
        <main className="container mt-5">
          <h1 className="mb-4 text-white">Reservations</h1>
          <div className="row">
            {reservations.map((reservation, index) => (
              <div className="col-md-4" key={index}>
                <div className="card mb-3">
                  <div className="card-header" style={{ backgroundColor: "#F79C59" }}>
                    <h2 className="card-title">
                    Reservation Time: {reservation.reservationTime}
                    </h2>
                  </div>
                  <div className="card-body text-dark">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">Name: {reservation.usernameR}</li>
                      <li className="list-group-item">Group Size: {reservation.groupSize}</li>
                      <li className="list-group-item">Phone Number: {reservation.phoneNumber}</li>
                      <li className="list-group-item">Comments: {reservation.comments}</li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      );
    }
  
  
  else {
    return (
        <div>
          <main className="container mt-5">
            <h1 className="mb-4">Admin Login</h1>
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
                className="btn text-light"
                style={{ backgroundColor: "#36454F" }}
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