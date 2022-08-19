import React from 'react'
import Sidebar from './components/sidebar/Sidebar'
import Topbar from './components/topbar/Topbar'
import "./App.css"
import Home from './Pages/home/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import UserList from './Pages/userList/UserList'
import User from './Pages/user/User'
import NewUser from './Pages/newUser/NewUser'
import ProductList from './Pages/productList/ProductList'
import Product from './Pages/product/Product'
import NewProduct from './Pages/newProduct/NewProduct'


const App = () => {
  return (
    <BrowserRouter>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path='/' element={< Home />} />
          <Route path='/users' element={< UserList />} />
          <Route path='/user/:userId' element={< User />} />
          <Route path='/newUser' element={< NewUser />} />

          <Route path='/products' element={< ProductList />} />
          <Route path='/product/:productId' element={< Product />} />
          <Route path='/newProduct' element={< NewProduct />} />


        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
