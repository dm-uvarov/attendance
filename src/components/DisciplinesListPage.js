import React from "react";
import {useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"





export default function DisciplinesList({setShosenDiscipline}){

    const navigate = useNavigate();

    function changePage(idRouteNumber){

        console.log(idRouteNumber)
        navigate(`/classes/${idRouteNumber}`)
        setShosenDiscipline(idRouteNumber)
    }



    const disciplinesArray = useSelector(state=>state.disciplines)
    console.log(disciplinesArray)



    const showClasses = disciplinesArray.map( (c)=> {
        return(
        <div key= {c.id} onClick={(e)=>changePage(c.id)}>
            <p>{c.name} </p> 
            <img src={c.pic} />
            
        </div> )
    }
        )

    return(
        <div>
            {showClasses}
        </div>
        
    )


}