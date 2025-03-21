import React from "react";
import "./Modal.css"
import { useState } from "react";

const Modal = ({setClose}) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mob, setMob] = useState("");
    const [date, setDate] = useState("");
    const [dateDone, setDateDone] = useState(true);
    const verification = (e) => {
        var tdate = new Date();
        if(name.length == 0) return false;

        if(email.length == 0){
             return false;}

             else if (!email.includes("@")) {return false;}

             else if (email.indexOf("@") == email.length-1) {return false;}

        if(mob.length < 10 && mob.length > 1){
            alert("Invalid phone number. Please enter a 10-digit phone number.")
            e.preventDefault();
            return false;
        } else if (mob.length == 0) return false;
        
        if(date.length == 0){
            return false;
        }
         if (new Date(date).getTime() > tdate.getTime()){
            alert("Ivalid date of birth. Date of birth cannot be in the future.")
            e.preventDefault();
            return false;
        }
        setDateDone(true);
        return true;
        
    }

    const handleSubmit = (e) => {
        
        if(verification(e)){
        setName("");
        setEmail("");
        setMob("");
        setDate("");
        e.preventDefault();
        }
        
        

        
        
        
    }

    const handleOnChange = (e) => {
        const re = /^[0-9\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) setMob(e.target.value)
    }
    return (
        <>
        <div className="modal-wrapper" onClick={setClose}></div>
        <div className="modal">
            <div className="modal-content">
                <h2>Fill Details</h2>
                <form className="form">
                    <label>Username:</label>
                    <br/>
                    <input required  id="username" value={name} onChange={(e) => setName(e.target.value)}></input>
                    <br/>
                    <label>Email Address:</label>
                    <br/>
                    <input required type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    <br/>
                    <label>Phone Number:</label>
                    <br/>
                    <input required id="phone" value={mob} onChange={(e) => handleOnChange(e)}></input>
                    <br/>
                    <label>Date of Birth:</label>
                    <br/>
                    <input required type="date" id="dob" value={date} onChange={(e) => setDate(e.target.value)}></input>
                    <br/>
                    <div>
                        <button className="Submit" onClick={(e) => {handleSubmit(e)}}>Submit</button>
                    </div>
                    
                </form>
            </div>
        </div>
        </>
    )
}
export default Modal;