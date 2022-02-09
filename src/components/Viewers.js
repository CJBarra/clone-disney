import React from "react";
import styled from "styled-components";

import { imgUrl } from "../app/helpers";

function Viewers() {
  return (
    <ViewerContainer>
      <Wrapper>
        <img src={imgUrl + "viewers-disney.png"} alt="disney catalog" />
      </Wrapper>
      <Wrapper>
        <img src={imgUrl + "viewers-marvel.png"} alt="marvel catalog" />
      </Wrapper>
      <Wrapper>
        <img src={imgUrl + "viewers-national.png"} alt="national geographic catalog" />
      </Wrapper>
      <Wrapper>
        <img src={imgUrl + "viewers-pixar.png"} alt="pixar catalog" />
      </Wrapper>
      <Wrapper>
        <img src={imgUrl + "viewers-starwars.png"} alt="star wars catalog" />
      </Wrapper>
    </ViewerContainer>
  );
}

export default Viewers;

const ViewerContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-gap: 10px;
  margin-top: 40px;
  padding: 20px 0 16px;
  `;
  
  const Wrapper = styled.div`
  border: 2px solid rgba(185, 185, 185, 0.3);
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.2) 0px 4px 2px,
  rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
  rgba(0, 0, 0, 0.09) 0px 32px 16px;
  
  &:hover {
    border-color: rgba(185, 185, 185, 0.8);
    cursor: pointer;
    transition: all 250ms ease;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

  }

`;
