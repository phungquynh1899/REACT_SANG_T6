import React, { useState } from "react";

function GetForm(){
    //tạo biến chứa dữ liệu
    const [data, setData] = useState({});

    //viết hàm handle sự kiện và lấy dữ liệu về
    let ganDuLieu = (e)=>{
        let n = e.target.name;
        let v = e.target.value;
        //gán cho data = {tk: 'giá trị nhập vào ô tk'}
        // setData({[n]:v}); 
        setData(i => ( { ...i, [n]:v } ) );
        // i là gì? i => () là gì ? 
        // setData(i => (i, {[n]:v}));
         //gán toàn bộ các cặp k:v từ đầu cho đến i, [n]:v là cặp mới sẽ ghi đè lên cặp cũ
        console.log(data);
    }

    return (
        <>
            <form>
                <div>
                    Tên truy cập: 
                    <input xyz="xyz" name="tk" onChange={ganDuLieu}></input>
                    <br></br>
                    Mật khẩu: 
                    <input name="mk"></input>
                    <br></br>
                    <button type="submit">Đăng nhập</button>

                </div>
            </form>
        </>
    )
}

export default GetForm

//giống oop, viết class component sẽ hiểu under the hood của functional component 
// class GetForm2 extends React.Component{
//     constructor(props){
//         super();
//         this.state = {}
//     }

//     setData 
//     render(){
//         return (
//             <>
//                 <div>
//                     Tên truy cập: 
//                     <input name="tk" onChange={ganDuLieu}></input>
//                     <br></br>
//                     Mật khẩu: 
//                     <input name="mk"></input>
//                     <br></br>
//                     <button type="submit">Đăng nhập</button>

//                 </div>
//             </>
//         )
//     }
// }