import React from "react";
import styled from "styled-components";
import SectionTitle from "../components/SectionTitle";
import { graphql, useStaticQuery } from "gatsby";
import rehypeReact from "rehype-react";

const AboutContent = styled.div`
  margin-top: 7rem;
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
    &:hover {
      color: #17bebb;
    }
  }
`;
const renderCustom = new rehypeReact({
  createElement: React.createElement,
}).Compiler;

const About = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "AboutMe.md" }) {
        childMdx {
          frontmatter {
            stack
          }
        }
      }
      markdownRemark {
        htmlAst
      }
    }
  `);
  console.log(data);
  return (
    <div style={{ minHeight: "100vh", paddingTop: "13rem" }}>
      <SectionTitle title="About Me" subtitle="Let me introduce myself" />
      <AboutContent>{renderCustom(data.markdownRemark.htmlAst)}</AboutContent>
    </div>
  );
};

export default About;
