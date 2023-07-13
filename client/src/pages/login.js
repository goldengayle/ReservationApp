import React,{useState} from "react";
import { Form, Button, Alert } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { LOGIN_USER } from '../utils/mutations';
const Login = () => {
  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const isLoggedIn = localStorage.getItem('loggedIn') || false; 

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };


  const handleLogin = async (event) => {
    event.preventDefault();


    // Retrieve email and password from local storage
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    // Retrieve the entered email and password from the form
    const enteredEmail = document.getElementById("email-login").value;
    const enteredPassword = document.getElementById("password-login").value;
    localStorage.setItem("loggedIn", true);
    // Compare the entered email and password with the stored values
    // if (enteredEmail === storedEmail && enteredPassword === storedPassword) {
    //   // Perform login actions or redirect to the authenticated page
    //   console.log("Login successful!");
    //   window.location.reload();
    // } else {
    //   console.log("Login failed. Invalid email or password.");
    // }


    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      if (enteredEmail === storedEmail && enteredPassword === storedPassword) {
        // Perform login actions or redirect to the authenticated page
        console.log("Login successful!");
        const {data} = await login({

      

          variables: { ...userFormData },
          });
    
          
          
          const useId = data.login.user._id
          localStorage.setItem("useId", useId);
          // Auth.login(data.login.token);
      } else {
        console.log("Login failed. Invalid email or password.");
      }
      
    } catch (e) {
      console.error(e);
    }

    setUserFormData({
      email: '',
      password: '',
    });

  };

  return (
    <div>
      <main className="container mt-5">
        <h1 className="mb-4">Login</h1>

        <form className="login-form" onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email

            </label>
            <input
              type="text"
              className="form-control"
              name= "email"
              onChange= {handleInputChange}
              value={userFormData.email}
              id="email-login"
              placeholder="Email"
              required
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
              name='password'
            onChange={handleInputChange}
            value={userFormData.password}
            required
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
};

export default Login;