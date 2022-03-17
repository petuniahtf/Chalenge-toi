import React, { useState } from "react";
import { TextField } from "@mui/material";
import './Connection.css'

const Connection =()=>{
const [inputMaterial , setInputMateiral] = useState('??????')
const handleChange =(event)=>{
    event.preventDefault()
    setInputMateiral (event.target.value)

}
    return(
        <div className="container__connection">
            <label>Nous somme ravi de vous voir : {inputMaterial} </label>
            <TextField
          id="outlined-name"
          label="Name"
          value={inputMaterial}
          onChange={handleChange}
          />

        </div>
        
    )
}
export default Connection;