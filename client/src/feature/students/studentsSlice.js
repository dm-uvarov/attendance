import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchStudents = createAsyncThunk("students/fetchStudents", () => {
  // return a Promise containing the data we want
  return fetch("http://localhost:3000/students")
    .then((response) => response.json())
    .then(console.log);
});

const studentsSlice = createSlice({
  name: "students",
  initialState: {
    entities: [], // array of ctudents
    status: "idle", // loading state
  },
  reducers: {
    studentAdded(state, action) {
      // using createSlice lets us mutate state!
      state.entities.push(action.payload);
    },
    studentUpdated(state, action) {
      const student = state.entities.find((student) => student.id === action.payload.id);
      student.url = action.payload.url;
    },
  },
  extraReducers: {
    // handle async actions: pending, fulfilled, rejected (for errors)
    [fetchStudents.pending](state) {
      state.status = "loading";
    },
    [fetchStudents.fulfilled](state, action) {
      state.entities = action.payload;
      state.status = "idle";
    },
  },
});

export const { studentAdded, studentUpdated } = studentsSlice.actions;

export default studentsSlice.reducer;