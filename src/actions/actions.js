function fetchStudents(students) {
    return {
        type: "FETCH/STUDENTS",
        payload: students

    }

}

function fetchDisciplines(disciplines) {
    return {
        type: "FETCH/DISCIPLINES",
        payload: disciplines

    }

}





function fetchSlots(slots) {
    return {
        type: "FETCH/SLOTS",
        payload: slots

    }

}

function fetchAppointments(appointments) {
    return {
        type: "FETCH/APPOINTMENTS",
        payload: appointments

    }

}

function fetchAttendances(attendances) {
    return {
        type: "FETCH/ATTENDANCES",
        payload: attendances

    }

}

function choosenDisciplineId(disciplineId){
    return{
        type: "change/disciplineid",
        payload: disciplineId
    }
} 

function choosenSlotId(slotId){
    return{
        type: "change/slotId",
        payload: slotId
    }
} 


function loginUser(user) {
    return {
      type: "LOGIN/USER",
      payload: user,
    };
  }


  export { fetchSlots, 
    fetchAppointments, 
    fetchAttendances, 
    loginUser,
    fetchDisciplines,
    fetchStudents,
    choosenDisciplineId,
    choosenSlotId
};