import React,{useEffect} from "react";
import { useSelector, useDispatch } from "react-redux"
import {atteUpdate,updateAtteFetch } from "../features/atteSlice"

export default function StudentCard({student}){

  const dispatch = useDispatch();

 
  const appointmentsArray = useSelector(state => state.appointments.entities)
  const attendancesArray = useSelector(state => state.attendances.entities)
  const appointment = appointmentsArray.find(ap => ap.student_id === student.id);
  const attendance = attendancesArray.find(at=> at.appointment_id === appointment.id)


  function toggleAttendance(e){
    e.preventDefault();
    console.log("was",attendance)
    let c_a = { 
      id: attendance.id, 
      is_attended: !attendance.is_attended, 
      appointment_id: attendance.appointment_id
    }
    c_a.is_attended = !(attendance.is_attended)
    console.log("now should be",c_a)
    
    dispatch(atteUpdate(c_a))
    dispatch(updateAtteFetch(c_a))
    
    
    // dispatch(updateAtte(c_a))
  }




  return (
    <div onClick={e=>toggleAttendance(e)}> 
      <img src={student.pic} alt="student picture" />
      <p> {student.name}</p>
      presence <span > {attendance.is_attended ? "✅ ":"❌ "}   </span> 
    </div>
  )
}


//<img src="http://example.com/non-existent-image.jpg" onerror="this.onerror=null;this.src='http://example.com/existent-image.jpg';" />