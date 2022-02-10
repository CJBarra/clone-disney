import React from "react";
import styled from "styled-components";
import { imgUrl } from "../app/helpers";

function Movies() {
  return (
    <Container>
      <h4>recommended for you</h4>
      <Content>
        <Wrapper>
          <img src={imgUrl + "movies-lokiz.jpg"} alt="" />
        </Wrapper>
        <Wrapper>
          <img src={imgUrl + "movies-snowdrop.jfif"} alt="" />
        </Wrapper>
        <Wrapper>
          <img src={imgUrl + "movies-theresident.jpg"} alt="" />
        </Wrapper>
        <Wrapper>
          <img src={imgUrl + "movies-wandavis.jpg"} alt="" />
        </Wrapper>
      </Content>
    </Container>
  );
}

export default Movies;

const Container = styled.div`
  text-transform: capitalize;
`;

const Content = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;

const Wrapper = styled.div`
  border: 4px solid transparent;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
      rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
      rgba(0, 0, 0, 0.09) 0px 32px 16px;
  transition: all 240ms ease-out;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    border-color: rgba(185, 185, 185, 0.8);
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 4px;
    object-fit: cover;
  }
`;
