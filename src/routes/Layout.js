import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavContainer, NavLogo, NavItems, NavLinks, MainContent } from '../styles/LayoutStyles'

const Layout = () => {
  return (
    <>
    <NavContainer>
        <NavLogo>
            Tratratravel
        </NavLogo>
        <NavItems>
            <NavLinks to='/'>INICIO</NavLinks>
            <NavLinks to='form'>BUSCADOR</NavLinks>
            <NavLinks to='login'>LOGIN</NavLinks>
        </NavItems>
    </NavContainer>
    <MainContent><Outlet /></MainContent>
    </>
  )
}

export default Layout