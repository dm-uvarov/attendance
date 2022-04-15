import React from "react";
import {useSelector,useDispatch} from "react-redux"
// import {useNavigate} from "react-router-dom"

export default function DisciplineCard(){




    const slotsArray = useSelector(state=>state.slots)
    const disciplineId = useSelector(state=>state.disciplineID)

    const aSlots = slotsArray.filter(s=> {return s.discipline.id === disciplineId}  ).map(s=>{
        return (
            <div > 
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