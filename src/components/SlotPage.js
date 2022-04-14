import React from "react";
import { useSelector } from "react-redux";

export default function SlotPage(){
    const slotsArray = useSelector(state=>state.slots)
    console.log(slotsArray)

    // add logic for displaing name of class here
    const showSlots = slotsArray.map( s=>{
        return(
            <div key={s.id}> 
                <h5>{s.discipline.name} </h5>
                <p>{s.date} </p>
                <p>{s.start} </p>
            </div>
        )
    })

    return(
        <div>list scheduled appoitments here-
            
            {showSlots}
             

        </div>
        
    )


}


// const attendancesArray = useSelector(state=>state.attendances)
// console.log(attendancesArray)
// const appointmentsArray = useSelector(state=>state.appointments)
// console.log(appointmentsArray)
// const studentsArray = useSelector(state=>state.students)
// console.log(studentsArray)
// {studentsArray.map((student) => (
//     <div>{student.name}#{student.id} 
//     <img key = {student.id} src={student.pic} alt={student.name} />
//     </div>

// ))}