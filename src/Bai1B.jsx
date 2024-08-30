import React from "react"

class Bai1B extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div className="dropdown-menu m-0 bg-secondary rounded-0">

            <a href="cart.html" className="dropdown-item">Cart</a> //dùng hàm X để true thì hiển thị thẻ a ngoài, false thì hiển thị thẻ a trong

            <a href="chackout.html" className="dropdown-item">Checkout</a>

            <a href="testimonial.html" className="dropdown-item">Testimonial</a>

            <a href="404.html" className="dropdown-item">404 Page</a>

        </div>
        );
    }
}
export default Bai1B