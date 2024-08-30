import React from 'react'

class SuDungProps extends React.Component{
    constructor(){
        super();
    }

    render(){
        return (
            // CÁCH LƯU VÀO PROPS OBJECT 
            <Comp1 name={1} bien2 = {"so2"}></Comp1>

        )
    }
}

export default SuDungProps;

function Comp1(props){
    //CÁCH LẤY DỮ LIỆU TỪ PROPS OBJECT
    return (
        <>
            noi dung được truyền bào từ props {props.name} và {props.bien2}
        </>
    )
}

//sử dụng deconstructor object , chỉ dùng được functional component nhưng có giới hạn số lượng biến truyền vào
// function Comp2({name, b2}){
//     return (
//         <>
//             noi dung được truyền bào từ props {name} và {bien2}
//         </>
//     )
// }

