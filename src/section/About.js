import React from "react";
import styled from "styled-components";
import SectionTitle from "../components/SectionTitle";
import { graphql, useStaticQuery } from "gatsby";
import rehypeReact from "rehype-react";
import ButtonLink from "../components/ButtonLink";
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import {Link} from 'react-scroll';

const AboutWrapper = styled.div`
  padding:10rem 0;
  margin: 0 auto;
  width:90%;
  display: flex;
  flex-direction: column;
  align-items:center;
  
`

const StackTitle = styled.h1`
  font-size: 1.9rem;
  margin-bottom: 2rem;
  color: #000;
  font-weight: bold;
  text-align:center;
`

const Stack = styled.p`
  color: #1F7A8C;
  font-size: 1.3rem;
  line-height: 1.8;
  font-weight: 700;
  margin: 0 auto;
  width: 75%;
  text-align:center;
`

const ButtonWrapper = styled.div`
  margin-top: 5rem;
`

const AboutContent = styled.div`
  margin: 7rem 0;
  font-size: 1.6rem;
  display: flex;
  flex-direction: column;
  line-height: 1.8;
  text-align: justify;
  & a {
    text-decoration: underline;
    color: #000;
    font-weight: 600;
    transition: color 0.2s ease-out;
    cursor:pointer;
    &:hover {
      color: #17bebb;
    }
  }
`;
const renderCustom = new rehypeReact({
  createElement: React.createElement,
  components:{'scroll':Link}
}).Compiler;

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "AboutMe.md"}) {
        childMarkdownRemark {
          htmlAst
          frontmatter {
            stack
          }
        }
      }
    }
  `);
  return (
    <AboutWrapper name="about">
      <SectionTitle title="About Me" subtitle="Let me introduce myself" style={{alignSelf:"flex-start"}}/>
      <AboutContent>{renderCustom(data.file.childMarkdownRemark.htmlAst)}</AboutContent>
      <StackTitle>My Current Stack of Languages/Technologies are :</StackTitle>
      <Stack>{data.file.childMarkdownRemark.frontmatter.stack}</Stack>
      <ButtonWrapper>
        <ButtonLink href="/CV.pdf"><InsertDriveFileIcon style={{marginRight:"1rem"}}/> CURRICULUM</ButtonLink>
      </ButtonWrapper>
    </AboutWrapper>
  );
};

export default About;
