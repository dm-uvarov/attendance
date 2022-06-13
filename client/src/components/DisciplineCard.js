import React,{useEffect} from "react";
import {useSelector,useDispatch} from "react-redux"
import {useNavigate} from "react-router-dom"
import {fetchSlots,unsetSlot,setSlot} from "../features/slotsSlice"

export default function DisciplineCard(){


    const navigate = useNavigate();
    const dispatch = useDispatch();

    // load state from state store
    const slotsArray = useSelector(state=>state.slots.entities)
    const sDisc = useSelector(state=>state.disciplines.selectedDisc)
    const sSlot = useSelector(state=>state.slots.selectedSlot)
    
    function changeSlotPage(selSlot){
        dispatch(setSlot(selSlot))
        navigate(`/slots/${selSlot.id}`)
    }



    const aSlots = slotsArray.filter(s=> {return s.discipline_id === sDisc.id}  ).map(s=>{
        return (
            <div className="card" 
                 key= {s.id} 
                 onClick = {()=>changeSlotPage(s)} 
                >
                <h4>{sDisc.name } </h4>
                <h5> {s.date } </h5>
                <p>starts at: {s.start } </p>
                <p>  ends at: {s.finish } </p>    
            </div>

        )
    })


    return (
        <div className="cards"> 
           {aSlots}
        </div>
    )
}