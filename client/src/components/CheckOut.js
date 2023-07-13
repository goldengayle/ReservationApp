import React, {useState} from 'react';
 // import PayPalButton from './PaypalButton';
 import { PayPalButton } from 'react-paypal-button-v2';
 import PayPalButtonComponent from "./PaypalButton";

const CheckOut = () => {
  //... your other code here
  const [state, setState] = useState({
    name: '',
    email: '',
    address: '',
    state: '',
    zip: ''
  });

  const handleInputChange = e =>{
    setState({
        ...state,
        [e.target.name]: e.target.value
    });
  };

  const returnToProfile =(e) => {
    localStorage.setItem("mustpay", false)
    window.location.reload()

  }
  const handleSubmit = e => {
    e.preventDefault();
    
    // Registration fee is complete for user
    // Registration fee is  not complete for user

    //Need to handle submission logic here
  }

  const successPaymentHandler = (paymentResult) =>{
      console.log(paymentResult)
      //dispatchEvent
  }

  return (

    <form onSubmit={handleSubmit}>
        {/* <label>
            Name:
            <input type="text" name="name" onChange={handleInputChange} />
        </label><br />
        <label>
            Email:
            <input type="email" name="email" onChange={handleInputChange} />
        </label><br />
        <label>
            Address:
            <input type='text' name="address" onChange={handleInputChange} />
        </label><br />
        <label>
            City:
            <input type="text" name="city" onChange={handleInputChange} />
        </label><br />
        <label>
            State:
            <input type="text" name="state" onChange={handleInputChange} />
        </label><br />
        <label>
            Zip:
            <input type="text" name="zip" onChange={handleInputChange} />
        </label><br /><br /> */}
        <label>
          <b>Standard Reservation fee: $25.00</b>
        </label><br /><br />
        <label>
          <PayPalButton
          amount="25" 
          currency="USD"
          onSucess={successPaymentHandler}
          options={{
            clientId: 'ATmg78ssJxFLlAEX8JmTbfGWrNA6DUlxgCGcdmonxAXwiZEV5U-Ii-mzgkKyVLloYutP7c8cQrt0YneP',
          }}/> $25
          
        </label>
        <input type="submit" value="Submit" /><br></br>
        <button onClick={returnToProfile}> return to profile</button>
    </form>

    
    
    // <div>
     
  );
}

export default CheckOut;