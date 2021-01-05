import React from 'react'
import styled from "styled-components"

const StyledButton = styled.a`
    border-radius: 10rem;
    letter-spacing: 1.5px;
  font-size: 1rem;
  padding: 1.1rem 2.8rem;
  width:auto;
  background-color: #17BEBB;
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  font-family: inherit;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease-out;
  display:flex;
  align-items: center;

  &:hover {
    transform: translateY(-3px);
  }
  &:active {
    transform: translateY(1px);
  }
`

const ButtonLink = ({children,...rest}) => {
    return (
        <StyledButton target="_blank" rel="noopener noreferrer" {...rest}>
            {children}
        </StyledButton>
    )
}

export default ButtonLink
