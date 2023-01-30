import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { NavContainer, NavLogo, NavItems, NavLinks, MainContent, LogoImg } from '../styles/LayoutStyles'
import Img from '../images/logo.png'
import {WelcomeImg} from "../styles/LandingStyles";
import jwt_decode from 'jwt-decode'

const Layout = () => {

  const navigate = useNavigate()

  function getCurrentUser(){
    try {
      const token = localStorage.getItem('token')
      return jwt_decode(token)
    } catch (ex) {
      return null
    }
  }

  const currentUser = getCurrentUser()

  const logout = async (e) => {
    localStorage.removeItem('token')
    navigate('/')
  }



  return (
    <>
   
    
    <MainContent>
    <NavContainer>
        <NavLogo>
            <LogoImg src={Img}></LogoImg>
        </NavLogo>
        <NavItems>
   <div className="center">
      <h1>
    <span>TRATRATRAVEL</span>
    <span>TRATRATRAVEL</span>
    <span>TRATRATRAVEL</span>
  
      </h1>
    </div>
  
   </NavItems>
        <NavItems>
            <NavLinks to='/'>INICIO</NavLinks>
            {currentUser ? <NavLinks to='form'>BUSCADOR</NavLinks> : null}
            
            {
              currentUser ? <NavLinks onClick={logout}>CERRAR SESIÓN</NavLinks> : <NavLinks to='login'>INICIAR SESIÓN</NavLinks>
            }
            

        </NavItems>
    </NavContainer>
    
    <Outlet currentUser={currentUser}/>
    
    </MainContent>
    
    </>
  )
}

export default Layout