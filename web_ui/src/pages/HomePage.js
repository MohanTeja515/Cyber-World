import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export const Main = styled.main`
  margin-top: 90px;
  margin-left: 250px;
  @media (max-width: 992px) {
    margin-left: 0px;
  }
`;

const Container = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
`;

const Wrap = styled.div`
  display: flex;
`

const HomePage = () => {
  return (
    <Container>
      <Main>
        <Header />
        <Wrap>
          <Sidebar />
          HomePage
        </Wrap>
      </Main>
    </Container>
  );
};

export default HomePage;
