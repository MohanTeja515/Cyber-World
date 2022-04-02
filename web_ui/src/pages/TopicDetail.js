import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAnglesRight,
    faAngleDoubleLeft
  } from "@fortawesome/free-solid-svg-icons";

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

const LinksOpp = styled.div`
    display: flex;
    justify-content: space-between;
    a {
        display: flex;
        flex-direction: column;
        margin: 1rem;
        align-items: center;
        div {
            margin-top: 5px;
        }
    }
`

const TopicDetail = (props) => {
    const [topic, settopic] = useState([]);

  const { id } = useParams();

  useState(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://127.0.0.1:8000/modules/topic/${id}/`
        );
        settopic(res.data);
      } catch (err) {}
    };
    fetchData();
  }, [topic, id]);

  

  const createTopicDescription = () => {
    return { __html: topic.topic_description };
  };

  const createTopicContent = () => {
    return { __html: topic.topic_content };
  };

  return (
    <Container>
        <Content>
            <h1>{topic.topic_number}. {topic.topic_title}</h1>
            <div dangerouslySetInnerHTML={createTopicDescription()} />
        </Content>
        <Content>
            <div dangerouslySetInnerHTML={createTopicContent()} />
        </Content>
        <Content>
            <LinksOpp>
                <Link to='/'>
                    <FontAwesomeIcon icon={faAngleDoubleLeft} />
                    <div>back</div>
                </Link>
                <Link to ='/'>
                <FontAwesomeIcon icon={faAnglesRight} />
                <div>front</div>
                </Link>
            </LinksOpp>
        </Content>
    </Container>
  )
}

export default TopicDetail