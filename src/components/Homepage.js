import React from "react";
import styled from "styled-components";
import ImgCarousel from "./ImgCarousel";
import Viewers from "./Viewers";


function Homepage() {
  return (
    <Container>
      <ImgCarousel />
      <Viewers />
    </Container>
  );

}

export default Homepage;

const Container = styled.main`
  min-height: calc(100vh - 70px);
  position: relative;
  padding: 0 calc(3.5vw + 5px);
  overflow-x: hidden;
  color: var(--text-primary);

  &:before {
    content: "";
    position: absolute;
    background: url("/images/home-background.png") center center;
    background-size: cover;
    background-repeat: no-repeat;

    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;
