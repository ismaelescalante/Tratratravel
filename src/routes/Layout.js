import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavContainer, NavLogo, NavItems, NavLinks, MainContent, LogoImg } from '../styles/LayoutStyles'
import Img from '../images/logo.png'
import {WelcomeImg} from "../styles/LandingStyles";

const Layout = () => {
  return (
    <>
  
    <MainContent>
    <NavContainer>
        <NavLogo>
            <LogoImg src={Img}></LogoImg>
        </NavLogo>
        
   <div className="center">
      <h1>
    <span>TRATRATRAVEL</span>
    <span>TRATRATRAVEL</span>
    <span>TRATRATRAVEL</span>
      </h1>
    </div>
  
        <NavItems style={{position: "relative", left: "0",
    top: "0"}}>
            <NavLinks to='/'>INICIO</NavLinks>
            <NavLinks to='form'>BUSCADOR</NavLinks>
            <NavLinks to='login'>LOGIN</NavLinks>

        </NavItems>
    </NavContainer>
    
    <Outlet />
    
    </MainContent>
    
    </>
  )
}

export default Layout