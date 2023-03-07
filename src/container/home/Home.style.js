import styled from "styled-components";
import { color,font } from "../../utils";

export const Appcomponent = styled.div`
padding: 7rem 3rem;
height: 100vh;
width: 100%;
`
export const Flex = styled.div`
display:flex;
align-items: center;
justify-content: space-between;
margin-bottom: 3%;
`

export const Han = styled.div`
height: 2rem;
width: 2rem;
border-radius: 50%;
`
export const Location = styled.div`
display:flex;
flex-direction: column;
align-items: centre;
justify-content: center;
`
export const Head1 = styled.div`
color:gray;
text-align: center;
`
export const Head2 = styled.div`
font-size:2rem;
text-align:center;
`

export const Profile = styled.div`

`
export const Sgdiv = styled.div`
height: 60%;
width: 100%;
background-color: ${color.green};
border-radius: 30px;
/* justify-content: center;
align-items: center; */

   h1{
    text-align: center;
    font-size: ${font.three};
    margin-top: 2%;
    margin-bottom: 2%;
}

   .form{
    display: flex;
    background-color: ${color.white};
    height:25%;
    width: 40%;
    border-radius: 30px;
    text-align: center;
    justify-content: space-evenly;
    align-items: center;


    input{
        border-color:${color.white};
        height: 100%;
        width: 50%;
        
    }
    
   }  

`
 export const Most = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
 margin-bottom: 2%;
 h2{
   color: ${color.dgreen};
 }
 `
 
// export const List = styled.div`
// height: 5rem;
// weight: 5rem;
// border-radius: 30px;
// background-color: ${color.pink};
// `

export const Container = styled.div`
height: 300px;
width: 250px;
background-color: ${color.green};
border-radius: 20px;
/* display: flex;
flex-direction: column;
   justify-content: center;
   align-items: center; */

.image{
   display: flex;
   justify-content: center;
   align-items: center;
   
}
img{
   margin-top: 4%;
   margin-bottom: 4%;
   height: 75%;
   width: 75%;
   display: flex;
   align-items: center;
   justify-content: center;
}



/* .title{
   font-size: ${font.two};
   font-weight: 700;
}
.rate{
   font-weight: 700;
}
 .button{
     height: 50px;
     width: 100px;
     border-radius: 10px;
     background-color: white;
    
 } */
/* .rate{
   font-weight: 700;
} */

`
// export const image = styled.div`
// height: 150px;
// width: 150px;
// `
//  export const price = styled.div`
//  display: flex;
//  height: 10%;
//  flex-direction: column;
//  justify-content: space-between;
//  align-items: center;
// `
 /* .rate{
   font-weight: 700;
}

 .button{
     height: 50px;
     width: 50px;
     border-radius: 30px;
     background-color: white;
    
 } */


 export const Price = styled.div`
 display: flex;
 height: 40%;
 flex-direction: column;
 justify-content: space-between;
 /* align-items: center; */
 margin-left: 1rem;

.title{
   font-size: ${font.two};
   font-weight: 700;
}
.rate{
   font-weight: 700;
}
button{
     height: 3rem;
     width: 6rem;
     display: flex;
     align-items: center;
     justify-content: center;
     border: none;
     border-radius: 1rem;
     background-color: ${color.dgreen};
    
 }

`

 

export const button = styled.div`
     height: 50px;
     width: 50px;
     border-radius: 30px;
     background-color: ${color.green};
    
 `

 //exitingdeals

 export const Main = styled.div`
 display: flex;
 flex-direction: row;
 `

 export const Wrapper = styled.div`
 display: flex;
 flex-direction: row;
 background-color: ${color.green};
 height: 200px;
 width: 400px;
 border-radius: 30px;
 padding: 30px;
 margin-right: 5%;

 .left{
   height: 100%;
   width: 50%;
   display: flex;
   flex-direction: column;

   .txt{
      font-size: ${font.one};
      margin-bottom: 15%;
      font-weight: 500;
   }
   a{
    height: 40px;
    width: 90px;
    border-radius: 10px;
    background-color: ${color.dgreen} ;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: black;
   }
  
   /* .right{
   height: 100%;
   width: 50%;
   display: flex;
   justify-content: center;
   align-items: center;

   img{
      height: 60%;
      width: 60%;
      display: flex;
      justify-content: center;
      align-items: center;
      object-fit: contain;
   } */
   }
   .right{
   height: 100%;
   width: 50%;
   display: flex;
   justify-content: center;
   align-items: center;

   img{
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      object-fit: contain;
   }
 }
 `