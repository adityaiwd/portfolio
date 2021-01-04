import React from "react";
import GlobalStyle from "./theme/GlobalStyle";
import Navbar from "./components/Navbar";
import Container from "./layouts/Container";
import Main from "./section/Main";
import About from "./section/About";

const index = () => {
  return (
    <div>
      <GlobalStyle />
      <Navbar />
      <Container>
        <Main />
        <About />
      </Container>
    </div>
  );
};

export default index;
