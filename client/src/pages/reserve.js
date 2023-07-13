import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { validateEmail } from '../utils/helpers';
import ReactDatepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useMutation, useQuery } from "@apollo/client"
import { ADD_RESERVATION, ADD_RESTOUSER } from '../utils/mutations';
import {QUERY_ME} from '../utils/queries'

// import Auth from '../utils/auth'


export default function Reserve() {
    // const { loading, data} = useQuery(QUERY_ME);
    //   console.log(data)

    // const [username, setUsername] = useState('');
    // const [email, setEmail] = useState('');
    // const [groupsize, setGroupsize] = useState('')
    // const [reservationTime, setReservationTime] = useState(new Date());
    // //const [selectedTime, setSelectedTime] = useState("5:00 pm");
    //const availableTimes = ['5:00 pm', '5:30 pm', '6:00 pm', '6:30 pm', '7:00 pm', '7:30 pm', '8:00 pm', '8:30 pm', '9:00 pm', '9:30pm', '10:00 pm'];
    
    //need button to submit and go to payment

    // const handleInputChange =(e) => {
    // const {target } = e;
    // const inputType = target.name;
    // const inputValue = target.value;

   
    // if (inputType === 'email'){
    //     validateEmail(inputValue)
    //         if (true) {
    //             setEmail(inputValue)
    //         } }
        

    //  if(inputType === 'username'){
    //     setUsername(inputValue)
    //  }


    //  if (inputType ==="groupsize"){
    //     setGroupsize(inputValue)
    //  }

    //  if (inputType ==="reservationTime"){
    //     setReservationTime(inputValue)
    //  }
    // }

    const [reservationForm, setReservationForm] = useState({
        usernameR:'',
        phoneNumber:'',
        groupSize:'',
        reservationTime:'',
        comments:''
    })

    
    
    const [addReservation]= useMutation(ADD_RESERVATION)
    const [addReservationToUser, {data }] = useMutation(ADD_RESTOUSER)
    // const {me} = useQuery(QUERY_ME)
    const useId = localStorage.getItem("useId");
    
     

    const addRes = async(useId, resId)=> {
        const {userRes} = await addReservationToUser({
                    variables: {useId: useId, resId: resId }
                 })
    }


    const handleInputChange= (event) => {
        
        const {name, value} = event.target;
        setReservationForm({
            ...reservationForm,
            [name]:value,
        })
    }
    const handleFormSubmit= async(event) =>{
        event.preventDefault();
       
        

        try{
            console.log(reservationForm)
            const {data} = await addReservation({
                variables:{ ...reservationForm}
            });
           
             
             console.log ("add reservation data", data.addReservation)

             const resId = data.addReservation._id
             console.log("reservation ID", resId)
             console.log("user Id", useId)
             addRes(useId, resId)
             localStorage.setItem("mustpay", true)
             window.location.reload();
            
             
            
            

            // const {userRes} = await addReservationToUser({
            //    variables: { _id : dataRes }
            //  })
            // console.log(userRes)
            // Auth.login(data.addReservation.token);
        }catch(e){
            console.log(e)
        } 

        
        // try{
        //     console.log("here it is",data.reservation._id)
        //     const {userRes} = await addReservationToUser({
        //         variables: {_id:data.reservation._id}
        //     })

        // }catch(e){
        //     console.log(e)
        // }
        
           
        }

        
   
    return (
        <div>
            <main className="container mt-5">
            <h3 className="mb-4"> Please let us know when you would like to reserve a table</h3>
            <form className ="form">
                <div className="mb-3">
                <label htmlFor="name" className="form-label">Reservation Name</label>
                <input 

                    value ={reservationForm.usernameR}
                    name= "usernameR"
                    onChange ={handleInputChange}
                    type ="text"
                    className="form-control"
                    placeholder = "Reservation Name"
                />
                </div>
                <div className="mb-3">
                <label htmlFor="number" className="form-label">Phone Number</label>
                <input  
                    value ={reservationForm.phoneNumber}
                    name="phoneNumber"
                    onChange ={handleInputChange}
                    type = "phoneNumber"
                    className="form-control"
                    placeholder = "Phone Number"
                />
                </div>
                <div className="mb-3">
                <label htmlFor="size" className="form-label">Group Size</label>
                <input  
                    value ={reservationForm.groupSize}
                    name = "groupSize"
                    onChange = {handleInputChange}
                    type ="text"
                    className="form-control"
                    placeholder ="2"
                />
                </div>
                
                {/* <ReactDatepicker
                    selected={reservationForm.reservationTime}
                    name="reservationTime"
                    onChange={handleInputChange}
                    showTimeSelect
                    maxTime= {new Date().setHours(22, 0, 0, 0)}
                    minTime= { new Date().setHours(17, 0, 0, 0)}
                    dateFormat="MMMM d, yyyy h:mm aa"
                    
                />  */}
                <div className="mb-3">
                <label htmlFor="time" className="form-label">Reservation Time</label>
                <ReactDatepicker
                    selected={reservationForm.reservationTime}
                    name="reservationTime"
                    className="form-control"
                    // onChange={handleInputChange}
                    showTimeSelect
                    maxTime= {new Date().setHours(22, 0, 0, 0)}
                    minTime= { new Date().setHours(17, 0, 0, 0)}
                    dateFormat="MMMM d, yyyy h:mm aa"
                    value={reservationForm.reservationTime.toString()}
                    onChange={date => handleInputChange({ target: { value: date, name: 'reservationTime' } })}
                    
                />
                </div>
                {/* <input  
                    value ={reservationForm.reservationTime}
                    name = "reservationTime"
                    onChange = {handleInputChange}
                    type ="text"
                    placeholder ="Please enter date and time"
                /> */}
                <div className="mb-3">
                <label htmlFor="comments" className="form-label">Comments</label>
                <input  
                    value ={reservationForm.comments}
                    name = "comments"
                    onChange = {handleInputChange}
                    type ="text"
                    className="form-control"
                    placeholder ="Let us know if there are any special requests"
                />
                </div>
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
                
                <button type="submit" className="btn text-light" style={{ backgroundColor: "#36454F"}} onClick={handleFormSubmit}>Submit</button>


            </form>
            </main>
    
        </div>
    )
}