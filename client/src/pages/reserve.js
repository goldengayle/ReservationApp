import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export default function Reserve() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [groupsize, setGroupsize] = useState('')
    const [startDate, setStartDate] = useState(new Date());
    
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
                {/* <DatePicker
                    selected={date}
                    onChange={handleDateChange}
                    showTimeSelect
                    dateFormat="Pp"
                /> */}
                <br></br>
                <button>Submit</button>


            </form>
    
        </div>
    )
}