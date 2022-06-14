import React from "react";
import './page3.css'
import { Button } from "@mui/material";
import Home3 from "./home/home";
import Footer3 from "./footer/footer";
//import data from "./data.json"

const Page3 = ()=>{
   
    return (
        <>
        <Button variant="contained" href="/">Home</Button>
        <Home3 />
        <Footer3/>
        </>
    )
}

export default Page3;