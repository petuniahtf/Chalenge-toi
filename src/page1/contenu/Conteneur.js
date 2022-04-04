import React from "react";
import QuiltedImageList from "./Carousel";
import './Conteneur.css'
import Dutext from "./Dutexte";


const Conteneur = () =>{

    return(
        <div className="container__conteneur">
            <div >
              <QuiltedImageList/>
            </div>
            <div>
              <Dutext/>
            </div>  
        </div>
    )
}
 export default Conteneur;