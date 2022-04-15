import React,{useEffect} from "react";
import {useSelector,useDispatch} from "react-redux"
import {useNavigate} from "react-router-dom"
import {choosenSlotId} from '../actions/actions'

export default function SlotPage(){

    
    // const navigate = useNavigate();
    // const dispatch = useDispatch();
    const slotsArray = useSelector(state=>state.slots)
    // const s_id_state = useSelector(state=>state.slotID)
    console.log(slotsArray)
    // console.log(s_id_state)
    let event = ""

    // function changeSlotPage(e,idRouteNumber){
    //     console.log("id routenimber",idRouteNumber)
    //     dispatch(choosenSlotId(idRouteNumber))
    //     console.log("dispatched slot id: ", s_id_state)
    //     event = e
    //     navigate(`/slots/${idRouteNumber}`)
    //     // setShosenDiscipline(idRouteNumber)
    // }

    // useEffect(() => { 
        
    //     if (event){
    //         navigate(`/slots/${s_id_state}`)
    //     } else if(s_id_state){
    //         navigate(`/slots`)
    //     }
    // })

    // add logic for displaing name of class here
    const showSlots = slotsArray.map( s=>{
        return(
            <div key={s.id} /*onClick = {changeSlotPage(s.id)}*/> 
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