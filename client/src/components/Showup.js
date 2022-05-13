import React from "react";

export default function Showup(){

    return(
        <div>Show up
            <div> students to be presented on class/ remaining students:
                <StudentList />
            </div>
            <div> marked students
                <StudentList />
            </div>
            <div> report for current class here 
                <Report />
            </div>
            
        </div>
        
    )


}