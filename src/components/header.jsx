import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from '../images/logo.svg';

function Header() {
  const [menuStatus, setMenuStatus] = useState(false);

  return (
    <Container>
      <a href='#'>
        <img src={Logo} alt='' />
      </a>

      <Menu>
        <a href="#">Model S</a>
        <a href="#model3">Model 3</a>
        <a href="#">Model X</a>
        <a href="#">Model Y</a>
        <a href="#">Solar Roof</a>
        <a href="#">Solar Panels</a>
      </Menu>

      <RightMenu>
        <ExtraMenu>
          <a href="#">Shop</a>
          <a href="#">Account</a>
        </ExtraMenu>

        <MenuButtonOpen onClick={()=>setMenuStatus(true)}>
          Menu
        </MenuButtonOpen>
      </RightMenu>

      <SideMenu show={menuStatus}>
        <MenuButtonClose>
          <MenuClose onClick={()=>setMenuStatus(false)}>Close</MenuClose>
        </MenuButtonClose>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trade-in</a>
        </li>
        <li>
          <a href="#">Cybertruck</a>
        </li>
        <li>
          <a href="#">Roadster</a>
        </li>
        <li>
          <a href="#">Semi</a>
        </li>
      </SideMenu>
    </Container>
  );
}

export default Header;


const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`

const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;

  a {
    color: black;
    font-weight: 300;
    padding: 0 20px;
    flex-wrap: nowrap;

    :hover {
      background-color: #0000000D;
      border-radius: 5px;
      transition: .2s;
    }
  }

  @media (max-width: 1200px) {
    display: none;
  }
`

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    color: black;
    font-weight: 300;
    padding: 0 10px;
    

    :hover {
      background-color: #0000000D;
      border-radius: 5px;
      transition: .2s;
    }
  }
`

const ExtraMenu = styled.div`
   @media (max-width: 1200px) {
    display: none;
  }
`

const MenuButtonOpen = styled.div`
  cursor: pointer;
  padding-left: 10px;

  @media (max-width: 1200px) {
      background-color: #0000000D;
      border-radius: 5px;
      transition: .2s;
      width: 100px;
      padding: 5px 30px;
  }
`

const SideMenu = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  list-style: none;
  width: 300px;
  z-index: 16;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.2s;

  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, .2);

    a {
      color: black;
      font-weight: 300;
    }
  }
`

const MenuClose = styled.div`
  cursor: pointer;
`

const MenuButtonClose = styled.div`
  display: flex;
  justify-content: flex-end;
`