// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


// export const fetchUser = createAsyncThunk("user/check",async () =>{
//   const r = await fetch('/me');
//   if (r.ok) {
//     return (r=>r.json())  // return user if user 
//   } else {
//     return ("not authorized") // if not go away
//   }
// } )


// export const loginFetchUser = createAsyncThunk("user/login",
//     async ({username,password}) =>{
  
//       return fetch("/login" , {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify({
//               username: username,
//               password: password,
//           }),
//       })
//     .then(r=>  
//       {if (r.ok) {
//       return (r=>r.json())  // return user if user 
//     } else {
//       return ("not authorized") // if not go away
//     }})
// });

// export const logoutFetchUser = createAsyncThunk("user/logout",
//     async ({username,password}) =>{
  
//       return fetch("/logout" , {
//           method: 'Delete'}) });

// const initialState = {
//    user: {},
//    status: "",
// }

// const userSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers:{
//     setUser(state,action){
//       state.user = action.payload.user
//       state.status = "user logged in" 

//     }, 
//     removeUser(state){
//       state.user = {}
//     }
//    }
// })