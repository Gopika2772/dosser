import React from 'react'
import { Appcomponent } from '../container/home/Home.style'
import { Orderlist,Date1 } from '../container/orderlist/Orderlist.style'

const Orders = () => {
  return (
    <Appcomponent>
        <Date1>
         15 Oct, 2021
        </Date1>
        <Orderlist>
            {/* <div className="image">
                <img src="https://imgs.search.brave.com/D1tV1upwtGOPZwieeBvLs4wyZPvxvzoAJysBILWrJgk/rs:fit:678:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5P/U2tCU21ERkh6MDFV/Q2M1UmFJT01nSGFG/TCZwaWQ9QXBp"></img>
            </div> */}
            <div className="tv">
                <div className="left1">
                <img src="https://imgs.search.brave.com/D1tV1upwtGOPZwieeBvLs4wyZPvxvzoAJysBILWrJgk/rs:fit:678:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5P/U2tCU21ERkh6MDFV/Q2M1UmFJT01nSGFG/TCZwaWQ9QXBp"></img>
                </div>
                <div className="empty">
                <div className="title">Onions</div>
                <div className="tvalue">$10 per kg</div>
                </div>
            </div>
            <div className="dv">
                <div className="delivary">Delivered</div>
                <div className="dvalue">$80 , 8 kgs</div>
                <div className="button">Cancell Order</div>
            </div>
            
        </Orderlist>
        
    </Appcomponent>
  )
}

export default Orders
