import React from 'react'
import { Button } from '../cart/Cart.style'
import { Appcomponent } from '../home/Home.style'
// import { Again, Benifits, Details} from '../orderlist/Orderlist.style'
import {Again, Benifits, Details, Mrp,Dis,Price,Stock,Img1,Dash,GreatParent, Wrapcol ,Type, Wrapagain} from './Product.style'

const product = () => {
  return (
    <>
    <Appcomponent>
        <GreatParent>
        <Img1>
        <img src="https://imgs.search.brave.com/D1tV1upwtGOPZwieeBvLs4wyZPvxvzoAJysBILWrJgk/rs:fit:678:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5P/U2tCU21ERkh6MDFV/Q2M1UmFJT01nSGFG/TCZwaWQ9QXBp"></img>
        </Img1>
        <Dash>
            
        <Dis>
            81%
        </Dis>
       <Price>
            $56
        </Price>
        <Mrp>
            M.R.P: $78
        </Mrp>
        <Stock>In Stock</Stock>
        <div className="input">
            <input Type="number" placeholder='1'></input>
        </div>
        <Wrapcol>
        <Button>Add To Cart</Button>
        <Button>Buy Now</Button>
        </Wrapcol>
        </Dash>
        </GreatParent>
        <hr></hr>
        <Again>
            <div className="delivary">
                <img src="https://icons8.com/icon/487/delivery"></img>
                <div className="txt">Free Delivary</div>
            </div>
            <div className="pay">
                <img src='https://icons8.com/icon/34401/cash-in-hand'></img>
                <div className="payondel">Pay on Delivary</div>
            </div>
            <div className="return">
                <img src='https://icons8.com/icon/99471/return'></img>
                <div className="return">10 Days Returnable</div>
            </div>
        </Again>
        <hr></hr>
        <Details>
            Product details
        </Details>
        <Type>
            <div className="seller">Seller Name</div>
            <div className="writting">xdfdfmkfve</div>
        </Type>
        <Type>
            <div className="seller">Type</div>
            <div className="writting">jhgfdsa</div>
        </Type>
        <Type>
            <div className="seller">Yield Location</div>
            <div className="writting">ertyuio</div>
        </Type>
        <Type>
            <div className="seller">Benifits</div>
            <div className="writting">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates corrupti velit, repellat voluptate at laborum. Molestiae numquam provident doloremque non ullam reiciendis, fuga optio odit iure? Fugiat aperiam asperiores quaerat!</div>
            </Type>
       




    </Appcomponent>
    </>
  )
}

export default product
