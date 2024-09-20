import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './Pages/Home/Home'
import Shop from './Pages/Shop/Shop'
import Cart from './Pages/Cart/Cart'
import Checkout from './Pages/Checkout/Checkout'
import Contact from './Pages/Contact/Contact'
import ShopDetail from './Pages/ShopDetail/ShopDetail'
import Testimonial from './Pages/Testimonial/Testimonial'
import Error from './Pages/Error/Error'

import Layout from './Layout'

import LayoutAdmin from './LayoutAdmin'
import HomeOfAdmin from './Pages/Admin/HomeOfAdmin'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home/>} />
          <Route path="shop" element={<Shop />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="contact" element={<Contact />} />
          <Route path="shopDetail" element={<ShopDetail />} />
          < Route path="testimonial" element={< Testimonial />} />
          {/* bắt tất cả các link còn lại và báo lỗi  */}
          <Route path="/*" element={<Error />} />
        </Route>
        <Route path="/admin/" element={<LayoutAdmin/>}>
          <Route index element={<HomeOfAdmin/>}></Route>

        </Route>

      </Routes >
    </BrowserRouter >
  )
}

export default App
