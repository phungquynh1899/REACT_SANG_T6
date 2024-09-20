import React from "react";
import { Outlet } from "react-router-dom";
import Header from './Pages/Particals/Header'
import Footer from './Pages/Particals/Footer'
function Layout(){
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    )
}

export default Layout;