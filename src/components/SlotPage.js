import React from "react";
import { useSelector } from "react-redux";

export default function SlotPage(){

    const studentsArray = useSelector(state=>state.students)
    console.log(studentsArray)
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