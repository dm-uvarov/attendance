import React,{useEffect} from "react";
import {useSelector,useDispatch} from "react-redux"
import {useNavigate} from "react-router-dom"
import {choosenSlotId} from '../actions/actions'
import {fetchSlots,unsetSlot,setSlot} from "../features/slotsSlice"


// import {useNavigate} from "react-router-dom"

export default function DisciplineCard(){


    const navigate = useNavigate();
    const dispatch = useDispatch();

    // load state from state store
    const slotsArray = useSelector(state=>state.slots.entities)
    const sDisc = useSelector(state=>state.disciplines.selectedDisc)
    //  console.log("dispatched discipline id: ", sDisc.id)


    

    // 
    // const disciplineId = useSelector(state=>state.disciplineID)


    //
    const sSlot = useSelector(state=>state.slots.selectedSlot)



    // console.log(slotsArray)
    // console.log(sSlot)
    // let event = ""

    function changeSlotPage(selSlot){
        // console.log("id routenimber",selSlot.id)
        dispatch(setSlot(selSlot))
        // console.log("dispatched slot id: ", sSlot)
        navigate(`/slots/${selSlot.id}`)
        // setShosenDiscipline(idRouteNumber)
    }

    // useEffect(() => { 
    //     if (event){
    //         navigate(`/slots/${sSlot.id}`)
    //     } 
    // })

    const aSlots = slotsArray.filter(s=> {return s.discipline_id === sDisc.id}  ).map(s=>{
        return (
            <div key= {s.id} onClick = {()=>changeSlotPage(s)} > 
                <p>{sDisc.name } </p>
             <h5>{s.date } </h5>
             <p>starts at: {s.start } </p>
             <p>  ends at: {s.finish } </p>
            </div>

        )
    })



    // console.log("discipline", aSlots)

    return (
        <div> 
            <p> </p>
            {}
           {aSlots}
        </div>


    )
}