import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faBars,
  faBezierCurve,
  faBook,
  faCircleQuestion,
  faDisplay,
  faSignOut,
  faSuitcase,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import { connect } from "react-redux";
import { logout } from "../redux/actions/auth";

const Container = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1002;
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono,
    Courier New, monospace !important;
  background-color: #1a2332 !important;
`;

const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 0.5rem 1.5rem;
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding-right: 0;
  padding-left: 0;
  margin-right: auto;
  margin-left: auto;
  width: 100%;
`;

const NavLinkTag = styled(NavLink)`
  line-height: 70px;
  outline: none !important;
  img {
    height: 30px;
    line-height: 70px;
  }
`;

const Dropdown = styled.button`
  @media (min-width: 992px) {
    display: none;
  }
  color: rgba(0, 0, 0, 0.5);
  &:focus {
    text-decoration: none;
  }
  &:hover {
    text-decoration: none;
  }
  cursor: pointer;
  border: none !important;
  padding: 0.25rem 0.75rem;
  font-size: 1.09375rem;
  line-height: 1;
  background-color: transparent;
  border-radius: 0.25rem;
  span {
    color: #fff;
    font-weight: 900;
  }
`;

const NavBar = styled.div`
  @media (min-width: 992px) {
    display: flex;
    flex-basis: auto;
  }
  display: none;
  align-items: center;
  ul {
    @media (min-width: 992px) {
      display: flex;
      justify-content: flex-end !important;
      padding-left: 0;
      list-style: none;
      flex-wrap: wrap;
      li {
        a {
          &:hover {
            color: #a7b2cd !important;
          }
          @media (min-width: 992px) {
            padding-right: 0.5rem;
            padding-left: 0.5rem;
            display: block;
            padding: 0.5rem 1rem;
            i {
            }
            span {
              margin-left: 0.4rem;
            }
          }
        }
      }
    }
  }
`;

const DropdownContent = styled.div`
  position: fixed;
  left: 0;
  padding: 0.4rem 1rem;
  padding-bottom: 1rem;
  width: 100vw;
  display: flex;
  align-items: flex-start;
  background-color: #1a2332 !important;
  flex-direction: column;
  ul {
    justify-content: flex-end !important;
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0.5rem;
    list-style: none;
    flex-wrap: wrap;
    li {
      padding: 0.2rem 0.5rem;
      display: list-item;
      text-align: -webkit-match-parent;
      display: flex;
      flex-direction: column;
      list-style: none;
      flex-wrap: wrap;
      align-items: center;
      justify-content: flex-start;
      padding-left: 0;
      margin-bottom: 0;
      a {
        font-size: 15px;
        &:hover {
          color: #a7b2cd !important;
        }
        padding-right: 0;
        padding-left: 0;
        color: #d8dde9 !important;
        margin-right: 1.5rem !important;
        display: inline;
        padding: 0.5rem 1rem;
        span {
          margin-left: 0.4rem;
        }
      }
    }
  }
`;

const SignUpButton = styled.div`
  background-color: #9fef00;
  border-color: #9fef00;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  border: 1px solid transparent;
  font-size: 0.875rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &:hover {
    background-color: #86c900;
    border-color: #7dbc00;
  }
  a {
    font-size: 15px;
    padding-right: 0;
    padding-left: 0;
    color: #1a2332 !important;
    font-weight: 900;
    display: block;
    padding: 0.5rem 1rem;
    span {
      margin-left: 0.4rem;
      color: black;
    }
  }
  div {
    font-size: 15px;
    padding-right: 0;
    padding-left: 0;
    color: #1a2332 !important;
    font-weight: 900;
    display: block;
    padding: 0.5rem 1rem;
    span {
      margin-left: 0.4rem;
    }
  }
`;

const Header = ({ logout, isAuthenticated }) => {
  const [down, setdown] = useState(false);
  const drop = () => {
    setdown(true);
  };
  const up = () => {
    setdown(false);
  };

  const logout_user = () => {
    logout();
  };

  return (
    <Container>
      <Nav>
        <Content>
          <NavLinkTag to="/">
            <img
              src="https://academy.hackthebox.com/images/logo.svg"
              alt="logo"
            />
          </NavLinkTag>
          {down ? (
            <Dropdown
              type="button"
              aria-controls="mobileMenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span>
                <FontAwesomeIcon icon={faBars} size="lg" onClick={up} />
              </span>
              <DropdownContent>
                <ul>
                  <li>
                    <a href="/">
                      <i>
                        <FontAwesomeIcon icon={faDisplay} />
                      </i>
                      <span>Dashboard</span>
                    </a>
                  </li>
                  <li>
                    <NavLink to="/modules">
                      <i>
                        <FontAwesomeIcon icon={faBook} />
                      </i>
                      <span>Courses</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/paths">
                      <i>
                        <FontAwesomeIcon icon={faBezierCurve} />
                      </i>
                      <span>Paths</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/business">
                      <i>
                        <FontAwesomeIcon icon={faSuitcase} />
                      </i>
                      <span>Business</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/faq">
                      <i>
                        <FontAwesomeIcon icon={faCircleQuestion} />
                      </i>
                      <span>FAQ</span>
                    </NavLink>
                  </li>
                  {!localStorage.getItem("access") ? (
                    <li>
                      <NavLink to="/login">
                        <i>
                          <FontAwesomeIcon icon={faUser} />
                        </i>
                        <span>Login</span>
                      </NavLink>
                    </li>
                  ) : null}
                </ul>
                {!localStorage.getItem("access") ? (
                  <SignUpButton>
                    <NavLink to="/signup">
                      <i>
                        <FontAwesomeIcon icon={faArrowUp} />
                      </i>
                      <span>Sign Up!</span>
                    </NavLink>
                  </SignUpButton>
                ) : (
                  <SignUpButton onClick={logout_user}>
                    <div>
                      <i>
                        <FontAwesomeIcon icon={faSignOut} />
                      </i>
                      <span>Log Out</span>
                    </div>
                  </SignUpButton>
                )}
              </DropdownContent>
            </Dropdown>
          ) : (
            <Dropdown
              type="button"
              aria-controls="mobileMenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span>
                <FontAwesomeIcon icon={faBars} size="lg" onClick={drop} />
              </span>
            </Dropdown>
          )}

          <NavBar>
            <ul>
              <li>
                <NavLink to="/courses">
                  <i>
                    <FontAwesomeIcon icon={faBook} />
                  </i>
                  <span>Courses</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/paths">
                  <i>
                    <FontAwesomeIcon icon={faBezierCurve} />
                  </i>
                  <span>Paths</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/business">
                  <i>
                    <FontAwesomeIcon icon={faSuitcase} />
                  </i>
                  <span>Business</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/faq">
                  <i>
                    <FontAwesomeIcon icon={faCircleQuestion} />
                  </i>
                  <span>FAQ</span>
                </NavLink>
              </li>
              {!localStorage.getItem("access") ? (
                <li>
                  <NavLink to="/login">
                    <i>
                      <FontAwesomeIcon icon={faUser} />
                    </i>
                    <span>Login</span>
                  </NavLink>
                </li>
              ) : null}
              {!localStorage.getItem("access") ? (
                <SignUpButton>
                  <NavLink to="/signup">
                    <i>
                      <FontAwesomeIcon icon={faArrowUp} />
                    </i>
                    <span>Sign Up!</span>
                  </NavLink>
                </SignUpButton>
              ) : (
                <SignUpButton onClick={logout_user}>
                  <div>
                    <i>
                      <FontAwesomeIcon icon={faSignOut} />
                    </i>
                    <span>Log Out</span>
                  </div>
                </SignUpButton>
              )}
            </ul>
          </NavBar>
        </Content>
      </Nav>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(Header);
