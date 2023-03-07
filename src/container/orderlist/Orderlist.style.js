import styled from "styled-components";
import {font,color} from "../../utils"

export const Date1 = styled.div`
font-size: ${font.three};
font-weight: bolder;
margin-bottom: 5%;
`

export const Orderlist = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
border-radius: 20px;
padding: 5%;
/* border: 2px solid gray; */
box-shadow: 1px 1px 10px  gray;

.tv{
    display: flex;
flex-direction: row;

  .left1{
    display: flex;
    height: 100%;
    width: 50%;
  }

  img{
    height: 60px;
    width: 60px;
    border-radius: 30px;
    background-color: ${color.green};
  }
  .empty{
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 50%;

  }

  .title{
    font-size: ${font.two};
    font-weight: 900;
  }
.dv{
    display: flex;
flex-direction: column;
margin-bottom: 2%;
}  

 
}
.delivary{
    color: ${color.dgreen};
    font-size: ${font.one};
    
   }

   .button{
    position: relative;
    width: 6.5rem;
    height: 2.5rem;
    border-radius: 10px;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${color.pink};
    background-color: #FF0000 ;
    font-family: 'Oxygen', sans-serif;
    font-weight: 500;
    margin-top: 10%;
    &:hover{
        cursor: pointer;
        /* background-color: ; */
        color: black;
    }
   }
`
// //product

// export const GreatParent = styled.div`
// display: flex;
// flex-direction: row;
// `

// export const Img1 = styled.div`

// `

// export const Dash = styled.div`
// display: flex;
// flex-direction: column;
// `

export const Button = styled.a`
    position: relative;
    width: 10.5rem;
    height: 3.5rem;
    border-radius: 10px;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${color.white};
    font-family: 'Oxygen', sans-serif;
    font-weight: 500;
    &:hover{
        cursor: pointer;
    }
`
// export const Again = styled.div`
//  display: flex;
//  flex-direction: column;
//  align-items: center;
//  justify-content: space-between;
// `

// export const Details = styled.div`
// font-size: ${font.one};
// `
// export const Type = styled.div`
// font-size: ${font.one};
// .seller{
//   color: ${color.black};
// }
// .writting{
//   color:${color.gray}
// }
// `
// export const Benifits= styled.div`
// `

