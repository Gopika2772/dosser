import styled from "styled-components";
import { color,font } from "../../utils";

export const Main = styled.div`
height: 30%;
width: 100%;
background-color: ${color.green};
position: absolute;
`
export const Profile = styled.div`
position: relative;
top: 90%;
left: 45%;

img{
    height: 200px;
    width: 200px;
    border-radius: 50%;
}
`
export const Parent = styled.div`
position: relative;
`
export const Text = styled.div`
display: flex;
flex-direction: column;
/* justify-content: center; */
align-items: center;
width: 100%;
position: absolute;
top: 60%;

h1{
    font-size: ${font.three};
}
h2{
    color: gray;
}
`
export const Flexwrap = styled.div`
display: flex;
flex-direction: column;
background-color: ${color.green};
height: 100px;
width: 100px;
gap:10px ;

.data{
    font-size: ${font.one};
    font-weight: 900;
    color: ${color.black};

}
.value{
    color: ${color.black};
}
`
