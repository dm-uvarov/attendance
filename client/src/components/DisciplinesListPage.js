import React,{useEffect} from "react";
import {useSelector,useDispatch} from "react-redux"
import {useNavigate} from "react-router-dom"
import {fetchDisc,unsetDisc,setDisc} from "../features/discSlice"

export default function DisciplinesList(){
    const disciplinesArray = useSelector(state=>state.disciplines.entities);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const sDisc = useSelector(state=>state.disciplines.selectedDisc)

    function changePage(disc){
        dispatch(setDisc(disc))
        navigate(`/classes/${disc.id}`)
    }

    const showClasses = disciplinesArray.map( (c)=> {
        return(
        <div className="card" key= {c.id} onClick={(e)=>changePage(c)}>
            <p>{c.name} </p> 
            <img src={c.pic} />    
        </div> )
    })

    return(
        <div className="cards">
            {showClasses}
        </div>    
    )
}