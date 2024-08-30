import React from 'react'

function Bai4(){
    
    let a1 = React.createElement('a',{target: "self", href: "https://itc.edu.vn/tu-van-huong-nghiep", title:"Tư vấn hướng nghiệp"},'Tư vấn hướng nghiệp');
    let a2 = React.createElement('a',{target: "self", href: "https://inside.itc.edu.vn/Secure/Login.aspx?returnurl=%2f", title:"Cổng thông tin nhà trường"},'Cổng thông tin nhà trường');
    let a3 = React.createElement('a',{target: "self", href: "https://itc.edu.vn/tuyen-dung", title:"Tuyển dụng"},'Tuyển dụng');
    let a4 = React.createElement('a',{target: "self", href: "https://itc.edu.vn/lien-he", title:"Liên hệ"},'Liên hệ');
    let li1 = React.createElement('li',{},[a1]);
    let li2 = React.createElement('li',{},[a2]);
    let li3 = React.createElement('li',{},[a3]);
    let li4 = React.createElement('li',{},[a4]);
    let myList = React.createElement('ul',{},[li1, li2, li3, li4])
    
    return (
        <>{myList}</>
    )
}

export default Bai4