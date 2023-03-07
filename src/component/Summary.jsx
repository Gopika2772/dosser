import React from 'react'
import { Appcomponent } from '../container/home/Home.style'
import { Flexwrap } from '../container/more/More.style'

const Summary = () => {
  return (
    <>
   <Appcomponent>
   <h1>
        Order Summary
    </h1>
    <Flexwrap>
        <div className="data">323</div>
        <div className="value">Total Orders</div>
    </Flexwrap>
   </Appcomponent>
    </>
  )
}

export default Summary
