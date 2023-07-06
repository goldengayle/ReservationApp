import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { validateEmail } from '../utils/helpers';
import ReactDatepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useMutation } from "@apollo/client"
import { ADD_RESERVATION } from "../utils/mutations"


export default function Reserve() {

    const [reservationForm, setReservationForm] = useState({username:'', email:'', groupSize:'', reservationTime:'' })
    const [addReservation, {error, data}] = useMutation(ADD_RESERVATION)

    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [groupsize, setGroupsize] = useState('')
    // const [date, setDate] = useState(new Date());
    // //const [selectedTime, setSelectedTime] = useState("5:00 pm");
    // //const availableTimes = ['5:00 pm', '5:30 pm', '6:00 pm', '6:30 pm', '7:00 pm', '7:30 pm', '8:00 pm', '8:30 pm', '9:00 pm', '9:30pm', '10:00 pm'];
    
    // //need button to submit and go to payment
const handleInputChange =(event) => {
    const{name, value} = event.target;
    const inputType = target.name;
    if (inputType === 'email'){
        validateEmail(inputValue)
            if (false){
                return JSON.message({'must use valid email!'})
            }}
    setReservationForm({...reservationForm, [name]:value})
}

const handleFormSubmit=async(event)=>{
    event.preventDefault();

try {
    const data =await ADD_RESERVATION({
        variables:{...reservationForm},
    })


setReservationForm({
    username:'',
    email:'',
    groupSize:'',
    reservationTime:'',
})};}
    // const handleInputChange =(e) => {
    // const {target } = e;
//const inputType = target.name;
    // const inputValue = target.value;

   
    // if (inputType === 'email'){
    //     validateEmail(inputValue)
    //         if (true) {
    //             setEmail(inputValue)
    //         } }
        

    //  if(inputType === 'name'){
    //     setName(inputValue)
    //  }


    //  if (inputType ==="groupsize"){
    //     setGroupsize(inputValue)
    //  }

    //  if (inputType ==="date"){
    //     setDate(inputValue)
    //  }
    // }

//     const handleAddReservation= async(name, email, groupsize, date)=>{
//         const [addReservation,{error}]= useMutation(ADD_RESERVATION)

//     // get token
//     const token = Auth.loggedIn() ? Auth.getToken() : null;

//     if (!token) {
//       return false;
//     }

//     try {
//       const { data } = await addReservation({
//         variables:{input}});

//       if (!data.ok) {
//         throw new Error('something went wrong!');
//       }

//       // if book successfully saves to user's account, save book id to state
//       setSavedBookIds([...savedBookIds,data.bookId]);
//       window.location.reload()
//     } catch (err) {
//       console.error(err);
//     }
//   };
        

    

   
    return (
        <div>
            <h3> Please let us know when you would like to reserve a table</h3>
        <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <Form.Group className='mb-3'>
          <Form.Label htmlFor='username'>Reservation Name</Form.Label>
          <Form.Control
            type='text'
            placeholder={context.username}
            name='username'
            onChange={handleInputChange}
            value={reservationForm.username}
            required
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label htmlFor='email'>Email</Form.Label>
          <Form.Control
            type='text'
            placeholder={context.email}
            name='email'
            onChange={handleInputChange}
            value={reservationForm.email}
            required
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label htmlFor='groupSize'>Group Size</Form.Label>
          <Form.Control
            type='integer'
            placeholder='2'
            name='groupSize'
            onChange={handleInputChange}
            value={reservationForm.groupSize}
            required
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label htmlFor='comments'>Comments</Form.Label>
          <Form.Control
            type='text'
            placeholder=''
            name='comments'
            onChange={handleInputChange}
            value={reservationForm.comments}
            required
          />
        </Form.Group>
        <ReactDatepicker
                    selected={date}
                    name="date"
                    onChange={setDate}
                    showTimeSelect
                    maxTime= {new Date().setHours(22, 0, 0, 0)}
                    minTime= { new Date().setHours(17, 0, 0, 0)}
                    dateFormat="MMMM d, yyyy h:mm aa"
                    
                /> 
        </Form>
                
                
                {/* <br>
                </br>
                <input  
                    value ={email}
                    name="email"
                    onChange ={handleInputChange}
                    type = "email"
                    placeholder = "email"
                />
                <br></br>
                <input  
                    value ={groupsize}
                    name = "groupsize"
                    onChange = {handleInputChange}
                    type ="text"
                    placeholder ="2"
                />
                <br></br> */}
               
                {/* <select
                    value ={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    >
                        {renderTimeOptions({availableTimes})}
                    </select>
                 <input
                type="time"
                 min="17:00"
                max="22:00"
                step="1800"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                /> */}
                <br></br>
                <Button onClick={() => handleAddReservation()}>Submit</Button>


            
    
        </div>)}
