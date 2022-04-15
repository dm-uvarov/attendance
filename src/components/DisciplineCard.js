import React,{useEffect} from "react";
import {useSelector,useDispatch} from "react-redux"
import {useNavigate} from "react-router-dom"
import {choosenSlotId} from '../actions/actions'

// import {useNavigate} from "react-router-dom"

export default function DisciplineCard(){


    const navigate = useNavigate();
    const dispatch = useDispatch();

    const slotsArray = useSelector(state=>state.slots)
    const disciplineId = useSelector(state=>state.disciplineID)
    const s_id_state = useSelector(state=>state.slotID)
    console.log(slotsArray)
    console.log(s_id_state)
    let event = ""

    function changeSlotPage(e,idRouteNumber){
        console.log("id routenimber",idRouteNumber)
        dispatch(choosenSlotId(idRouteNumber))
        console.log("dispatched slot id: ", s_id_state)
        event = e
        navigate(`/slots/${idRouteNumber}`)
        // setShosenDiscipline(idRouteNumber)
    }

    useEffect(() => { 
        if (event){
            navigate(`/slots/${s_id_state}`)
        } 
    })

    const aSlots = slotsArray.filter(s=> {return s.discipline.id === disciplineId}  ).map(s=>{
        return (
            <div key= {s.id} onClick = {(e)=>{changeSlotPage(e,s.id)}} > 
                <p>{s.discipline.name } </p>
             <h5>{s.date } </h5>
             <p>starts at: {s.start } </p>
             <p>  ends at: {s.finish } </p>
            </div>

        )
    })



    console.log("discipline", aSlots)

    return (
        <div> 
            <p> </p>
            {}
           {aSlots}
        </div>


    )
}