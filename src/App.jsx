import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'

function App() {
  //không sử dụng jsx, nhược điểm là muốn tạo thẻ con của thẻ h1 rất dài dòng
  let myTag = React.createElement('h1', { id: 'content' }, "Đây la nội dung của thẻ H1");
  let myTag2 = React.createElement('img', { src: 'https://cdn.pixabay.com/photo/2016/04/13/14/27/google-chrome-1326908_1280.png'});
  return (
    <>
     { myTag2 }
    </>
  )
}

export default App
