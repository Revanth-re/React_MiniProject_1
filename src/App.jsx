import React from 'react'
import { useState,useEffect } from 'react'
import {Routes,Route} from "react-router-dom"
import Cart from './Components/NavbarSection/CartSection/Cart'
import Fav from './Components/NavbarSection/FavSection/Fav'
import Products from './Components/Products/Products'
import NavbarSection from './Components/NavbarSection/Navbar'
import ProductDetails from './Components/Products/ProductDetails/ProductDetails'
import axios from 'axios'
import Home from './Components/NavbarSection/Home'
import PageNotFound from './Components/NavbarSection/PageNotFound'
import "./App.css"
const App = () => {
  const [ProductsData,setProductsData]=useState([])
  // const [Catdata,setCatData]=useState("hello")
      useEffect(()=>{
        let url="https://fakestoreapi.in/api/products"

      

        
          axios.get(url).then((item)=>{
      
          
              setProductsData(item.data.products)


              
          })

      },[])
      

     
      
  return (
    <div>

<NavbarSection></NavbarSection>
{/* <button onClick={()=>setCatData("audio")}>Audio</button> */}
      <Routes>

        <Route path='/Cart' element={<Cart></Cart>}></Route>
 <Route path='/FavSection' element={<Fav></Fav>}></Route>
<Route path='/products' element={<Products ArrayDetails={ProductsData} />}></Route>
<Route path='/products/:id' element={<ProductDetails MainArray={ProductsData}  />}></Route>
<Route path='*'  element={<PageNotFound/>} ></Route>
<Route path='/' element={<Home/>}></Route>

      </Routes>
    </div>
  )
}

export default App
