import React,{useState ,useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {loginFetchUser} from "../features/userSlice"
import {fetchSlots} from '../features/slotsSlice'
import {fetchDisc} from '../features/discSlice'
import {fetchStud} from '../features/studSlice'
import {fetchAppo} from '../features/appoSlice'
import {fetchAtte} from '../features/atteSlice'

function Login({setUser, setIsLoggedIn}){


    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const dispatch = useDispatch();



    let navigate = useNavigate()
    const onSubmit = (e) => {
        e.preventDefault()
        const userLogin = {
            username: username,
            password: password
        }

        fetch('/login',{
            method:'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(userLogin)
        })
        
        .then(r=>{
            if(r.ok){
                r.json().then(setUser)
                setIsLoggedIn(true)

                dispatch(fetchSlots());
                dispatch(fetchDisc());
                dispatch(fetchStud());
                dispatch(fetchAppo());
                dispatch(fetchAtte());






                navigate("/home");
            }else{
                r.json().then( (d) => {
                    console.log("userlogin",userLogin)
                    alert("Invalid Username or Password")})
            }
        })
        .then(d => console.log(d))

        // dispatch(loginFetchUser(userLogin));
        // console.log()
    }

    return (

        <div className="login-form">
            <h1>Login</h1> 
            <form onSubmit={onSubmit}>
                        
                <div className="form-outline mb-4">
                    <input onChange={(e) => setUsername(e.target.value)} type="text" id="login-username-input" className="form-control" placeholder="Username" />
                    <label className="form-label" htmlFor="login-username-input">Username</label>
                </div>

                        
                <div className="form-outline mb-4">
                    <input onChange={(e) => setPassword(e.target.value)} type="password" id="login-pasword-input" className="form-control" placeholder="Password" />
                    <label className="form-label" htmlFor="login-pasword-input">Password</label>
                </div>

                <button type="submit" className="btn btn-primary btn-block mb-4">Login</button>
            </form>

            
        

         </div>


    )
}



export default Login