import React from "react";
import GlobalStyle from "../theme/GlobalStyle";
import Navbar from "../components/Navbar";
import Container from "../layouts/Container";
import Main from "../section/Main";
import About from "../section/About";
import Portfolio from "../section/Portfolio";
import Contact from "../section/Contact";
import Helmet from "react-helmet";

const index = () => {
  return (
    <div>
    <Helmet title="dev-wicak"/>
      <GlobalStyle />
      <Navbar />
      <Container>
        <Main />
        <About />
        <Portfolio />
        <Contact />
      </Container>
    </div>
  );
};

export default index;
