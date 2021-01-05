import React from "react";
import styled from "styled-components";
import rehypeReact from "rehype-react";
import ButtonLink from "./ButtonLink";
import LinkIcon from '@material-ui/icons/Link';
import GitHubIcon from '@material-ui/icons/GitHub';

const renderCustom = new rehypeReact({
  createElement: React.createElement,
}).Compiler;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  &:not(:last-child) {
    margin-bottom: 10rem;
  }
`;

const ProjectImage = styled.img`
  border-radius: 0.5rem;
  width: 50rem;
  
  box-shadow: 0 1.5rem 2rem rgba(0, 0, 0, 0.25);
`;
const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 50%;
  line-height: 1.8;
`;
const Stack = styled.p`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1.4rem;
  color: #1f7a8c;
`;

const ProjectDesc = styled.p`
  text-align: justify;
  margin: 2rem 0;
  font-size: 1.4rem;
`;

const ProjectTitle = styled.div`
  background-image: linear-gradient(to right, #17bebb, #1f7a8c);
  transform: skewX(-15deg);
  padding: 0.8rem 2rem;

  align-self: flex-start;
  & h1 {
    font-size: 1.6rem;
    text-transform: uppercase;
    color: white;
    font-weight: 400;
    transform: skewX(15deg)
  }
`;

const ButtonWrapper = styled.div`
    display: flex;
    margin-top: 3rem;
    & > *:not(:last-child){
        margin-right:5rem;
    }
`

const ProjectTemplate = ({ project }) => {
  const { title, site, sourcecode, stack, image } = project.frontmatter;
  return (
    <Wrapper>
      <ProjectContent>
        <ProjectTitle>
          <h1>{title}</h1>
        </ProjectTitle>
        <ProjectDesc>{renderCustom(project.htmlAst)}</ProjectDesc>
        <Stack>{stack}</Stack>
        <ButtonWrapper>
            <ButtonLink href={sourcecode} style={{backgroundColor:"transparent",border:"1px solid #000", color:"#000",boxShadow:"none"}}><GitHubIcon style={{marginRight:"1rem"}}/>source</ButtonLink>
            <ButtonLink href={site}><LinkIcon style={{marginRight:"1rem"}}/> visit</ButtonLink>
        </ButtonWrapper>
      </ProjectContent>
      <ProjectImage src={image.childImageSharp.fluid.src} alt="image" />
    </Wrapper>
  );
};

export default ProjectTemplate;
