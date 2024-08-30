import React from "react"
import Bai1B from "./Bai1B"
function Bai1A() {
    return (
        <>
            <div className="navbar-nav mx-auto">

                <a href="index.html" className="nav-item nav-link active">Home</a> //viết functional component Xđại diện cho hàm hiển thi thẻ này

                <a href="shop.html" className="nav-item nav-link">Shop</a>

                <a href="shop-detail.html" className="nav-item nav-link">Shop Detail</a>

                <div className="nav-item dropdown">

                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>

                   <Bai1B></Bai1B>

                </div>

                <a href="contact.html" className="nav-item nav-link">Contact</a>

            </div>
        </>
    )
}

export default Bai1A