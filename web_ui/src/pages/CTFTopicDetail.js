import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnglesRight,
  faAngleDoubleLeft,
} from "@fortawesome/free-solid-svg-icons";

const Form = styled.div`
  justify-content: center !important;
  display: flex;
  flex-wrap: wrap;
  margin-right: -12px;
  margin-left: -12px;
`;

const Main = styled.div`
  padding-top: 3rem !important;
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1.25rem;
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #1a2332;
  background-clip: border-box;
  border: 0 solid #1a2332;
  border-radius: 0.25rem;
`;

const Main1 = styled.div`
  padding: 0.5rem !important;
`;

const MainForm = styled.form``;

const MainDiv = styled.div`
  margin-bottom: 1rem;
  label {
    font-size: 17px !important;
  }
  input {
    background-color: #111927 !important;
    font-size: 15px;
    height: 54px;
    color: #a4b1cd;
    display: block;
    width: 100%;
    padding: 0.47rem 0.75rem;
    font-weight: 400;
    line-height: 1.5;
    background-clip: padding-box;
    border: 1px solid #1a2332;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    letter-spacing: 1px;
  }
`;

const LoginButton = styled.div`
  margin-top: 1rem !important;
  button {
    height: 54px;
    &:not(:disabled) {
      cursor: pointer;
    }
    font-size: 15px !important;
    position: relative;
    display: inline-block;
    overflow: hidden;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    width: 100%;
    color: #fff;
    background-color: #0086ff;
    border-color: #0086ff;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    border: 1px solid transparent;
    padding: 0.47rem 0.75rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
`;

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
`;

const CTFTopicDetail = (props) => {
  const [topic, settopic] = useState([]);

  const { id } = useParams();

  useState(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://127.0.0.1:8000/ctfs/ctfs-topic/${id}/`
        );
        settopic(res.data);
      } catch (err) {}
    };
    fetchData();
  }, [topic, id]);

  const createTopicDescription = () => {
    return { __html: topic.ctfs_topic_description };
  };

  const createTopicContent = () => {
    return { __html: topic.ctfs_topic_content };
  };

  const [flag, setflag] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault()
    try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        const {data} = await axios.post(
          `http://127.0.0.1:8000/ctfs/ctfs-topic/1/submit/`,
          { "flag": flag },
          config
        );
        console.log(data);
      } catch (err) {}
    };

  return (
    <Container>
      <Content>
        <h1>
          {topic.ctfs_topic_number}. {topic.ctfs_topic_title}
        </h1>
        <div dangerouslySetInnerHTML={createTopicDescription()} />
      </Content>
      <Content>
        <div dangerouslySetInnerHTML={createTopicContent()} />
      </Content>
      <Content>
        <Form>
          <Main>
            <Main1>
              <MainForm onSubmit={submitHandler}>
                <MainDiv>
                  <label htmlFor="flag">FLAG</label>
                  <input
                    type="text"
                    name="flag"
                    value={flag} 
                    onChange={(e) => setflag(e.target.value)}
                    placeholder="CyberWorld{...}"
                  />
                </MainDiv>
                <LoginButton>
                  <button type="submit">Submit</button>
                </LoginButton>
              </MainForm>
            </Main1>
          </Main>
        </Form>
      </Content>
      <Content>
        <LinksOpp>
          <Link to="/">
            <FontAwesomeIcon icon={faAngleDoubleLeft} />
            <div>back</div>
          </Link>
          <Link to="/">
            <FontAwesomeIcon icon={faAnglesRight} />
            <div>front</div>
          </Link>
        </LinksOpp>
      </Content>
    </Container>
  );
};

export default CTFTopicDetail;
