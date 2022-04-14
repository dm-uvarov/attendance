import React, {useState, useEffect} from 'react'
import './App.css';
import StartPage from "./components/StartPage"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./components/Home"
import Logout from "./components/Logout"


function App() {


  const [students, setStudents] = useState([])
  const [user,setUser] = useState(null)
  const [isLoggedIn,setIsLoggedIn] = useState(false)

 
  useEffect(() => {
    fetch('/logout',{method:"DELETE"}).then().then(console.log)
    setUser(null)
    setIsLoggedIn(false)
  }, [])


  useEffect(() => {
    fetch("/students")
      .then(r=>{
        if(r.ok){
          r.json().then(data => setStudents(data))
        }else{
          r.json().then(console.log)
        }
      })
  }, [isLoggedIn])

  useEffect(
    () => 
  {
    fetch("/me").then(r => {
      if (r.ok){
        r.json()
        .then((user) => { 
          setIsLoggedIn(true)
          setUser(user)
        })
      }
    })
  }
  , [])



  // const handleDelete = (post) => {
  //   const newPosts = posts.filter((p) => p.id !== post.id)
  //   setPosts(newPosts)
  // }

  // const addPost = (post) => {
  //   const newPosts = [...posts,post]
  //   setPosts(newPosts)
  // }


    


  // const createPost = (p) => {
  //   fetch('/posts', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(p)
  //   })
  //     .then(r=>r.json())
  //     .then(newObj => {
  //       setPosts([...posts, newObj])
  //     })
  // }

  
 if ((!(user))) {
   return(
    <Switch>
      <Route path="/">
       <StartPage setUser={setUser} setIsLoggedIn={setIsLoggedIn}/>
      </Route>
    </Switch>
   )
 }



  return (
    <div className="App">
      
      <div>
        <Switch>

          
          <Route path="/home">
            <div>welcome</div>
            <Logout setUser ={setUser} />
          </Route>



          


        </Switch>
      </div>
      
    </div>
  );

  }
export default App
