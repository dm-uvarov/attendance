import React,{useEffect} from "react";
import {useSelector,useDispatch} from "react-redux"
import {useNavigate} from "react-router-dom"
// import {choosenDisciplineId} from '../actions/actions'
import {fetchDisc,unsetDisc,setDisc} from "../features/discSlice"





export default function DisciplinesList(){
    const disciplinesArray = useSelector(state=>state.disciplines.entities);
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const sDisc = useSelector(state=>state.disciplines.selectedDisc)

    function changePage(disc){
        dispatch(setDisc(disc))
        // console.log("dispatched discipline id: ", sDisc.id)
        navigate(`/classes/${disc.id}`)
        // console.log(c.id)
    }



    
    // console.log(disciplinesArray)



    const showClasses = disciplinesArray.map( (c)=> {
        return(
        <div className="card" key= {c.id} onClick={(e)=>changePage(c)}>
            <p>{c.name} </p> 
            <img src={c.pic} />
            
        </div> )
    }
        )

    return(
        <div className="cards">
            {showClasses}
        </div>
        
    )


}