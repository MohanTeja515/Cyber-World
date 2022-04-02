import React, { useState } from "react";
import { Link, useLocation, Navigate } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";
import { signup } from "../redux/actions/auth";

const Container = styled.div`
  @media (min-width: 576px) {
    padding-top: 3rem !important;
  }
  margin-bottom: 3rem !important;
  margin-top: 3rem !important;
`;

const Content = styled.div`
  @media (min-width: 576px) {
    max-width: 540px;
  }
  width: 100%;
  padding-right: 12px;
  padding-left: 12px;
  margin-right: auto;
  margin-left: auto;
`;

const Form = styled.div`
  justify-content: center !important;
  display: flex;
  flex-wrap: wrap;
  margin-right: -12px;
  margin-left: -12px;
`;

const Login = styled.div`
  position: relative;
  width: 100%;
`;

const Div = styled.div`
  margin-bottom: 24px;
  box-shadow: 0 0.8rem 1.5rem rgb(18 38 63 / 3%);
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

const Img = styled.div`
  background-image: url(https://academy.hackthebox.com/images/login-img.png);
  padding: 7rem 10rem;
  background-size: cover;
  background-position: 50%;
  position: relative;
  text-align: center !important;
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #1a2332;
  background-clip: border-box;
  border: 0 solid #1a2332;
  border-radius: 0.25rem;
  width: 100%;
`;

const Div1 = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  opacity: 0.8;
  background: linear-gradient(90deg, #1f2d42, #2d4261);

  h5 {
    font-size: 20px !important;
    color: #fff !important;
    margin-bottom: 0.5rem;
    font-weight: 500;
    line-height: 1.2;
    margin-top: 4.5rem;
  }
  p {
    margin-bottom: 0 !important;
    margin-top: 0;
  }
  a {
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 74px;
    height: 74px;
    line-height: 74px;
    background: #1a2332;
    border-radius: 50%;
    text-align: center;
    margin-top: 4rem !important;

    img {
      position: absolute;
      vertical-align: middle;
      margin-left: -1.7rem;
      margin-top: 0.3rem;
      border-style: none;
    }
  }
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
    font-size: 13px !important;
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
  }
`;

const Remember = styled.div`
  position: relative;
  z-index: 1;
  display: block;
  min-height: 1.3125rem;
  padding-left: 1.5rem;
  -webkit-print-color-adjust: exact;
  input {
    box-sizing: border-box;
    padding: 0;
    position: absolute;
    left: 0;
    z-index: -1;
    width: 1rem;
    height: 1.15625rem;
    opacity: 0;
  }
  label {
    font-size: 13px !important;
    position: relative;
    margin-bottom: 0;
    vertical-align: top;
    &:before {
      border-radius: 0.25rem;
      background-color: #111927;
      transition: background-color 0.15s ease-in-out,
        border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
      position: absolute;
      top: 0.15625rem;
      left: -1.5rem;
      display: block;
      width: 1rem;
      height: 1rem;
      content: "";
      pointer-events: none;
      border: 1px solid #1a2332;
    }
    &:after {
      background: 50%/50% 50% no-repeat;
    }
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

const Forgot = styled.div`
  text-align: center !important;
  margin-top: 1.5rem !important;
  letter-spacing: 0.1rem;
  a {
    color: #9fef00 !important;
    span {
      font-size: 15px !important;
      color: #9fef00 !important;
    }
  }
`;

const Forgot1 = styled.div`
  text-align: center !important;
  margin-top: 1.5rem !important;
  a {
    color: #9fef00 !important;
    span {
      font-size: 15px !important;
      color: #9fef00 !important;
    }
  }
`;

const SignupPage = ({ signup, isAuthenticated }) => {
  const [accountCreated, setAccountCreated] = useState(false);
  const location = useLocation();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    re_password: "",
  });

  const { full_name, username, email, password, re_password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    if (password === re_password) {
      signup(full_name, username, email, password, re_password);
      setAccountCreated(true);
    }
  };
  if (localStorage.getItem("access")) {
    return <Navigate to="/" replace state={{ from: location }} />;
  }
  if (accountCreated) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }
  return (
    <Container>
      <Content>
        <Form>
          <Login>
            <Div>
              <Img>
                <Div1>
                  <h5>Welcome Back !</h5>
                  <p>Sign in to continue to HTB Academy</p>
                  <Link to="/">
                    <img
                      src="	https://academy.hackthebox.com/images/new-logo-htb.svg"
                      alt="cube"
                      height={55}
                    />
                  </Link>
                </Div1>
              </Img>
            </Div>
          </Login>
          <Main>
            <Main1>
              <MainForm onSubmit={(e) => onSubmit(e)}>
                <MainDiv>
                  <label for="name">Full Name</label>
                  <input
                    type="text"
                    name="full_name"
                    value={full_name}
                    onChange={(e) => onChange(e)}
                    autoComplete="name"
                    required
                    autofocus
                  />
                </MainDiv>
                <MainDiv>
                  <label for="username">Username</label>
                  <input
                    type="text"
                    name="username"
                    value={username}
                    autoComplete="username"
                    onChange={(e) => onChange(e)}
                    required
                    autofocus
                  />
                </MainDiv>
                <MainDiv>
                  <label for="email">E-Mail</label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    autoComplete="email"
                    onChange={(e) => onChange(e)}
                    required
                    autofocus
                  />
                </MainDiv>
                <MainDiv>
                  <label for="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => onChange(e)}
                    minLength="6"
                    required
                    autofocus
                  />
                </MainDiv>
                <MainDiv>
                  <label for="re_password">Confirm Password</label>
                  <input
                    type="password"
                    name="re_password"
                    onChange={(e) => onChange(e)}
                    minLength="6"
                    value={re_password}
                    required
                    autofocus
                  />
                </MainDiv>
                <Remember>
                  <input type="checkbox" name="remember" />
                  <label for="remember">
                    E-mail me product updates and offers
                  </label>
                </Remember>
                <LoginButton>
                  <button type="submit">Register</button>
                </LoginButton>
                <Forgot1>
                  <span>By registering you agree to our </span>
                  <Link to="/forgot-password">
                    <span> Terms of Service</span>
                  </Link>
                  <span>, </span>
                  <Link to="/forgot-password">
                    <span>Privacy Policy</span>
                  </Link>
                  <span> and </span>
                  <Link to="/forgot-password">
                    <span>Acceptable Use Policy</span>
                  </Link>
                </Forgot1>
                <Forgot>
                  <span>Already have an account?</span>
                  <Link to="/forgot-password">
                    <span> Login</span>
                  </Link>
                </Forgot>
              </MainForm>
            </Main1>
          </Main>
        </Form>
      </Content>
    </Container>
  );
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { signup })(SignupPage);
