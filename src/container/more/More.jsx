import React from 'react'
import Summary from '../../component/Summary'
import { Main, Profile,Text } from './More.style'

const More = () => {
  return (
    <>
    <Main>
      <Profile>
        <img src='https://imgs.search.brave.com/REC6tsmJO8Ew1247WVm8vH74Py_WHnDix-6acgRLNsg/rs:fit:800:600:1/g:ce/aHR0cHM6Ly9jZG4u/ZHJpYmJibGUuY29t/L3VzZXJzLzEwMjk3/NC9zY3JlZW5zaG90/cy8yNzI2ODQxL2hl/YWRfYm9iLmdpZg.gif'></img>

      </Profile>
    
    </Main>
    <parent>
    <Text>
        <h1>Mr Abii</h1>
        <h2>abii@gmail.com</h2>
    </Text>
    </parent>
    <Summary/>
    </>
  )
}

export default More
