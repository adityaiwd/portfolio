import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
    text-transform: uppercase;
    color: #1F7A8C;
    font-size: 2.4rem;
    font-weight: bold;
`
const Subtitle = styled.h3`
    font-size:1.9rem;
    font-weight:300;
`

const SectionTitle = ({title,subtitle}) => {
    return (
        <div>
            <Title>
                {title}
            </Title>
            <Subtitle>
                {subtitle}
            </Subtitle>
        </div>
    )
}

export default SectionTitle
