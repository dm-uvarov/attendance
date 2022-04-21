import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { updateAttendance } from "../actions/actions";
// import {useNavigate} from "react-router-dom"
import { v4 as uuid } from "uuid";
import StudentCard from "./StudentCard";

export default function SlotCard() {

    // const [studentId , setStudentId] = useState("");
    // const [atId , setAtId] = useState("");
    // const [is_att , setIsAtt] = useState(false);
    // const [att,setAtt] = useState([]);



    const appointmentsArray = useSelector(state => state.appointments.entities)
    const selSlot = useSelector(state => state.slots.selectedSlot)
    const disciplines = useSelector(state => state.disciplines.entities)
    const attendancesArray = useSelector(state => state.attendances.entities)

    console.log('allatt', attendancesArray)
    console.log(selSlot)
    console.log(disciplines)
    const dispatch = useDispatch();
    const filteredDicipline = disciplines.find(disc => {
        return (
            disc.id === selSlot.discipline_id
        )
    })

    console.log(filteredDicipline)
    const filteredAppArray = appointmentsArray.filter(a => { return a.slot_id === selSlot.id })
    console.log("filtered", filteredAppArray)

    const allStudents = useSelector(state => state.students.entities)

    const relatedAttendances = filteredAppArray.map(ap => {
        return (
            attendancesArray.find(att => {
                return (
                    att.appointment_id === ap.id
                )
            })
            //    [app1:=> {att,stu}, app2: {att2,stu2}]
        )
    })

    const subscribedStudents = filteredAppArray.map(ap => {
        return (
            allStudents.find(stud => { return stud.id === ap.student_id })
        )
    });

    console.log(subscribedStudents)
    console.log(relatedAttendances)

    const studentsShow = subscribedStudents.map(student => {
        return (
            <div key={uuid()} className="card" >
                <StudentCard student={student} />

            </div>




        )
    })



    return (
        <div>
            <div>
                <p >{filteredDicipline.name}</p>
                <img src={filteredDicipline.pic} />
                <br></br>
                <i> <strong>Scheduled date:</strong> {selSlot.date} </i>
                <br></br>
                Start at: {selSlot.start}
                <br></br>
                End at: {selSlot.finish}
                <hr></hr>
                <strong>List of subscribed students</strong>
                <div className="cards"> 
                {studentsShow}
                </div>
            </div>


        </div>


    )
}
