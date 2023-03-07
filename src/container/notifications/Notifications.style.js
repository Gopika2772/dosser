import styled from "styled-components";
import { font,color } from "../../utils";

export const Box = styled.div`
position: relative;
height: 350px;
width: 250px;
box-shadow: 1px 1px 10px  gray;
background-color: ${({clr})=>clr?clr:'red'};
margin-right: 3%;
display: flex;
flex-direction: column;
.heading{
    position: relative;
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${font.two};
}

.image{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60%;
    width: 97%;
    align-self: center;
    background: url( ${({back})=>back?back:'red'});
    background-size: cover;
    background-repeat: no-repeat;
}


`
export const Itsawrap = styled.div`
display:flex`