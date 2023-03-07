import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Appcomponent, Most,Container,Price } from '../container/home/Home.style'
import { PopularProducts } from "../data";

const Mostordered = () => {
  const [count,setCount]=useState();

  const handleClick = () =>{
    setCount(()=>{
      count=count+1;
      console.log(count);
    })

  }
  return (
    <>
     {/* {PopularProducts.map((item) => (
        <Mostordered item = {item} key={item.id}/>
    ))} */}
    <Appcomponent>
    {/* <Most>
        <h1>Most Ordered</h1>
        <h2 color='#DFF7B3'>Show All</h2>
    </Most>
    <Container>
      <image src={item.img}/>
      <title>{item.title}</title>
      <price>
        <div className="rate">$10 per kg</div>
        <button>Add To Cart</button>
      </price>
    </Container> */}

    <Most>
        <h1>Most Ordered</h1>
        {/* <h2 color='#DFF7B3'>Show All</h2> */}
        <Link to="">Show All</Link>
    </Most>
    <Container>
      <div className="image">
        <img src='https://imgs.search.brave.com/D1tV1upwtGOPZwieeBvLs4wyZPvxvzoAJysBILWrJgk/rs:fit:678:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5P/U2tCU21ERkh6MDFV/Q2M1UmFJT01nSGFG/TCZwaWQ9QXBp'></img>
      </div>

      {/* <div className="title">Onion</div> */}
      <Price>
      <div className="title">Onion</div>

        <div className="rate">$10 per kg</div>
        {/* <div className="button" onClick={handleClick}>Add To Cart</div> */}
        <button className='button'>Add To Cart</button>
      </Price>
    </Container>
    
    </Appcomponent>
    
    </>
  )
}

export default Mostordered
