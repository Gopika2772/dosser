import React from 'react'
import { Appcomponent,Flex,Han,Location,Profile,Head1,Head2,Sgdiv } from '../container/home/Home.style'


const Search = () => {
  return (
    <Appcomponent>
        <Flex>
            {/* <Han>
                <img src='https://img.icons8.com/material-two-tone/24/null/grid-2.png'></img>
            </Han> */}
            
            <Location>
                <Head1>Your Location</Head1>
                <Head2>Chennai,India</Head2>
            </Location>
            <Profile>
                <img src="https://img.icons8.com/dusk/64/null/circled-user-female-skin-type-7.png"></img>
            </Profile>
            {/* <Profile>
                <img src="https://img.icons8.com/dusk/64/null/circled-user-female-skin-type-7.png"></img>
            </Profile> */}
        </Flex>
        <Sgdiv>
            <h1>what would you like to order?</h1>
            <div className="form">
            <img src="https://img.icons8.com/ios/50/null/search--v1.png"/>    
            <input type="text" id="fname" name="Search" placeholder="Search Grocery"/>
            <img src="https://img.icons8.com/ios-filled/50/null/worldwide-location--v1.png"/>
            </div>
        </Sgdiv>

    </Appcomponent>
  )
}

export default Search
