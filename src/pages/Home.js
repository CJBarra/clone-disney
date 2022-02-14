import React, { Suspense } from "react";
import styled from "styled-components";


// lazy loading components
const SlickCarousel = React.lazy(() => import('../components/SlickCarousel'));
const Viewers = React.lazy(() => import('../components/Viewers'));
const Trending = React.lazy(() => import('../components/SectionTrending'));
const Recommended = React.lazy(() => import('../components/SectionRecommended'));
const NewToDisney = React.lazy(() => import('../components/SectionNewToDisney'));
const Originals = React.lazy(() => import('../components/SectionOriginals'));

function Homepage() {

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Container>
        <SlickCarousel />
        <Viewers />
        <h4>trending</h4>
        <Trending />
        <h4>recommended for you</h4>
        <Recommended />
        <h4>new to disney+</h4>
        <NewToDisney />
        <h4>originals</h4>
        <Originals />
      </Container>
    </Suspense>
  );

}



// ----------- [Styled Components] ----------- // 

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

  h4 {
    text-transform: capitalize;
    color: var(--text-muted);
    letter-spacing: 1px;
  }
`;


export default Homepage;