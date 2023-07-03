import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';
import ReactDatepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export default function Reserve() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [groupsize, setGroupsize] = useState('')
    const [date, setDate] = useState(new Date());
    //const [selectedTime, setSelectedTime] = useState("5:00 pm");
    //const availableTimes = ['5:00 pm', '5:30 pm', '6:00 pm', '6:30 pm', '7:00 pm', '7:30 pm', '8:00 pm', '8:30 pm', '9:00 pm', '9:30pm', '10:00 pm'];
    
    //need button to submit and go to payment

    const handleInputChange =(e) => {
    const {target } = e;
    const inputType = target.name;
    const inputValue = target.value;

   
    if (inputType === 'email'){
        validateEmail(inputValue)
            if (true) {
                setEmail(inputValue)
            } }
        

     if(inputType === 'name'){
        setName(inputValue)
     }


     if (inputType ==="groupsize"){
        setGroupsize(inputValue)
     }

     if (inputType ==="date"){
        setDate(inputValue)
     }
    }
   
    return (
        <div>
            <h3> Please let us know when you would like to reserve a table</h3>
            < form align= "center" className ="form">
                <input 
                    value ={name}
                    name= "name"
                    onChange ={handleInputChange}
                    type ="text"
                    placeholder = "name"
                />
                <br></br>
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
                <br></br>
                <ReactDatepicker
                    selected={date}
                    name="date"
                    onChange={setDate}
                    showTimeSelect
                    maxTime= {new Date().setHours(22, 0, 0, 0)}
                    minTime= { new Date().setHours(17, 0, 0, 0)}
                    dateFormat="MMMM d, yyyy h:mm aa"
                    
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
                <button>Submit</button>


            </form>
    
        </div>
    )
}