import { PopularProducts } from "../data";
import React from 'react'
import Mostordered from "./Mostordered";

const Products = () => {
  return (
    <>
    {PopularProducts.map((item) => (
        <Mostordered item = {item} key={item.id}/>
    ))}
    </>
    
  )
}

export default Products
