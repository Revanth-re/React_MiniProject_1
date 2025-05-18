import React, { useEffect, useState } from 'react'
import axios from "axios"
import Product from './Product/Product'
import "./Products.css"
const Products = ({ArrayDetails}) => {


  return (
    <div className='MainDiv'>
        {ArrayDetails.map((item)=>{
            // console.log(item);
            
            return(
                <>
            
  <Product rawData={item}></Product>                </>
            )
        })}
      
    </div>
  )
}

export default Products
