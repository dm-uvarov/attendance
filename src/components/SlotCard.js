import React,{useEffect,useState} from "react";
import {useSelector,useDispatch} from "react-redux"
import { updateAttendance } from "../actions/actions";
// import {useNavigate} from "react-router-dom"

export default function SlotCard(){
    
    const [studentId , setStudentId] = useState("");
    const [atId , setAtId] = useState("");
    const [is_att , setIsAtt] = useState(false);
    const [att,setAtt] = useState([]);



    const ApArray = useSelector(state=>state.appointments.entinties)
    const selSlot = useSelector(state=>state.slots.selectedSlot)
   
    const dispatch = useDispatch();
    

    const aApnts = ApArray.filter(a=> {return a.slot_id === selSlot.id}  )
    console.log("filtered",aApnts)

    const updateAttendanceClick = (attId,is_at,apId,e) =>{
        
        
        setAtId(attId)
        setIsAtt(true)
        const updatedAttendaceObj = {
            is_attended: is_att
            }
        // at {id , ap_id, is_attended}
        console.log("at ID", atId)
        console.log("at boolen", is_att)
        console.log("from", attId)
        console.log("from is_at", is_at)

        fetch(`/attendances/${atId}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(updatedAttendaceObj)
        })
         
        .then(r=>r.json())
        .then(dispatch(updateAttendance({id: attId, is_attended: !is_at, appointment_id: apId})))
        


    }



    const arrApp = aApnts.map(ap=>{
        
    
        
        return (
            <div key ={ap.student.id} onClick = {(e)=>{updateAttendanceClick(ap.attendance.id,ap.attendance.is_attended,ap.id,e)}}> 
                <p>  {ap.student.name } {(ap.attendance.is_attended) ? 'was present' : 'not present'} </p>
               
                {/* <p>{s.discipline.name } </p> */}
             {/* <h5>{s.date } </h5>
             <p>starts at: {s.start } </p>
             <p>  ends at: {s.finish } </p> */}
            </div>

        )
    })

console.log('appointets',aApnts)

    return (
        <div> 
            <div>
                students submited on class:
                {arrApp}
            </div>
            <div>
                students marked as attended:
                
            </div>
            <div> 
                <button > submit attendance </button>

            </div>
        
        
        </div>


    )
}
