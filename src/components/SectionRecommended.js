import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { imgUrl } from "../app/helpers";

function SectionRecommended() {
  return (
    <Container>
      <Content>
        <Wrapper>
          <Link to="/">
            <img src={imgUrl + "movies-loki.jpg"} alt="" />
          </Link>
        </Wrapper>
        <Wrapper>
          <Link to="/">
            <img src={imgUrl + "movies-snowdrop-v1.jpg"} alt="" />
          </Link>
        </Wrapper>
        <Wrapper>
          <Link to="/">
            <img src={imgUrl + "movies-theresident-v1.jpg"} alt="" />
          </Link>
        </Wrapper>
        <Wrapper>
          <Link to="/">
            <img src={imgUrl + "movies-wandavis.jpg"} alt="" />
          </Link>
        </Wrapper>
      </Content>
    </Container>
  );
}

// ----------- [Styled Components] ----------- // 
const Container = styled.div`
  padding: 0 0 26px;
  margin-bottom: 20px;

`;

const Content = styled.div`
  display: grid;
  grid-gap: 10px;
  gap: 10px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media(max-width: 992px){
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media(max-width: 768px){
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Wrapper = styled.div`
  position: relative;
  padding-top: 60%;
  border: 4px solid transparent;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
      rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
      rgba(0, 0, 0, 0.09) 0px 32px 16px;
  overflow: hidden;
  transition: all 240ms ease-out;
  cursor: pointer;

  
  img {
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    top: 0;
    left: 0;
    inset: 0;
    
    object-fit: cover;
    z-index: 1;
  }

  &:hover {
    transform: scale(1.05);
    border-color: rgba(185, 185, 185, 0.8);
  }
`;

export default SectionRecommended;