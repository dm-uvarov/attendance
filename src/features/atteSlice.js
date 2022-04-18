import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchAtte = createAsyncThunk("attendances/fetchAtte", async ()=>{
  const r = await fetch('/attendances');
  const data = await r.json();
  return data;
})


const atteSlice = createSlice({
  name: 'attendances',
  initialState: {
    entities: [], 
    status: "idle",
  },
  reducers:{
    atteAdded(state,action){
      state.entities.push(action.payload);
    },

  },
  extraReducers:{
    [fetchAtte.pending](state) {
      state.status = "loading";
    },
    [fetchAtte.fulfilled](state,action){
      state.entities = action.payload;
      state.status = "idle";
    }
  },
})

export const{atteAdded} = atteSlice.actions;
export default atteSlice.reducer;
