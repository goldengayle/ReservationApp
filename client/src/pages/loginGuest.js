import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { LOGIN_GUEST } from '../utils/mutation';

const LoginGuest = () => {
    const [guestLogin, { loading, error, data }] = useMutation(LOGIN_GUEST );
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
  
    if (data) {
      const { token, user } = data.guestLogin;
      // Handle the authenticated guest user, e.g., store the token in local storage
  
      // Redirect or continue as a guest user
    }
  
    return (
      <div>
        <h2>Login as Guest</h2>
        <button onClick={guestLogin}>Login as Guest</button>
      </div>
    );
  };
  
  export default LoginGuest;
 
  
  
  
  
  
  
  