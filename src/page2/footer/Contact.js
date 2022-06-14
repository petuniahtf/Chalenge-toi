import React from "react";

const Contact = () =>{

    const call = [
        {id : "T1", name: "Patantouille", number: "06000000" },
        {id : "T2", name: "Patantouille", number: "06000000" },
        {id : "T3", name: "Patantouille", number: "06000000" },
        {id : "T4", name: "Patantouille", number: "06000000" },
        {id : "T5", name: "Patantouille", number: "06000000" },
        {id : "T6", name: "Patantouille", number: "06000000" }
    ]

    return (
        <div className="containerContactPage2">
        {call.map((item) => 
        <div key={item.id}>
            <p>{item.name}</p>
            <a href={item.number}>{item.number}</a>
        </div>
         )}
        </div>
    )
}

export default Contact;