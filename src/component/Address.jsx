import React from "react";
import { Appcomponent } from "../container/home/Home.style";
import { Centre, Left, Right, Wrap } from "../container/final/Final.style";

function Address() {
  return (
    <>
      <Appcomponent>
        <Centre>Check Out Details</Centre>
        <Wrap>
          <div className="left">
            <img src="https://imgs.search.brave.com/D1tV1upwtGOPZwieeBvLs4wyZPvxvzoAJysBILWrJgk/rs:fit:678:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5P/U2tCU21ERkh6MDFV/Q2M1UmFJT01nSGFG/TCZwaWQ9QXBp"></img>
          </div>
          <div className="right">
            <h1>Onion</h1>
            <h1>$4 </h1>
            {/* <h1 style="color:gray;">4 kgs</h1> */}
          </div>
        </Wrap>
        <hr></hr>
        <Wrap>
          <Left>Deliver to</Left>
          <Right>
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="name" id="address" />
            <label htmlFor="address">Address</label>
            <textarea name="address" id="address" cols="30" rows="5"></textarea>
          </Right>
        </Wrap>
        <Wrap>
          <Left>Estimated Delivary</Left>
          <Right>
            <h1>15 Oct 2023</h1>
          </Right>
        </Wrap>
        <hr></hr>
      </Appcomponent>
    </>
  );
}

export default Address;
