import React from 'react'
import styled from "styled-components"

const StyledButton = styled.a`
    border-radius: 10rem;
  font-size: 1rem;
  padding: 1.2rem 2.8rem;
  width:auto;
  background-image: linear-gradient(to right,#17BEBB,#1F7A8C);
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  font-family: inherit;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease-out;
  display:flex;
  align-self: center;

  &:hover {
    transform: translateY(-3px);
    box-shadow:0px 15px 20px rgba(0,0,0,.25);
  }
  &:active {
    transform: translateY(1px);
    box-shadow: 0 3px 10px rgba(0,0,0,.25);
  }
`

const ButtonLink = ({children,...rest}) => {
    return (
        <StyledButton {...rest}>
            {children}
        </StyledButton>
    )
}

export default ButtonLink
