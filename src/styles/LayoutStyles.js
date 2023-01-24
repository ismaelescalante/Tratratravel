import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavContainer = styled.div`
    background-color: #070707;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-family: 'Source Sans Pro', sans-serif;
`
export const NavLogo = styled.h1`
    font-size: 24px;
    padding: 1rem;
`
export const NavItems = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
    padding: 0.5rem;
`
export const NavLinks = styled(NavLink)`
    font-size: 18px;
    color: #CACBCD;
    text-decoration: none;
    padding: 0.5rem;

    &:hover{
        color: #286078;
    }
`

export const MainContent = styled.div`
    height: 100vh;
    font-family: 'Source Sans Pro', sans-serif;
`

export const LogoImg = styled.img`
    width: 100%;
    height: 70px;
`