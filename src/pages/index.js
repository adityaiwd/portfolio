import React from "react";
import GlobalStyle from "./theme/GlobalStyle";
import Navbar from "./components/Navbar";
import Container from "./layouts/Container";
import Main from "./section/Main";

const index = () => {
  return (
    <div>
      <GlobalStyle />
      <Navbar />
      <Container>
        <Main />
      </Container>
    </div>
  );
};

export default index;
