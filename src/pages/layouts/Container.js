import styled from 'styled-components';
 
const Container = styled.div`
    max-width: 120rem;
    min-height:100vh;
    margin: 0 auto;
    position:relative;
    display:flex;
    flex-direction:column;
    align-items:center;
    @media only screen and (max-width:81.25em){
        max-width: 100%;
        width: 100%;
    }
`
 
export default Container;