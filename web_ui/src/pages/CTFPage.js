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

const ToDo = styled.div`
  /* display: flex;
  align-items: center;
  flex-wrap: nowrap; */
`

const CTFPage = () => {

  const [ctf, setctf] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`http://127.0.0.1:8000/ctfs/`);
                setctf(res.data);
                
            }
            catch (err) {

            }
        }
        fetchData();
    }, []);

  const allctf = ctf.map((ctfsid) => (
    <ToDo>
      <Boxes key={ctfsid.id}
        place = 'ctfs'
        id = {ctfsid.id}
        title={ctfsid.ctfs_title}
        image={ctfsid.ctfs_photos}
        level={ctfsid.ctfs_level}
        difficulty={ctfsid.ctfs_difficulty}
        category={ctfsid.ctfs_area}
        sections={ctfsid.ctfs_sections}
        points={ctfsid.ctfs_points_minus}
        added={ctfsid.ctfs_points_add}
        slug={ctfsid.ctfs_slug}
      />
    </ToDo>
  ));


  return (
    <Container>
      <Main>
        <Header />
        <Wrap>
          <Sidebar />
          <Content>{allctf}</Content>
        </Wrap>
      </Main>
    </Container>
  );
};

export default CTFPage;
