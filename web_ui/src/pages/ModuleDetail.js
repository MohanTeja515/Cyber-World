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

const ModuleDetail = (props) => {
  const [module, setmodule] = useState([]);
  const [topic, settopic] = useState([]);

  const { slug, id } = useParams();

  useState(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://127.0.0.1:8000/modules/${slug}/`);
        setmodule(res.data);
      } catch (err) {}
    };
    fetchData();
  }, [module, slug]);

  useState(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://127.0.0.1:8000/modules/${id}/topics/`
        );
        settopic(res.data);
      } catch (err) {}
    };
    fetchData();
  }, [topic, id]);

  const createModuleDescription = () => {
    return { __html: module.module_description };
  };

  const createModuleContent = () => {
    return { __html: module.module_content };
  };

  return (
    <Container>
      <Content>
        <Main>
          <Title>
            <h1>{module.module_area}</h1>
            <h2>
              {module.module_level}. {module.module_title}
            </h2>
            <Content dangerouslySetInnerHTML={createModuleDescription()} />
            The number of topics in this module are {module.module_sections}
          </Title>
          <Image>
            <img src={props.image} alt={props.title} width={803} height={425} />
          </Image>
        </Main>
      </Content>
      <Content>
        <h1>Module Content</h1>
        <div dangerouslySetInnerHTML={createModuleContent()} />
      </Content>
      <Content>
        <h1>Module Topics List</h1>
        {topic.map((topicid) => (
          <Link to={`/topic/${topicid.topic_slug}`} key={topicid.id}>{topicid.topic_title}</Link>
        ))}
      </Content>
    </Container>
  );
};

export default ModuleDetail;
