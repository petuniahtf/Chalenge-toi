import React from "react";
import SocialBtn from "./btnSocial";
import { Button } from "@mui/material";
import './page6.css'

const Page6 = () =>{
    return(
        <div>
            <Button variant="contained" href="/">Home</Button>
            
            <SocialBtn/>
        </div>
    )
}

export default Page6