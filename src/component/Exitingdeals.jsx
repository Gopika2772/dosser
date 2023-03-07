import React from 'react'
import { Appcomponent, Main, Most, Wrapper } from '../container/home/Home.style'

const Exitingdeals = () => {
  return (
    <>
    <Appcomponent>
        <Most>
            <h1>Exiting Deals</h1>
            <h2>Show All</h2>
        </Most>
        <Main>
        <Wrapper>
            <div className="left">
                <div className="txt">40% Discount On Fresh Vegetabels</div>
                {/* <div className="btn">Get Now</div> */}
                <a href='#'>Get Now</a>
            </div>
            <div className="right">
                <img src='https://imgs.search.brave.com/SFKMX_KZKrUxpZlbf7fQS8_4_epOjnQRwEmlYlmt7sg/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC54/bFgyclV2eG9TLVNB/cGkyNEljZ0N3SGFF/SyZwaWQ9QXBp'></img>
            </div>
        </Wrapper>
        <Wrapper>
            <div className="left">
                <div className="txt" >32% Discount On Organic Vegetabels</div>
                <a href='#'>Get Now</a>
            </div>
            <div className="right">
                <img src='https://imgs.search.brave.com/uwuCjaqEUc4xEzXsjLXOJD0De7csXZzqQhSP2BFgmcQ/rs:fit:394:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5C/MmlycGtNaFEtSDJk/ZWgtT2hnOTdRSGFJ/NSZwaWQ9QXBp'></img>
            </div>
        </Wrapper>
        <Wrapper>
            <div className="left">
                <div className="txt">60% Discount On Fruits</div>
                <a href='#'>Get Now</a>
            </div>
            <div className="right">
                <img src='https://imgs.search.brave.com/H6CHHhrPiciXTwkZnbqFMmLDTswS-l9CVLnIv4wUcVQ/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/Z3JhY2llbWFnLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAx/NC8xMi9HTS1XaGl0/ZS1QYWdlLTIxNC5q/cGc'></img>
            </div>
        </Wrapper>
        </Main>

    </Appcomponent>
    
    </>
  )
}

export default Exitingdeals
