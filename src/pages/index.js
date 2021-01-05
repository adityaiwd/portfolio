import React from "react";
import GlobalStyle from "./theme/GlobalStyle";
import Navbar from "./components/Navbar";
import Container from "./layouts/Container";
import Main from "./section/Main";
import About from "./section/About";
import Portfolio from "./section/Portfolio";
import Contact from "./section/Contact";

const index = () => {
  return (
    <div>
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
