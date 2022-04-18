import { configureStore } from "@reduxjs/toolkit";

import discReducer          from "../features/discSlice"
import studReducer          from "../features/studSlice"
import slotsReducer         from "../features/slotsSlice"
import appoReducer          from "../features/appoSlice"
import atteReducer          from "../features/atteSlice"
// import userReducer          from "./features/userSlice"

const store = configureStore({
  reducer: {
    // for load all the data
    disciplines:      discReducer,
    students:         studReducer,
    slots:            slotsReducer,
    appointments:     appoReducer,
    attendances:      atteReducer,
    // tracing chosen entities from page
    // sDiscipline:      sDiscReducer,
    // sStudent:         sStudentReducer,
    // sSlot:            slotReducer,
    // sAppointment:     appointmentReducer,
    // sAttendance:      attendanceReducer,
    // //auth
    // user:             userReducer,
  }
});

export default store;