// import React from "react";
// import { Navigation, Logo, Navbox, Menu } from "../../container/navbar/Navbar.styles";
// import { Link } from "react-router-dom";
// // import { FontAwesomeIcon } from "@fortawesome/fontawesome-free";
// import logo from "../../asserts/logo.png"


// const Navbar = () => {
//   return (
//     <>
//       <Navigation>
//         <Logo>
//           <img src={logo} />
//         </Logo>
//         <Navbox>
//           <Link className="home" to="/">
//             Home
//           </Link>
//           <Link className="orderlist" to="/Orderlist">
//             Orderlist
//           </Link>
//           <Link className="notifications" to="/Notifications">
//             Notifications
//           </Link>
//           <Link className="cart" to="/Cart">
//             Cart
//           </Link>
//           <Link className="more" to="/More">
//             more
//           </Link>
//         </Navbox>
//         <Menu>
//           <img src="https://img.icons8.com/sf-black-filled/64/ffffff/xbox-menu.png" />
//         </Menu>
//       </Navigation>
      
//     </>
//   );
// };

// export default Navbar;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';
// import logo from "../../asserts/logo.png"

// const NavbarContainer = styled.nav`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 20px;
//   background-color: #fff;
//   box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
//   position: fixed;
//   top: 0;
//   width: 100%;
//   z-index: 999;
// `;

// const NavbarLeft = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const NavbarLogo = styled.img`
//   display: block;
//   width: 40px;
//   height: 40px;
// `;

// const NavbarRight = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const NavbarLinks = styled.ul`
//   display: flex;
//   align-items: center;
//   list-style: none;
//   margin: 0;
//   padding: 0;
// `;

// const NavbarItem = styled.li`
//   margin: 0 10px;
// `;

// const NavbarLink = styled(Link)`
//   color: #333;
//   text-decoration: none;
//   transition: color 0.2s ease-in-out;
//   font-size: 1.5rem;
//   font-weight: bold;

//   &:hover {
//     color: #dff7b3;
//   }
// `;

// const NavbarDropdown = styled.li`
//   margin: 0 10px;
//   position: relative;
// `;

// const NavbarDropdownLink = styled.a`
//   color: #333;
//   text-decoration: none;
//   transition: color 0.2s ease-in-out;
//   font-size: 1.5rem;
//   font-weight: bold;

//   &:hover {
//     color: #dff7b3;
//   }
// `;

// const NavbarDropdownMenu = styled.div`
//   position: absolute;
//   top: 100%;
//   left: 0;
//   display: none;
//   z-index: 1;
// `;

// const NavbarDropdownItem = styled(Link)`
//   display: block;
//   padding: 10px;
//   color: #333;
//   text-decoration: none;
//   transition: color 0.2s ease-in-out;
//   font-size: 1.5rem;
//   font-weight: bold;

//   &:hover {
//     background-color: #dff7b3;
//     color: #333;
//   }
// `;

// const Navbar = () => {
//   return (
//     <NavbarContainer>
//       <NavbarLeft>
//         <Link to="/">
//           <NavbarLogo src={logo} alt="Logo" />
//         </Link>
//       </NavbarLeft>
//       <NavbarRight>
//         <NavbarLinks>
//           <NavbarItem>
//             <NavbarLink to="/">Home</NavbarLink>
//           </NavbarItem>
//           <NavbarItem>
//             <NavbarLink to="/orderlist">Order List</NavbarLink>
//           </NavbarItem>
//           <NavbarItem>
//             <NavbarLink to="/notifications">Notifications</NavbarLink>
//           </NavbarItem>
//           <NavbarItem>
//             <NavbarLink to="/cart">Cart</NavbarLink>
//           </NavbarItem>
//           <NavbarItem>
//             <NavbarLink to="/more">More</NavbarLink>
//           </NavbarItem>
//           <NavbarDropdown>
//             <NavbarDropdownMenu>
//               <NavbarDropdownItem to="/route1">Route 1</NavbarDropdownItem>
//               <NavbarDropdownItem to="/route2">Route 2</NavbarDropdownItem>
//               <NavbarDropdownItem to="/route3">Route 3</NavbarDropdownItem>
//              </NavbarDropdownMenu>
//             </NavbarDropdown>
//             </NavbarLinks>
//             </NavbarRight>
//             </NavbarContainer>  
//   );
// };

// export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from "../../asserts/logo.png"

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
`;

const NavbarLeft = styled.div`
  display: flex;
  align-items: center;
`;

const NavbarLogo = styled.img`
  display: block;
  width: 40px;
  height: 40px;
`;

const NavbarMiddle = styled.div`
  display: flex;
  align-items: center;
`;

const NavbarLinks = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavbarItem = styled.li`
  margin: 0 10px;
`;

const NavbarLink = styled(Link)`
  color: #333;
  text-decoration: none;
  transition: color 0.2s ease-in-out;
  font-size: 1.5rem;
  font-weight: bold;

  &:hover {
    color: #dff7b3;
  }
`;

const NavbarRight = styled.div`
  display: flex;
  align-items: center;
`;

const RegisterButton = styled.button`
  background-color: #0BDA51;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  margin-right: 10px;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #dff7b3;
    color: #333;
  }
`;

const LoginButton = styled.button`
  background-color: #0BDA51;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #dff7b3;
    color: #333;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarLeft>
        <Link to="/">
          <NavbarLogo src={logo} alt="Logo" />
        </Link>
      </NavbarLeft>
      <NavbarMiddle>
        <NavbarLinks>
          <NavbarItem>
            <NavbarLink to="/">Home</NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink to="/orderlist">Order List</NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink to="/notifications">Notifications</NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink to="/cart">Cart</NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink to="/more">More</NavbarLink>
          </NavbarItem>
        </NavbarLinks>
      </NavbarMiddle>
      <NavbarRight>
        <RegisterButton>Register</RegisterButton>
        <LoginButton>Login</LoginButton>
      </NavbarRight>
    </NavbarContainer>
  );
};

export default Navbar;

            
