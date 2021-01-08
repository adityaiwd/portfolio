import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Logo from "../images/logo.png";
import HamburgerMenu from "react-hamburger-menu";
import { Link } from "react-scroll";

const Nav = styled.nav`
  position: fixed;
  min-width: 100vw;
  background-color: #fff;
  opacity: 0.7;
  width: 100%;
  box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
  padding: 1.5rem 0;
  z-index: 10;
`;
const NavWrapper = styled.div`
  width: 78%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
`;

const Navigation = styled.div`
  position: relative;
  display: flex;
  @media only screen and (max-width: 37.5em) {
    display: none;
  }
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
  cursor: pointer;
`;

const NavigationMobile = styled.div`
  width: 78%;
  display: flex;
  flex-direction: column;
  margin: 2rem auto;
  animation: moveInTop 0.4s ease-out 0.4s;
  animation-fill-mode: backwards;
`;

const NavItemMobile = styled(Link)`
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s;
  text-align: center;
  &:not(:last-child) {
    margin-bottom: 3rem;
  }
  &:hover {
    color: #17bebb;
  }
`;

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(null);
  const [openedMenu, setOpenedMenu] = useState(false);

  const changeMobile = () => {
    window.matchMedia("(max-width: 37.5em)").matches
      ? setIsMobile(true)
      : setIsMobile(false);
  };

  useEffect(() => {
    changeMobile();
    window.addEventListener("resize", changeMobile);
    return () => window.removeEventListener("resize", changeMobile);
  }, []);

  return (
    <Nav style={{height: openedMenu && isMobile ? "23rem" : "7rem",transition: "all 0.5s"}}>
      <NavWrapper>
        <Link to="main" smooth={true} duration={500}>
          <NavLogo src={Logo} alt="logo" />
        </Link>
        {isMobile ? (
          <HamburgerMenu
            isOpen={openedMenu}
            menuClicked={() => setOpenedMenu(!openedMenu)}
            width={20}
            height={15}
            color="#17BEBB"
            strokeWidth={3}
            animationDuration={0.5}
          />
        ) : (
          <Navigation>
            <NavItem to="about" smooth={true} duration={500}>
              About Me
            </NavItem>
            <NavItem to="portfolio" smooth={true} duration={500}>
              Portfolio
            </NavItem>
            <NavItem to="contact" smooth={true} duration={500}>
              Contact
            </NavItem>
          </Navigation>
        )}
      </NavWrapper>
      {(openedMenu && isMobile) && (
        <NavigationMobile>
          <NavItemMobile onClick={() => setOpenedMenu(false)} to="about" smooth={true} duration={500}>
            About Me
          </NavItemMobile>
          <NavItemMobile onClick={() => setOpenedMenu(false)} to="portfolio" smooth={true} duration={500}>
            Portfolio
          </NavItemMobile>
          <NavItemMobile onClick={() => setOpenedMenu(false)} to="contact" smooth={true} duration={500}>
            Contact
          </NavItemMobile>
        </NavigationMobile>
      )}
    </Nav>
  );
};

export default Navbar;
