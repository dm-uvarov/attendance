import React from "react";
import Logout from "./components/Logout"



export default function Home ({setUser}) {

    return (
        <div> 
    <h2>Welcome!</h2>
    <Logout setUser ={setUser} />
    </div>
    )
}