import React,{useEffect} from "react";
import {useSelector,useDispatch} from "react-redux"
import {useNavigate} from "react-router-dom"
import {setSlot} from "../features/slotsSlice"
import {setDisc} from "../features/discSlice"
// import { Card } from "semantic-ui-react";

export default function SlotPage(){

    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const slotsArray = useSelector(state=>state.slots.entities)
    const discArray = useSelector(state=>state.disciplines.entities)

    // add logic for displaing name of class here
    const sSlot = useSelector(state=>state.slots.selectedSlot)

    function changeSlotPage(selSlot,selectDisc){
        // console.log("id routenimber",selSlot.id)
        console.log("slot",selSlot)
        dispatch(setDisc(selectDisc))
        dispatch(setSlot(selSlot))
        // console.log("dispatched slot id: ", sSlot)
        navigate(`/slots/${selSlot.id}`)
        // setShosenDiscipline(idRouteNumber)
        console.log(selSlot)
    }

    const disciplineNameofSlot = (slot) =>{
        const fDisc = discArray.find((disc)=> {return disc.id === slot.discipline_id})
        return fDisc
    }

    const showSlots = slotsArray.map( s=>{
        return(
            <div className="card" key={s.id} onClick = {(e)=>changeSlotPage(s,disciplineNameofSlot(s))}/*onClick = {changeSlotPage(s.id)}*/> 
                <h4>{disciplineNameofSlot(s).name} </h4>
                <h5>{s.date } </h5>
                <p>starts at: {s.start } </p>
                <p>  ends at: {s.finish } </p>
            </div>
        )
    })

    return(
        <div className="cards"> 
            
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