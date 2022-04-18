import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchStud = createAsyncThunk("students/fetchStud", async ()=>{
  const r = await fetch('/students');
  const data = await r.json();
  return data;
})


const studSlice = createSlice({
  name: 'students',
  initialState: {
    entities: [], 
    status: "idle",
  },
  reducers:{
    studAdded(state,action){
      state.entities.push(action.payload);
    },

  },
  extraReducers:{
    [fetchStud.pending](state) {
      state.status = "loading";
    },
    [fetchStud.fulfilled](state,action){
      state.entities = action.payload;
      state.status = "idle";
    }
  },
})

export const{studAdded} = studSlice.actions;
export default studSlice.reducer;
