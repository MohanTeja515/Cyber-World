import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const Container = styled.div``;

const Content = styled.div`
  margin-bottom: 24px;
  box-shadow: 0 0.75rem 1.5rem rgb(18 38 63 / 3%);
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #1a2332;
  background-clip: border-box;
  border: 0 solid #1a2332;
  border-radius: 0.25rem;
  margin: 10px;
  padding: 10px;
`;

const Content1 = styled(Content)`
  &:hover {
    background-color: #9fef00 !important;
    border-color: #9fef00 !important;
  }
`;

const Link1 = styled(Link)`
  &:hover {
    color: black;
  }
`;

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div``;

const Image = styled.div`
  img {
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    flex-shrink: 0;
    width: 100rem;
    max-width: 100%;
    height: auto;
    vertical-align: middle;
    border-style: none;
  }
`;

const CTFDetail = (props) => {
  const [ctf, setctf] = useState([]);
  const [topic, settopic] = useState([]);

  const { slug, id } = useParams();

  useState(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://127.0.0.1:8000/ctfs/${slug}/`);
        setctf(res.data);
      } catch (err) {}
    };
    fetchData();
  }, [ctf, slug]);

  useState(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://127.0.0.1:8000/ctfs/${id}/ctfs-topics/`
        );
        settopic(res.data);
      } catch (err) {}
    };
    fetchData();
  }, [topic, id]);

  const createctfDescription = () => {
    return { __html: ctf.ctfs_description };
  };

  const createctfContent = () => {
    return { __html: ctf.ctfs_content };
  };

  return (
    <Container>
      <Content>
        <Main>
          <Title>
            <h1>{ctf.ctfs_area}</h1>
            <h2>
              {ctf.ctfs_level}. {ctf.ctfs_title}
            </h2>
            <Content dangerouslySetInnerHTML={createctfDescription()} />
            The number of CTFs in this module are {ctf.ctfs_sections}
          </Title>
          <Image>
            <img
              src={ctf.ctfs_photos}
              alt={ctf.ctfs_title}
              width={803}
              height={425}
            />
          </Image>
        </Main>
      </Content>
      <Content>
        <h1>Ctf Content</h1>
        <div dangerouslySetInnerHTML={createctfContent()} />
      </Content>
      <Content>
        <h1>CTF List</h1>
        {topic.map((topicid) => (
          <Content1>
            <Link1 to={`/ctfs/${topicid.ctfs_topic_slug}`} key={topicid.id}>
              {topicid.ctfs_topic_title}
            </Link1>
          </Content1>
        ))}
      </Content>
    </Container>
  );
};

export default CTFDetail;
