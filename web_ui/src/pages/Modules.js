import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from 'axios';

import Boxes from "../components/Boxes";
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
`;

const Content = styled.div`
  width: 100%;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Modules = () => {

  const [modules, setmodules] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`http://127.0.0.1:8000/modules/`);
                setmodules(res.data);
                
            }
            catch (err) {

            }
        }
        fetchData();
    }, []);

  const modulecontents = modules.map((moduleid) => (
    <Boxes key={moduleid.id}
      place = 'modules'
      id = {moduleid.id}
      title={moduleid.module_title}
      image={moduleid.module_photos}
      level={moduleid.module_level}
      difficulty={moduleid.module_difficulty}
      category={moduleid.module_area}
      sections={moduleid.module_sections}
      points={moduleid.module_points_minus}
      added={moduleid.module_points_add}
      slug={moduleid.module_slug}
    />
  ));

  return (
    <Container>
      <Main>
        <Header />
        <Wrap>
          <Sidebar />
          <Content>{modulecontents}</Content>
        </Wrap>
      </Main>
    </Container>
  );
};

export default Modules;
