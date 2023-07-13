import React, {useState} from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations"
const Signup = () => {
  const [signUpForm, setSignUpForm] = useState({
    email:'',
    password:'',
    
})
  const [addUser] = useMutation(ADD_USER)
  const handleInputChange= (event) => {
    const {name, value} = event.target;
    setSignUpForm({
        ...signUpForm,
        [name]:value,
    })}
  const handleFormSubmit = async(event) => {
    event.preventDefault();

    // Get the values from the form inputs
    const email = document.getElementById("email-login").value;
    const password = document.getElementById("password-login").value;

    // Store the values in localStorage
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("loggedIn", true);
    // Reset the form inputs
    document.getElementById("email-login").value = "";
    document.getElementById("password-login").value = "";

    

    try{
      console.log(signUpForm)
      const {data} = await addUser({
        variables: {...signUpForm}
      })
      console.log("signup info", data)
      console.log(data.addUser.user._id)
      const useId = data.addUser.user._id
      localStorage.setItem("useId", useId);
      
      

    }catch(e){
      console.log(e)

    }


  };


  
  return (
    <div>
      <main class="container mt-5">
        <h1 class="mb-4">Signup</h1>
        <form class="login-form" onSubmit={handleFormSubmit}>
          <div class="mb-3">
            <label for="email" class="form-label">
              Email
            </label>
            <input
              type="text"
              class="form-control"
              id="email-login"
              placeholder="Email"
              name="email"
              onChange ={handleInputChange}
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
              name="password"
              onChange ={handleInputChange}
            />
          </div>
          <button
            type="submit"
            class="btn text-light"
            style={{ backgroundColor: "#36454F" }}
          >
            Signup
          </button>
        </form>
      </main>
    </div>
  );
};
  
export default Signup;