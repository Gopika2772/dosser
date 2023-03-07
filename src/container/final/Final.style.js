import styled from "styled-components";
import { font, color } from "../../utils";

export const Centre = styled.div`
  text-align: center;
  font-size: ${font.two};
  font-weight: 900;
  height: 20%;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  height: 50%;

  img {
    height: 90%;
    width: 90%;
  }
`;

export const Left = styled.div`
  width: 40%;
  font-size: ${font.one};

  img {
    height: 90%;
    width: 90%;
  }
`;

export const Right = styled.div`
  display: inline;
  height: 100px;
  width: 100px;

  input {
    padding: "10px";
    border: "none";
    border-radius: "5px";
    outline: "none";
    font-size: "16px";
    box-shadow: "0px 0px 5px 0px rgba(0,0,0,0.5)";
  }
  
`;

//place order

export const Contain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Place = styled.div`
  position: relative;
  width: 10.5rem;
  height: 4.5rem;
  border-radius: 10px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${color.black};
  background-color: red;
  font-family: "Oxygen", sans-serif;
  font-weight: 900;
  margin-top: 10%;
  padding: 2%;
  &:hover {
    cursor: pointer;
    /* background-color: ; */
    color: black;
  }
`;
