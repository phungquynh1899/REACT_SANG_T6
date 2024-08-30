import React from 'react'

function Bai5(){
    
    let a1 = React.createElement('a',{target: "self", href: "https://itc.edu.vn/", title:"Trang chủ"},'Trang chủ');
    let a2 = React.createElement('a',{target: "self", href: "https://itc.edu.vn/", title:"Features"},'Features');
    let a3 = React.createElement('a',{target: "self", href: "https://itc.edu.vn/", title:"Contact"},'Contact');

    let myList = React.createElement('nav',{},[a1,a2,a3])
    
    return (
        <>{myList}</>
    )
}

export default Bai5