import React from 'react'
import styled from "styled-components";
import SectionTitle from "../components/SectionTitle";
import ProjectTemplate from "../components/ProjectTemplate";
import { graphql, useStaticQuery } from "gatsby";


const PortfolioWrapper = styled.div`
  padding:10rem 0;
  width:90%;
  display: flex;
  flex:1;
  flex-direction: column;
  @media only screen and (max-width:56.25em){
        
        align-items:center;
    } 
`
const PortfolioContent = styled.div`
  margin: 7rem 0;
  font-size: 1.6rem;
  display: flex;
  flex-direction: column;
  line-height: 1.8;
`

const Portfolio = () => {
    const {allFile: data} = useStaticQuery(graphql`
    query {
        allFile(filter: {sourceInstanceName: {eq: "markdown"}, extension: {eq: "md"}, relativeDirectory: {regex: "/portfolio/"}}
        sort: { fields: [dir], order: ASC }) {
          edges {
            node {
              childMarkdownRemark {
                frontmatter {
                  stack
                  title
                  site
                  sourcecode
                  image {
                    childImageSharp {
                      fluid(maxWidth: 800, quality: 80) {
                        src
                      }
                    }
                  }
                }
                htmlAst
            }
            id
            }
          }
        }
      }
  `);
  console.log(data)
    return (
        <PortfolioWrapper>
            <SectionTitle title="Portfolio" subtitle="Check out some projects that I’ve made" style={{alignSelf:"flex-start"}}/>
            <PortfolioContent>
                {data.edges.map(item => (
                    <ProjectTemplate key={item.node.id} project={item.node.childMarkdownRemark}/>
                ))}
            </PortfolioContent>
        </PortfolioWrapper>
    )
}

export default Portfolio
