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
`;

const LabsPae = () => {
  const [labs, setlabs] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`http://127.0.0.1:8000/labs/`);
                setlabs(res.data);
                
            }
            catch (err) {

            }
        }
        fetchData();
    }, []);

  const modulecontents = labs.map((labid) => (
    <Boxes
      title={labid.lab_title}
      image={labid.lab_photos}
      level={labid.lab_level}
      difficulty={labid.lab_difficulty}
      category={labid.lab_area}
      sections={labid.lab_sections}
      points={labid.lab_points_minus}
      added={labid.lab_points_add}
      slug={labid.lab_slug}
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

export default LabsPae;
