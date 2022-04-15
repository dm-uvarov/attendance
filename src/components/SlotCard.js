import React,{useEffect} from "react";
import {useSelector,useDispatch} from "react-redux"
// import {useNavigate} from "react-router-dom"

export default function SlotCard(){
    

    

    const ApArray = useSelector(state=>state.appointments)
    const slotId = useSelector(state=>state.slotID)
    console.log("slotid",slotId)
    const dispatch = useDispatch();
    console.log('all appointets',ApArray)

    const aApnts = ApArray.filter(a=> {return a.slot_id === slotId}  )
    console.log("filtered",aApnts)

    const arrApp = aApnts.map(ap=>{
        
        
        
        return (
            <div key ={ap.student.id} > 
                <p>{ap.student.name } {(ap.attendance.is_attended) ? 'was present' : 'not present'} </p>
               
                {/* <p>{s.discipline.name } </p> */}
             {/* <h5>{s.date } </h5>
             <p>starts at: {s.start } </p>
             <p>  ends at: {s.finish } </p> */}
            </div>

        )
    })

console.log('appointets',aApnts)

    return (
        <div> here
            {arrApp}
        </div>
    )
}
