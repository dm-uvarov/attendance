import React from 'react'
import Login from './Login'
import Signup from './Signup'

export default function StartPage({setUser,setIsLoggedIn}){

    return(
        <div>
            <Login setUser={setUser} setIsLoggedIn={setIsLoggedIn}/>
            <h2 id='member'>Not a member?</h2>
            <Signup/> 
        </div>
        )
    
}    