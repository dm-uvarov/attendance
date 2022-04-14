import React from "react";
import {useSelector} from "react-redux"
// import {useNavigate} from "react-router-dom"

export default function DisciplineCard({shosenDiscipline}){





    const slotsArray = useSelector(state=>state.slots)

    const aSlots = slotsArray.filter(s=> {return s.discipline.id === shosenDiscipline}  ).map(s=>{
        return (
            <div > 
                <p>{s.discipline.name } </p>
             <p>{s.date } </p>
             <p>{s.start } </p>
             
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