import React from 'react'

function Bai4() {
    return (
        <>
            <div class="col">
                <div class="row g-4 justify-content-center">
                    <CartItem duongDan = {'public/img/fruite-item-1.jpg'} ten={'Graps'}></CartItem>
                    <CartItem duongDan = {'public/img/fruite-item-2.jpg'} ten={'Graps'}></CartItem>
                    <CartItem duongDan = {'public/img/fruite-item-3.jpg'} ten={'Graps'}></CartItem>
                    <CartItem duongDan = {'public/img/fruite-item-4.jpg'} ten={'Graps'}></CartItem>
                </div>
            </div>
        </>
    )
}

function CartItem(props) {
    return (
        <div className="col-md-6 col-lg-6 col-xl-4">
            <div className="rounded position-relative fruite-item">
                <div className="fruite-img">
                    <img src={props.duongDan} className="img-fluid w-100 rounded-top" alt="" />
                </div>
                <div className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                    style={{ top: '10px', left: '10px' }}>{props.ten}</div>
                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                    <h4>{props.ten}</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                    <div className="d-flex justify-content-between flex-lg-wrap">
                        <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                        <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Bai4