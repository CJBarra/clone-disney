import React from "react";
import styled from "styled-components";
import { imgUrl } from "../app/helpers";

function Login() {
  return (
    <Container>
      <Content>
        <LogoBarOne src={imgUrl + "cta-logo-one.svg"} />
        <RegisterBtn>get all three</RegisterBtn>
        <Description>
          Disney+ gives you something for every mood, all in one place. With
          entertainment from Disney, Pixar, Marvel, Star Wars™, National
          Geographic and Star, there's always something exciting to watch. Watch
          the latest releases, Original series and movies, classic films,
          throwbacks and so much more.
        </Description>
        <LogoBarTwo src={imgUrl + "cta-logo-two.png"} />
      </Content>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    background-image: url("/images/login-background.jpg");
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    z-index: -1;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 650px;
  width: 80%;
  padding: 80px 40px;
`;

const LogoBarOne = styled.img``;
const LogoBarTwo = styled.img``;

const RegisterBtn = styled.a`
  width: 100%;
  padding: 12px 0;
  margin-top: 12px;
  margin-bottom: 16px;
  border-radius: 6px;
  background-color: var(--btn-primary);

  font-size: 18px;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  transition: all 240ms ease;
  cursor: pointer;

  &:hover {
    background-color: var(--btn-primary-hover);
  }
`;

const Description = styled.p`
  font-size: 14px;
  letter-spacing: 1px;
  text-align: left;
  line-height: 1.5;
`