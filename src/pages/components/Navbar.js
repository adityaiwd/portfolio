import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Logo from "../../images/logo.png";
import {Link} from 'react-scroll';

const Nav = styled.nav`
  position: fixed;
  min-width: 100vw;
  background-color: #fff;
  opacity: 0.7;
  width:100%;
  box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
  padding: 1.5rem 0;
  z-index: 10;
`;
const NavWrapper = styled.div`
  width: 78%;
  margin:0 auto;
  display:flex;
  align-items:center;
justify-content:space-between;
`;

const Navigation = styled.div`
  position: relative;
  display: flex;
`;

const NavItem = styled(Link)`
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s;
  &:not(:last-child) {
    margin-right: 6rem;
  }
  &:hover {
    color: #17bebb;
  }
`;

const NavLogo = styled.img`
  height: 4rem;
  position: relative;
  display: flex;
  justify-self: flex-start;
  cursor:pointer;
`;

const Navbar = () => {
  return (
    <Nav>
      <NavWrapper>
      <Link to="main" smooth={true} duration={500}>
        <NavLogo src={Logo} alt="logo" />
      </Link>
        <Navigation>
          <NavItem to="about" smooth={true} duration={500}>About Me</NavItem>
          <NavItem to="portfolio" smooth={true} duration={500}>Portfolio</NavItem>
          <NavItem to="contact" smooth={true} duration={500}>Contact</NavItem>
        </Navigation>
      </NavWrapper>
    </Nav>
  );
};

export default Navbar;
