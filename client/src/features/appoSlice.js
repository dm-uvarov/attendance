import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchAppo = createAsyncThunk("appointments/fetchAppo", async ()=>{
  const r = await fetch('/appointments');
  const data = await r.json();
  return data;
})


const appoSlice = createSlice({
  name: 'appointments',
  initialState: {
    entities: [], 
    status: "idle",
  },
  reducers:{
    appoAdded(state,action){
      state.entities.push(action.payload);
    },
  },
  extraReducers:{
    [fetchAppo.pending](state) {
      state.status = "loading";
    },
    [fetchAppo.fulfilled](state,action){
      state.entities = action.payload;
      state.status = "idle";
    }
  },
})

export const{appoAdded} = appoSlice.actions;
export default appoSlice.reducer;
