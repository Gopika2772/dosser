import React from 'react'
import { Appcomponent } from '../home/Home.style'
import { Box, Itsawrap } from './Notifications.style'
import { color } from '../../utils'


const notifications = () => {
  return (
    <>
    <Appcomponent>
    <Itsawrap>
      <Box clr={color.orange} back="https://imgs.search.brave.com/xFvDD8wozprFjigxiZz_BK7KsEZ7nNKwj5aQIpKzMlU/rs:fit:488:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC55/Y0xMa2pFaVRObGFh/MzBLLWhKLW1nSGFH/MyZwaWQ9QXBp">
       <div className="heading">Vegitables</div> 
       <div className="image">

       </div>
      </Box>
      <Box clr={color.green} back='https://imgs.search.brave.com/rxnC4-qPDcAqkyvG0IQVFW3iUSxxDi_f-axcdudWb6M/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5E/RXMtZkRTZmQ4LW9l/cHlEMFRUMzRnSGFF/OCZwaWQ9QXBp'>
       <div className="heading">Organic</div> 
       <div className="image">
       </div>
      </Box>
      <Box clr={color.pink} back='https://imgs.search.brave.com/XPTweTHHEzKf9mkRVvjSOY_DecwrKmx2xTPyNAI0d-o/rs:fit:674:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5j/NlRiejdJYkNuOWJW/WHpYUVNPcWhnSGFG/TiZwaWQ9QXBp'>
       <div className="heading">Fruits</div> 
       <div className="image">
       </div>
      </Box>
      <Box clr={color.blue} back='https://imgs.search.brave.com/mNXy5o-4hmCeCvv6GCbPavkjeGwHQj8C3VFKSsYaT-U/rs:fit:631:225:1/g:ce/aHR0cHM6Ly90c2Uz/LmV4cGxpY2l0LmJp/bmcubmV0L3RoP2lk/PU9JUC5wSEZ5ODRa/NmJsZTJGdHVoN0Ey/VjBnSGFGayZwaWQ9/QXBp'>
       <div className="heading">Dryfruits</div> 
       <div className="image">
       </div>
      </Box>
      </Itsawrap> 
    </Appcomponent>
    </>
  )
}

export default notifications
