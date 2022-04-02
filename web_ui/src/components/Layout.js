import React, { useEffect } from "react";
import Header from "./Header";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import { connect } from "react-redux";
import { checkAuthenticated, load_user } from "../redux/actions/auth";

const Container = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
`;

const Wrap = styled.div`
  display: flex;
`;

const Layout = ({ checkAuthenticated, load_user, props }) => {
  useEffect(() => {
    checkAuthenticated();
    load_user();
  }, [checkAuthenticated, load_user]);
  return (
    <Container>
      <Header />
      <Wrap>
        <Sidebar />
        {props.children}
      </Wrap>
    </Container>
  );
};

export default connect(null, { checkAuthenticated, load_user })(Layout);
