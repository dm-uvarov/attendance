import React from "react";
// # uniq id generating
// use the uuid library to generate a unique ID for our books
// like // const book = { ...formData, id: uuid() };
import { v4 as uuid } from "uuid";

function SideNav(){
return (
    <div className="sidebar">
        <Link>disciplines</Link>
        <Link>schedule</Link>
        <Link>show up</Link>
        <Link>logout</Link>
    </div>
 );
};
export default SideNav;

