import React from "react"

function Bai2() {
    return (
        <>
            <div className="navbar-nav mx-auto">
                <Menu luachon={true} tenThe={"Home"}></Menu>
                <Menu luachon={true} tenThe={"Shop"}></Menu>
                <Menu luachon={true} tenThe={"Shop detail"}></Menu>
                <div className="nav-item dropdown">
                    <Menu luachon={false} tenThe={"Cart"}></Menu>
                    <Menu luachon={false} tenThe={"Checkout"}></Menu>
                    <Menu luachon={false} tenThe={"Testimonial"}></Menu>
                    <Menu luachon={false} tenThe={"404 error"}></Menu>
                </div>
                <Menu luachon={true} tenThe={"Contact"}></Menu>
            </div>
        </>
    )
}


function Menu(props){
    if(props.luachon == true){
        return (<a href="index.html" className="nav-item nav-link active">{props.tenThe}</a>);
    }
    else {
        return ( <a href="cart.html" className="dropdown-item">{props.tenThe}</a>)
    }
}

export default Bai2