import React from "react";
import SocialBtn from "./btnSocial";
import { Button } from "@mui/material";
import './page6.css'
import commode from '../image/drawers.jpg'

const Page6 = () => {
    return (
        <div>
            <Button variant="contained" href="/">Home</Button>
            <div className="container">
                <div className="container__type">
                <img src={commode} width='350px' height='350px' alt="..." />
                <div className="container__tupe">
                    <h1>Shift the overall look and feel by adding these wonderful touches to furniture in your home</h1>
                    <p>Ever been in a room and felt like something was missing? Perhaps it felt slighty bare and uninviting. I've got some simple tips to help you make any room feel complete</p>    
                </div>
                <div className="container__tape">
                <SocialBtn />
                </div>
                </div>
            </div>
        </div>
    )
}

export default Page6