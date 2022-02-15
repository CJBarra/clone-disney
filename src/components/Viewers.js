import React from "react";
import styled from "styled-components";

import { imgUrl, videoUrl } from "../app/helpers";

function Viewers() {
  return (
    <Container>
      <Wrapper>
        <img src={imgUrl + "viewers-disney.png"} alt="disney catalog" />
        <video autoPlay={true} playsInline={true} loop={true} muted={true}>
          <source src={videoUrl + '1564674844-disney.mp4'} type='video/mp4' />
        </video>
      </Wrapper>
      <Wrapper>
        <img src={imgUrl + "viewers-marvel.png"} alt="marvel catalog" />
        <video autoPlay={true} playsInline={true} loop={true} muted={true}>
          <source src={videoUrl + '1564676115-marvel.mp4'} type='video/mp4' />
        </video>
      </Wrapper>
      <Wrapper>
        <img src={imgUrl + "viewers-national.png"} alt="national geographic catalog" />
        <video autoPlay={true} playsInline={true} loop={true} muted={true}>
          <source src={videoUrl + '1564676296-national-geographic.mp4'} type='video/mp4' />
        </video>
      </Wrapper>
      <Wrapper>
        <img src={imgUrl + "viewers-pixar.png"} alt="pixar catalog" />
        <video autoPlay={true} playsInline={true} loop={true} muted={true}>
          <source src={videoUrl + '1564676714-pixar.mp4'} type='video/mp4' />
        </video>
      </Wrapper>
      <Wrapper>
        <img src={imgUrl + "viewers-starwars.png"} alt="star wars catalog" />
        <video autoPlay={true} playsInline={true} loop={true} muted={true}>
          <source src={videoUrl + '1608229455-star-wars.mp4'} type='video/mp4' />
        </video>
      </Wrapper>
    </Container>
  );
}


// ----------- [Styled Components] ----------- // 

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-gap: 10px;
  margin-top: 40px;
  padding: 20px 0 16px;

  @media(max-width: 768px){
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  `;
  
  const Wrapper = styled.div`
  position: relative;
  border: 2px solid rgba(185, 185, 185, 0.3);
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.2) 0px 4px 2px,
  rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
  rgba(0, 0, 0, 0.09) 0px 32px 16px;
  transition: all 250ms ease-in-out;
  
  img {
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    
    object-fit: cover;
    opacity: 1;
    transition: opacity 500ms ease-in-out 0s;
    z-index: 1;
  }
  
  video {
    width: 100%;
    height: 100%;
    top: 0;
    opacity: 0;
    z-index: 0;
  }
  
  &:hover {
    border-color: rgba(185, 185, 185, 0.8);
    transform: scale(1.05);
    cursor: pointer;

    video {
      opacity: 1;
    }
  }
`;


export default Viewers;