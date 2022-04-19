import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchSlots = createAsyncThunk("slots/fetchSlots", async ()=>{
  const r = await fetch('/slots');
  const data = await r.json();
  return data;
})


const slotsSlice = createSlice({
  name: 'slots',
  initialState: {
    entities: [],
    // nested
    selectedSlot: {},  
    status: "idle",
  },
  reducers:{
    slotsAdded(state,action){
      state.entities.push(action.payload);
    },
    setSlot(state,action){
      state.selectedSlot = action.payload
    },
    unsetSlot(state){
      state.selectedSlot = {}
    }
  },
  extraReducers:{
    [fetchSlots.pending](state) {
      state.status = "loading";
    },
    [fetchSlots.fulfilled](state,action){
      state.entities = action.payload;
      state.status = "idle";
    }
  },
})

export const{slotsAdded, unsetSlot, setSlot} = slotsSlice.actions;
export default slotsSlice.reducer;
