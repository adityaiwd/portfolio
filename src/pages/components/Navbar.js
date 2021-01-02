import React from 'react'
import styled from 'styled-components'
import Logo from '../../images/logo.png'

const Nav = styled.nav`
    position: fixed;
    display: flex;
    height: 7rem;
    background-color: #fff;
    opacity: .7;
    width: 100%;
    box-shadow: 0 .4rem .4rem rgba(0,0,0,.25);
    padding: 0 32.4rem;
    align-items:center;
    z-index:10;
`

const Navigation = styled.div`
    position:relative;
    display:flex;
    margin-left: auto; 
`

const NavItem = styled.a`
    font-size: 1.2rem;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    transition: all .2s;
    &:not(:last-child){
        margin-right:6.4rem;
    }
    &:hover{
        color: #17BEBB;
    }
`

const NavLogo = styled.img`
    height:5rem;
`


const Navbar = () => {
    return (
        <Nav>
            <NavLogo src={Logo} alt="logo"/>
            <Navigation>
                <NavItem>About</NavItem>
                <NavItem>Portfolio</NavItem>
                <NavItem>Contact</NavItem>
            </Navigation>
        </Nav>
    )
}

export default Navbar
