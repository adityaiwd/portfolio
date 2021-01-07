import React from 'react'
import styled from 'styled-components'
import Logo from '../images/logo.png'

const MainContainer = styled.header`
    min-height:100vh;
    width: 90%;
    margin: 0 auto;
    display:flex;
    justify-content:center;
    flex-direction: column;
    position:relative;
`

const Title = styled.h1`
    font-weight:200;
    font-size: 7rem;
`

const Name = styled.span`
    font-weight: bold;
    color: #17BEBB;
`

const SubTitle = styled.h3`
    font-size: 1.8rem;
    font-weight:200;
    & span{
        font-weight:700;
        font-style:italic;
    }
`

const BackgroundLogo = styled.img`
    position:absolute !important;
    width:80%;
    z-index:-10;
    opacity: 0.15;
    top:15%;
    right:-47.5%;
    overflow:hidden;
    transform: rotate(-90deg);
    @media only screen and (max-width:100em) {
    right: -24%;
    top: 15%;
    width: 70%;
    }
  @media only screen and (max-width:81.25em) {
    top: 17%;
    right: -16%;
    width:65%;
  }
  @media only screen and (max-width:68.75em) {
    top: 5%;
    width:55%;
  }
  @media only screen and (max-width:37.5em) {
    top: 6%;
    width: 55%;
    right:-11%;
  }
`

const Main = () => {
    return (
        <MainContainer id="main">
            <Title>Hello <span role="img" aria-label="wave">👋🏼</span>,<br /> I’m <Name>Wicak</Name></Title>
            <SubTitle>An <span>Enthusiastic</span> Front-end Developer</SubTitle>
            <BackgroundLogo src={Logo} alt="logo" />
        </MainContainer>
    )
}

export default Main
