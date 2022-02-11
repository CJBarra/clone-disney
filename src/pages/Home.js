import React, { Suspense } from "react";
import styled from "styled-components";

import CircularProgress from "../components/CircularProgress";
// lazy loading components

const SlickCarousel = React.lazy(() => import('../components/SlickCarousel'));
const Viewers = React.lazy(() => import('../components/Viewers'));
const Movies = React.lazy(() => import('../components/Movies'));

function Homepage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Container>
        <SlickCarousel />
        <Viewers />
        <Movies />
      </Container>
    </Suspense>
  );

}

export default Homepage;

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;

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
