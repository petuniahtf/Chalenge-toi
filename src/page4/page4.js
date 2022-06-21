import React from "react";
import { Button } from "@mui/material";


const Page4 = ()=>{
    const[imgApi, setImgApi]= React.useState()

    const API_KEY = '53bc284190a306831e194fda130a2c92'
    //https://api.themoviedb.org/3/movie/550?api_key=53bc284190a306831e194fda130a2c92
    React.useEffect( ()=> {
        fetch(`https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}`)
        .then(response=>{
            console.log(response)
            return response.json()
        })
        .then(json =>{
            console.log(json.backdrop_path)
            return setImgApi(json.backdrop_path)
        })
        .catch(error => {console.log(`l'erreur vien du fetch ${error}`)})

    },[])

    return (
        <>
        <div>
        <Button variant="contained" href="/">Home</Button>
        </div>
        <div>
        <img scr={`https://image.tmdb.org/t/p/w500${imgApi}`} alt="c'est cesé etre un img" />
        </div>
        </>
    )
}

export default Page4;