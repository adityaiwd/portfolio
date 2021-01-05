import React from 'react';
import styled from "styled-components";
import SectionTitle from "../components/SectionTitle";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TelegramIcon from '@material-ui/icons/Telegram';

const ContactWrapper = styled.div`
  padding:5rem 0;
  display: flex;
  align-items:center;
  flex-direction: column;
`

const Email = styled.h1`
    margin:3rem auto;
`

const ContactIconWrapper = styled.div`
    display:flex;
    
`

const ContactIcon = styled.a`
    display:flex;
    text-decoration:none;
    font-size:2.5rem;
    border:3px solid #17bebb;
    border-radius: 50%;
    width: 4.5rem;
    height: 4.5rem;
    justify-content:center;
    align-items:center;
    margin: 0 1.5rem;
    transition: all .2s;
    cursor:pointer;
    color:inherit;
    &:hover{
        background-color:#17bebb;
        color:#fff;
    }
`

const Footer = styled.p`
    margin-top:5rem;
    font-weight: 600;
    font-size:1.4rem;
    text-transform: uppercase;
`

const Contact = () => {
    const Year = new Date().getFullYear()
    return (
        <ContactWrapper>
            <SectionTitle title="Contact" subtitle="You can find me at :" style={{textAlign:"center"}}/>
            <Email>adityad.wck@gmail.com</Email>
            <ContactIconWrapper>
                <ContactIcon target="_blank" rel="noopener noreferrer" href="https://github.com/adityaiwd"><GitHubIcon fontSize="inherit"/></ContactIcon>
                <ContactIcon target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/adityaiwd/"><LinkedInIcon fontSize="inherit"/></ContactIcon>
                <ContactIcon target="_blank" rel="noopener noreferrer" href="https://t.me/adwicaksono"><TelegramIcon fontSize="inherit"/></ContactIcon>
            </ContactIconWrapper>
            <Footer>copyright &copy; {Year}, Wicak</Footer>
        </ContactWrapper>
    )
}

export default Contact
