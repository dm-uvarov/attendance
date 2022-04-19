import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchAtte = createAsyncThunk("attendances/fetchAtte", async () => {
  const r = await fetch('/attendances');
  const data = await r.json();
  return data;
})



export const updateAtteFetch = createAsyncThunk("attendances/updateAtteFetch", async (atte) => {
  const r = await fetch(`/attendances/${atte.id}`, {
    method: 'PATCH',
    body: JSON.stringify({
      is_attended: atte.is_attended
    }),
    headers: {
      'Content-Type': 'application/json',
    }

  });
  const data = await r.json();
  return data;
})




const atteSlice = createSlice({
  name: 'attendances',
  initialState: {
    entities: [],
    atteToUpdate: {},
    status: "idle",
  },
  reducers: {
    atteAdded(state, action) {
      state.entities.push(action.payload);
    },
    atteUpdate(state, action) {
      const a = state.entities.find(at => {
        return at.id === action.payload.id
      })
      a.is_attended = action.payload.is_attended;

    }

  },
  extraReducers: {
    [fetchAtte.pending](state) {
      state.status = "loading";
    },
    [fetchAtte.fulfilled](state, action) {
      state.entities = action.payload;
      state.status = "idle";
    },
    [updateAtteFetch.rejected]: (state, action) => {
      console.log(action.payload)
      state.status = "error"
    }
  },
})

export const { atteAdded, atteUpdate } = atteSlice.actions;
export default atteSlice.reducer;
