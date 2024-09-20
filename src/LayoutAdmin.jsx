import React from "react";
import { Outlet } from "react-router-dom";

function LayoutAdmin(){
    return (
        <>
     
            <Outlet></Outlet>
          
        </>
    )
}

export default LayoutAdmin;