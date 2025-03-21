import React, { useState } from "react";
import Modal from "./Modal";

const LandingPage = () => {




    const [open, setOpen] = useState(false);

    const setClose = () => {
        setOpen(false);
    }

    return (
        <div style={{height:"100vh", width:"100%"}}>
        <h1>User Details Modal</h1>
        <button style={{backgroundColor:"#007bff", borderRadius:"5px", width:"90px", height:"30px", border:"none", color:"white"}}       onClick={() => setOpen(true)}>Open Form</button>
        {open && <Modal setClose={setClose}/>}
        </div>
    )
}
export default LandingPage;