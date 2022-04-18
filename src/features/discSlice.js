import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchDisc = createAsyncThunk("disciplines/fetchDisc", async ()=>{
  const r = await fetch('disciplines');
  const data = await r.json();
  return data;
})


const discSlice = createSlice({
  name: 'disciplines',
  initialState: {
    entities: [],
    selectedDisc: {}, 
    status: "idle",
  },
  reducers:{
    discAdded(state,action){
      state.entities.push(action.payload);

    },
    setDisc(state,action){
      state.selectedDisc = action.payload
    },
    unsetDisc(state){
      state.selectedDisc = {}
    }

  },
  extraReducers:{
    [fetchDisc.pending](state) {
      state.status = "loading";
    },
    [fetchDisc.fulfilled](state,action){
      state.entities = action.payload;
      state.status = "idle";
    }
  },
})

export const{discAdded,setDisc,unsetDisc} = discSlice.actions;
export default discSlice.reducer;

