import React from "react";
import { useSelector } from "react-redux";

export default function SlotPage(){

    const studentsArray = useSelector(state=>state.students)
    console.log(studentsArray)
    const disciplinesArray = useSelector(state=>state.disciplines)
    console.log(disciplinesArray)
    const slotsArray = useSelector(state=>state.slots)
    console.log(slotsArray)
    const attendancesArray = useSelector(state=>state.attendances)
    console.log(attendancesArray)
    const appointmentsArray = useSelector(state=>state.appointments)
    console.log(appointmentsArray)



    return(
        <div>list scheduled appoitments here-
            
            {studentsArray.map((student) => (
                <div>{student.name}#{student.id} 
                <img key = {student.id} src={student.pic} alt={student.name} />
                </div>
            
            ))}
             

        </div>
        
    )


}