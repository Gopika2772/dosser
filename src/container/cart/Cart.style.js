import styled from "styled-components";
import { font,color } from "../../utils";

export const Button = styled.a`
    position: relative;
    width: 7.5rem;
    height: 3.5rem;
    border-radius: 10px;
    background: ${color.dgreen};
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${color.white};
    font-weight: 500;
    margin-bottom: 2%;
    &:hover{
        cursor: pointer;
    }
`
export const Whole = styled.div`
display: flex;
flex-direction: column;
height: 100%;
width: 100%;
padding: 2%;
`
export const Save = styled.div`
padding:2% 0%;
font-size:${font.two};
font-weight: 600;
`

export const Cartwrapper = styled.div`
display: flex;
height: 100%;
width: 100%;
align-items: center;
justify-content: space-evenly;

.left{
display: flex;
height: 60%;
width: 25%;
object-fit: contain;
background-repeat: no-repeat;
background:url(${({back})=>back?back:'red'})

}
.right{
    display: flex;
    flex-direction: column;
height: 70%;
width: 50%;
justify-content: space-between;
}
`
export const Miniwrapper = styled.div`
width: 50%;
display: flex;
justify-content: space-between;
align-items: center;


  .del{
    position: relative;
    width: 5.5rem;
    height: 3rem;
    border-radius: 10px;
    background: ${color.dgreen};
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${color.white};
    font-weight: 500;
    font-size: 12px;
}
    &:hover{
        cursor: pointer;
    }

    .save{
    position: relative;
    width: 5.5rem;
    height: 3rem;
    font-size: 12px;
    border-radius: 10px;
    background: ${color.dgreen};
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${color.white};
    font-weight: 500;
}
    &:hover{
        cursor: pointer;
    }
`

