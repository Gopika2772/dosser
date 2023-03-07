import React from 'react'
import { Appcomponent } from '../container/home/Home.style'
import { Button, Cartwrapper,Miniwrapper, Whole ,Save} from '../container/cart/Cart.style'


const Subtotal = () => {
  return (
    <>
    <Appcomponent>
      <Save>Subtotal $50,0000</Save>
      <Button>Proceed to Buy </Button>
      <hr/>
      <Whole>
      <Cartwrapper back="https://imgs.search.brave.com/D1tV1upwtGOPZwieeBvLs4wyZPvxvzoAJysBILWrJgk/rs:fit:678:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5P/U2tCU21ERkh6MDFV/Q2M1UmFJT01nSGFG/TCZwaWQ9QXBp">
        <div className="left"></div>
        <div className="right">
          <h1>Onion</h1>
          <h2>$27</h2>
          <h2 style={{color:"gray"}}>MRP $56</h2>
          <Miniwrapper>
          {/* <div className="number"></div> */}
          <div className="del">Delete</div>
          <div className="save">save for later</div>

        </Miniwrapper>
        </div>
        </Cartwrapper>
        {/* <Miniwrapper>
          <div className="number"></div>
          <div className="del">Delete</div>
          <div className="save">save for later</div>

        </Miniwrapper> */}
      </Whole>
      <hr/>
      {/* <h1>Save For Later</h1> */}
      <Save>Save For Later</Save>
      <hr/>
      <Whole>
      <Cartwrapper back="https://imgs.search.brave.com/WNgGRL6v9xj_b9WNMAue-ZQjKshVEMvwh_bhb0ox7FA/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5f/R0NiWkxXT2pRZ2hp/c2hZa21pQTRBSGFF/byZwaWQ9QXBp">
        <div className="left" back="https://imgs.search.brave.com/D1tV1upwtGOPZwieeBvLs4wyZPvxvzoAJysBILWrJgk/rs:fit:678:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5P/U2tCU21ERkh6MDFV/Q2M1UmFJT01nSGFG/TCZwaWQ9QXBp"></div>
        <div className="right">
          <h1>Braccoli</h1>
          <h2>$50</h2>
          <h2 style={{color:"gray"}}>MRP $56</h2>
          <Miniwrapper>
          {/* <div className="number"></div> */}
          <div className="del">delete</div>
          <div className="save">save for later</div>

        </Miniwrapper>
        </div>
        </Cartwrapper>
        {/* <Miniwrapper>
          <div className="number"></div>
          <div className="del">delete</div>
          <div className="save">save for later</div>

        </Miniwrapper> */}
      </Whole>
      <hr/>
    </Appcomponent></>
  )
}

export default Subtotal
