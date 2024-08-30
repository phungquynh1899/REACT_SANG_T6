import React from 'react'

function Bai1(){
    //không dùng jsx
    let myTag = React.createElement("h1",{}, 'Chào mừng đến với React');
    return (
        <>
            {myTag}
        </>
    )
}

export default Bai1