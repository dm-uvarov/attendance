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

    const updateAttendanceClick = (attId, is_at, apId, e) => {

        console.log("clicked")
        // setAtId(attId)
        // setIsAtt(true)
        // const updatedAttendaceObj = {
        //     is_attended: is_att
        //     }
        // // at {id , ap_id, is_attended}
        // console.log("at ID", atId)
        // console.log("at boolen", is_att)
        // console.log("from", attId)
        // console.log("from is_at", is_at)

        // fetch(`/attendances/${atId}`, {
        //     method: 'PATCH',
        //     headers: { 'Content-Type': 'application/json'},
        //     body: JSON.stringify(updatedAttendaceObj)
        // })

        // .then(r=>r.json())
        // .then(dispatch(updateAttendance({id: attId, is_attended: !is_at, appointment_id: apId})))



    }

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

    const sttudentsShow = subscribedStudents.map(student => {
        return (
            <div key={uuid()} >
                <StudentCard student={student}/>

            </div>




        )
    })

    //     return (

    //         <div key ={ap.student_id} onClick = {(e)=>{updateAttendanceClick(ap.attendance.id,ap.attendance.is_attended,ap.id,e)}}> 
    //             <p>  {ap.student.name } {(ap.attendance.is_attended) ? 'was present' : 'not present'} </p>

    //             {/* <p>{s.discipline.name } </p> */}
    //          {/* <h5>{s.date } </h5>
    //          <p>starts at: {s.start } </p>
    //          <p>  ends at: {s.finish } </p> */}
    //         </div>

    //     )
    // })

    return (
        <div>
            <div>
                <p>{filteredDicipline.name}</p>
                <img src={filteredDicipline.pic} />
                <br></br>
                scheduled date: {selSlot.date}
                <br></br>
                start at: {selSlot.start}
                <br></br>
                end at: {selSlot.start}
                <hr></hr>
                list of subscribed students
                {sttudentsShow}
            {/* <div>
                students marked as attended:
                
            </div>
            <div> 
                <button > submit attendance </button>

            </div> */}
            </div>


        </div>


    )
}
