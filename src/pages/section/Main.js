import React from 'react'
import styled from 'styled-components'
import Logo from '../../images/logo.png'

const MainContainer = styled.header`
    min-height:100vh;
    width:100%;
    display:flex;
    align-items: flex-start;
    justify-content:center;
    flex-direction: column;
`

const Title = styled.h1`
    font-weight:200;
    font-size: 7rem;
    width: 36rem;
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
    width:90rem;
    z-index:-1;
    opacity: 0.3;
    right: -38%;
    transform: rotate(-90deg);
`

const Main = () => {
    return (
        <MainContainer>
            <Title>Hello <span role="img" aria-label="wave">👋🏼</span>, I’m <Name>Wicak</Name></Title>
            <SubTitle>An <span>Enthusiastic</span> Front-end Developer</SubTitle>
            <BackgroundLogo src={Logo} alt="logo" />
        </MainContainer>
    )
}

export default Main
