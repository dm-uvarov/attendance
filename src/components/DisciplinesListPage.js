import React from "react";
import {useSelector,useDispatch} from "react-redux"
import {useNavigate} from "react-router-dom"
import {choosenDisciplineId} from '../actions/actions'





export default function DisciplinesList(){

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const d_id_state = useSelector(state=>state.disciplineID)

    function changePage(idRouteNumber){
      
        dispatch(choosenDisciplineId(idRouteNumber))
        console.log("dispatched discipline id: ", d_id_state)
        console.log(idRouteNumber)
        navigate(`/classes/${idRouteNumber}`)
        // setShosenDiscipline(idRouteNumber)
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