import React,{useState ,useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {loginFetchUser} from "../features/userSlice"
import {fetchSlots} from '../features/slotsSlice'
import {fetchDisc} from '../features/discSlice'
import {fetchStud} from '../features/studSlice'
import {fetchAppo} from '../features/appoSlice'
import {fetchAtte} from '../features/atteSlice'
// import "antd/dist/antd.css";
// import { Form, Input, Button} from "antd";
// import { UserOutlined, LockOutlined } from "@ant-design/icons";

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
                r.json().then(data=> {setUser(data)}
                )
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
           
            <form onSubmit={onSubmit}>
                        
                <div className="form-outline mb-4">
                    <span>👤</span>
                    <input onChange={(e) => setUsername(e.target.value)} type="text" id="login-username-input" className="form-control" placeholder="Username" />
                </div>

                        
                <div className="form-outline mb-4">
                    <span> 🔐</span>
                    <input onChange={(e) => setPassword(e.target.value)} type="password" id="login-pasword-input" className="form-control" placeholder="Password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block mb-4">Login</button>
            </form>

           
         </div>


    )
}



export default Login










