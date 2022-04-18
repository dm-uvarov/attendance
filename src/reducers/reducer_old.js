import { combineReducers } from "redux";

const disciplinesReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH/DISCIPLINES":
      return [...action.payload];
    default:
      return state;
  }
};

const disciplineIdReducer = (state = [], action) => {
  switch (action.type) {
    case "change/disciplineid":
      return action.payload;
    default:
      return state;
  }
};

const slotIdReducer = (state = [], action) => {
  switch (action.type) {
    case "change/slotId":
      return action.payload;
    default:
      return state;
  }
};



const studentsReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH/STUDENTS":
      return [...action.payload];
    default:
      return state;
  }
};

const slotsReducer = (state = [], action) => {
    switch (action.type) {
      case "FETCH/SLOTS":
        return [...action.payload];
      default:
        return state;
    }
  };

  const appointmentsReducer = (state = [], action) => {
    switch (action.type) {
      case "FETCH/APPOINTMENTS":
        return [...action.payload];
      default:
        return state;
    }
  };

  const attendancesReducer = (state = [], action) => {
    switch (action.type) {
      case "FETCH/ATTENDANCES":
        return [...action.payload];
      case "UPDATE/attendance":
        return state.map((attendance)=>{
          if (attendance.id !== action.payload.id){
            return attendance;

          }
          return action.payload;
        });
      default:
        return state;
    }
  };

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return action.payload;
    default:
      return state;
  }
};

// root reducer
const rootReducer = combineReducers({
  disciplines:      disciplinesReducer,
  students:         studentsReducer,
  slots:            slotsReducer,
  appointments:     appointmentsReducer,
  attendances:      attendancesReducer,
  user:             userReducer,
  disciplineID:       disciplineIdReducer,
  slotID:           slotIdReducer
});

export default rootReducer;



// adds new things to old state, specifically add guide case
//  switch statement takes in action and if the type is "ADD_GUIDE" it will run that case (guide reducer function will always run)


// fetchSlots, fetchAppointments, fetchAttendances, loginUser,fetchDisciplines,fetchStudents