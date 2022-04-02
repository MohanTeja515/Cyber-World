import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCube } from "@fortawesome/free-solid-svg-icons";

const Linkto = styled(Link)`
  img {
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    height: 15rem;
    vertical-align: middle;
    border-style: none;
    
  }
`;

const Card = styled.div`
  margin-bottom: 24px;
  box-shadow: 0 0.75rem 1.5rem rgb(18 38 63 / 3%);
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #1a2332;
  background-clip: border-box;
  border: 0 solid #1a2332;
  border-radius: 0.25rem;
  justify-content: space-evenly;
  margin: 10px;
  padding: 10px;
`;

const Title = styled.div`
  flex: 1 1 auto;
  min-height: 1px;
  padding-left: 1.25rem;
  padding-top: 0.8rem;
  h4 {
    text-transform: uppercase;
    font-size: 15px;
    margin: 0 0 7px;
    font-weight: 500;
    margin-top: 0 !important;
    color: #cad2e2;
    line-height: 1.2;
    word-wrap: break-word;
    a {
      color: #d8dde9 !important;
      outline: none !important;
      text-decoration: none !important;
      background-color: transparent;
    }
  }
`;

const Tags = styled.div`
  line-height: 1.8;
  margin-bottom: 1rem;
  align-items: center;
  width: 75%;
  margin-left: 0.5rem;
  letter-spacing: 0.1rem;
`;

const Span1 = styled.span`
  font-size: 13px !important;
  color: #d8dde9;
  background-color: rgba(216, 221, 233, 0.18);
  margin-right: 0.25rem !important;
  display: inline-block;
  padding: 0.25em 0.4em;
  font-weight: 500;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

const Span = styled.span`
  font-size: 13px !important;
  margin-right: 0.25rem !important;
  display: inline-block;
  padding: 0.25em 0.4em;
  font-weight: 500;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  color: #9fef00;
  background-color: rgba(159, 239, 0, 0.18);
`;

const Points = styled.div`
  border-radius: 0 0 0.25rem 0.25rem;
  padding: 1.25rem;
  background-color: #111927;
  border-top: 0 solid #1a2332;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -12px;
  margin-left: -12px;
`;

const One = styled.div`
  position: relative;
  width: 100%;
  padding-right: 12px;
  padding-left: 12px;
`;

const Unlock = styled.div`
  position: relative;
  display: inline-flex;
  vertical-align: middle;
`;

const Button = styled.button`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  cursor: pointer;
  position: relative;
  flex: 1 1 auto;
  padding: 0.25rem 0.5rem;
  font-size: 0.765625rem;
  line-height: 1.5;
  border-radius: 0.2rem;
  color: #fff;
  background-color: #1a2332;
  border-color: #1a2332;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  border: 1px solid transparent;
`;

const Total = styled(Button)`
  margin-left: -1px;
  color: #d8dde9 !important;
  border-color: #1a2332;
  background-color: transparent;
  border: 1px solid #1a2332;
`;

const Cube = styled.div`
  -webkit-font-smoothing: antialiased;
  display: inline-block;
  font-style: normal;
  font-variant: normal;
  text-rendering: auto;
  line-height: 1;
  position: relative;
  font-family: Font Awesome\5 Duotone;
  font-weight: 900;
  margin-right: 0.25rem !important;
  span {
    color: #9fef00;
    margin-left: 2px;
  }
`;

const Two = styled.div`
  position: relative;
  width: 100%;
  margin-top: 12px;
  margin-left: 12px;
  margin-right: 12px;
  cursor: pointer;
  display: block;
  width: 100%;
  padding: 0.25rem 0.5rem;
  font-size: 0.765625rem;
  line-height: 1.5;
  border-radius: 0.2rem;
  color: #9fef00;
  border-color: #9fef00;
  font-weight: 400;
  text-align: center;
  /* vertical-align: middle; */
  user-select: none;
  /* background-color: transparent; */
  border: 1px solid #9fef00;;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

const Icon = styled.div`
  -webkit-font-smoothing: antialiased;
    display: inline-block;
    font-style: normal;
    font-variant: normal;
    text-rendering: auto;
    line-height: 1;
    position: relative;
    font-family: Font Awesome\ 5 Duotone;
    font-weight: 900;
    margin-right: 0.25rem!important;
    span {
      margin-left: 0.3rem;
    }
`
const Boxes = (props) => {
  
  return (
    <Card>
      <Linkto to={`/${props.place}/${props.slug}/${props.id}`}>
        <img
          src={props.image}
          alt={props.title}
          width = {803}
          height={425}
        />
      </Linkto>
      <Title>
        <h4>
          <Link to={`/${props.place}/${props.slug}/${props.id}`}>{props.title}</Link>
        </h4>
        <p />
      </Title>
      <Tags>
        <Span1>Level {props.level}</Span1>
        <Span>{props.difficulty}</Span>
        <Span>{props.category} </Span>
        <Span>{props.sections} Sections</Span>
        <Span1>+{props.added}</Span1>
      </Tags>
      <Points>
        <Row>
          <One>
            <div>
              <Unlock>
                <Button>Unlock For</Button>
                <Total>
                  <Cube>
                    <FontAwesomeIcon icon={faCube} />
                    <span> {props.points}</span>
                  </Cube>
                </Total>
              </Unlock>
            </div>
          </One>
          <Two>
              <Icon>
                <FontAwesomeIcon icon={faCube} />
                <span>Unlock</span>
              </Icon>
          </Two>
        </Row>
      </Points>
    </Card>
  );
};

export default Boxes;
