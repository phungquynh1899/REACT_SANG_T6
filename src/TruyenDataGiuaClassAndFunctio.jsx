import React from 'react'
//CÁCH TRUYỀN DƯ LIẸU TỪ FUNCTIONAL COMPONENT SANG CLASS COMPONENT
function Bai3(){
    let data = [{"ten": "Home"}, {"ten": "Shop"}, {"ten": "Shop details"}, {"ten": "Home"}]
    return (
        <>
        <Comp1 d1 = {data}></Comp1>
        </>
    )
}

class SuDungProps extends React.Component{
    constructor(){
        super();
    }

    render(){
        return (
            <>{this.props.d1.map(i=><h1>{i.ten}</h1>)}
            </>
            

        )
    }
}

export default Bai3