import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';
import ReactDatepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useMutation } from "@apollo/client"
import { ADD_RESERVATION } from '../utils/mutations';
import Auth from '../utils/auth'


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
        email:'',
        groupSize:'',
        reservationTime:'',
        comments:''
    })

    const [addReservation, {error, data}]= useMutation(ADD_RESERVATION)

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
            // Auth.login(data.addReservation.token);
        }catch(e){
            console.log(e)
        }
        }

    
   
    return (
        <div>
            <h3> Please let us know when you would like to reserve a table</h3>
            < form align= "center" className ="form" >
                <input 
                    value ={reservationForm.usernameR}
                    name= "usernameR"
                    onChange ={handleInputChange}
                    type ="text"
                    placeholder = "name"
                />
                <br></br>
                <input  
                    value ={reservationForm.email}
                    name="email"
                    onChange ={handleInputChange}
                    type = "email"
                    placeholder = "email"
                />
                <br></br>
                <input  
                    value ={reservationForm.groupSize}
                    name = "groupSize"
                    onChange = {handleInputChange}
                    type ="integer"
                    placeholder ="2"
                />
                <br></br>
                {/* <ReactDatepicker
                    selected={date}
                    name="date"
                    onChange={setDate}
                    showTimeSelect
                    maxTime= {new Date().setHours(22, 0, 0, 0)}
                    minTime= { new Date().setHours(17, 0, 0, 0)}
                    dateFormat="MMMM d, yyyy h:mm aa"
                    
                />  */}
                <br></br>
                <input  
                    value ={reservationForm.reservationTime}
                    name = "reservationTime"
                    onChange = {handleInputChange}
                    type ="text"
                    placeholder ="2"
                />
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
                <button onClick={handleFormSubmit}>Submit</button>


            </form>
    
        </div>
    )
}