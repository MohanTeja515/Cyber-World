import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import Avatar from "@material-ui/core/Avatar";
import {
  faCircleQuestion,
  faCommentSms,
  faCube,
  faDisplay,
  faFileCircleQuestion,
  faFloppyDisk,
  faNetworkWired,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Main = styled.div`
  /* margin-top: 86px; */
  @media (max-width: 992px) {
    display: none;
  }
  position: fixed;
  color: #9fef00 !important;
  min-width: 250px;
  max-width: 250px;
  z-index: 1001;
  background: #111927;
  bottom: 0;
  top: 70px;
  box-shadow: 0 0.75rem 1.5rem rgb(18 38 63 / 3%);
  height: 100vh;
  left: 0;
`;

const Div1 = styled.div`
  text-align: center !important;
  padding-bottom: 0.5rem !important;
  padding-top: 2rem !important;
  display: flex;
  align-items: center;
  margin-left: 35%;
`;

const Profilepic = styled.div`
  padding: 6px;
  border: 2px dashed #9fef00;
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  vertical-align: middle;
  display: flex;
  align-items: center;
`;

const Avatar1 = styled(Avatar)`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  margin-left: 4px;
`;

const Div2 = styled.div`
  margin-left: 30%;
`;

const P1 = styled.p`
  font-weight: 500;
  font-size: 16px !important;
  color: #d8dde9 !important;
  margin-bottom: -0.5rem !important;
`;

const P2 = styled.p`
  color: #a4b1cd !important;
  margin-bottom: 0.25rem !important;
  margin-left: 13%;
`;

const P3 = styled.p`
  margin-top: 0;
  margin-left: 0.4rem;
  span {
    background-color: #1a2332;
    display: inline-block;
    font-weight: 500;
    line-height: 0;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    color: #bdc7db;
    padding: 0.7em;
    font-size: 12px;
    i {
      color: #9fef00 !important;

      font-weight: 900;
    }
    span {
      margin-left: 0.1rem;
      font-weight: 500;
      text-align: center;
      white-space: nowrap;
      color: #bdc7db;
    }
  }
`;

const NavBar = styled.div`
  @media (min-width: 992px) {
    padding-bottom: 90px;
  }
  padding: 0 0 30px;
  color: #9fef00 !important;
  ul {
    padding-left: 0;
    list-style: none;
    margin: 0;

    li {
      
      display: block;
      width: 100%;
      padding: 12px 20px !important;
      letter-spacing: 0.05em;
      cursor: default;
      font-size: 13px;
      text-transform: uppercase;
      color: #a4b1cd;
      font-weight: 600;

      span {
        display: flex;
        align-items: center;
        margin-left: 10px;
        font-size: 12px;
      }
    }
  }
`;

const Sidebar = () => {
  
    
  return (
    <Main>
      <div>
        <Div1>
          <Profilepic>
            <Avatar1
              alt="Remy Sharp"
              src="https://www.gravatar.com/avatar/2e2e4ef64b2c470bdc84bb634b08f7e1?d=robohash"
              sx={{ width: 30, height: 30 }}
            />
          </Profilepic>
        </Div1>
        <Div2>
          <P1>{localStorage.getItem("username")}</P1>
          <P2>Free</P2>
          <P3>
            <span>
              <i>
                <FontAwesomeIcon icon={faCube} />
              </i>
              <span>{localStorage.getItem("points")}</span>
            </span>
          </P3>
        </Div2>
      </div>
      <NavBar>
        <ul>
          <li>LEARN</li>
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "#9fef00" : "#a4b1cd",
              })}
              className={({ isActive }) =>
                `nav_link${isActive ? " active" : ""}`
              }
            >
              <span>
                <i>
                  <FontAwesomeIcon icon={faDisplay} />
                </i>
                <span>Dashboard</span>
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/modules"
              style={({ isActive }) => ({
                color: isActive ? "#9fef00" : "#a4b1cd",
              })}
              className={({ isActive }) =>
                `nav_link${isActive ? " active" : ""}`
              }
            >
              <span>
                <i>
                  <FontAwesomeIcon icon={faFloppyDisk} />
                </i>
                <span>Modules</span>
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/paths"
              style={({ isActive }) => ({
                color: isActive ? "#9fef00" : "#a4b1cd",
              })}
              className={({ isActive }) =>
                `nav_link${isActive ? " active" : ""}`
              }
            >
              <span>
                <i>
                  <FontAwesomeIcon icon={faNetworkWired} />
                </i>
                <span>Paths</span>
              </span>
            </NavLink>
          </li>
          <li>PRACTICALS</li>
          <li>
            <NavLink
              to="/labs"
              style={({ isActive }) => ({
                color: isActive ? "#9fef00" : "#a4b1cd",
              })}
              className={({ isActive }) =>
                `nav_link${isActive ? " active" : ""}`
              }
            >
              <span>
                <i>
                  <FontAwesomeIcon icon={faFileCircleQuestion} />
                </i>
                <span>Labs</span>
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/ctfs"
              style={({ isActive }) => ({
                color: isActive ? "#9fef00" : "#a4b1cd",
              })}
              className={({ isActive }) =>
                `nav_link${isActive ? " active" : ""}`
              }
            >
              <span>
                <i>
                  <FontAwesomeIcon icon={faCircleQuestion} />
                </i>
                <span>CTF's</span>
              </span>
            </NavLink>
          </li>
          <li>GET HELP</li>
          <li>
            <NavLink
              to="/help-center"
              style={({ isActive }) => ({
                color: isActive ? "#9fef00" : "#a4b1cd",
              })}
              className={({ isActive }) =>
                `nav_link${isActive ? " active" : ""}`
              }
            >
              <span>
                <i>
                  <FontAwesomeIcon icon={faFileCircleQuestion} />
                </i>
                <span>Help Center</span>
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/faq"
              style={({ isActive }) => ({
                color: isActive ? "#9fef00" : "#a4b1cd",
              })}
              className={({ isActive }) =>
                `nav_link${isActive ? " active" : ""}`
              }
            >
              <span>
                <i>
                  <FontAwesomeIcon icon={faCircleQuestion} />
                </i>
                <span>FAQ</span>
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/discord"
              style={({ isActive }) => ({
                color: isActive ? "#9fef00" : "#a4b1cd",
              })}
              className={({ isActive }) =>
                `nav_link${isActive ? " active" : ""}`
              }
            >
              <span>
                <i>
                  <FontAwesomeIcon icon={faCommentSms} />
                </i>
                <span>Discord</span>
              </span>
            </NavLink>
          </li>
        </ul>
      </NavBar>
    </Main>
  );
};

export default Sidebar;
