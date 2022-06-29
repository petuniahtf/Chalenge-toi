import React from "react";
import './btnSocial.css'
import avatar from'../image/avatar-michelle.jpg'



const SocialBtn = () =>{
    const arrowBtn = <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13"><path fill="#6E8098" d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"/></svg>
    return(
        <div className="container__social">
            <img src={avatar} alt="??"/>
            <div className="text1">
            <h2>Michelle Appleton</h2>
            <p>28 juin 2020</p>
            </div>
            <button className="btn__social"> {arrowBtn}</button>
        </div>
    )
}

export default SocialBtn