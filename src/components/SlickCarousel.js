import React from "react";
import styled from "styled-components";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { imgUrl } from "../app/helpers";

const SlickCarousel = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Carousel {...settings}>
      <Wrapper>
        <img src={imgUrl + "slider-badag.jpg"} alt="" />
      </Wrapper>
      <Wrapper>
        <img src={imgUrl + "slider-badging.jpg"} alt="" />
      </Wrapper>
      <Wrapper>
        <img src={imgUrl + "slider-scale.jpg"} alt="" />
      </Wrapper>
      <Wrapper>
        <img src={imgUrl + "slider-scales.jpg"} alt="" />
      </Wrapper>
    </Carousel>
  );
}

// ----------- [Styled Components] ----------- // 

const Carousel = styled(Slider)`
  padding-top: 20px;

  li.slick-active button:before {
    color: var(--text-primary) !important;
  }

  ul li button {
    &:before {
      font-size: 8px;
      color: var(--text-muted);
    }
  }

  .slick-list {
    overflow: visible;
  }

  button {
    z-index: 1;
  }
`;

const Wrapper = styled.div`
  img {
    width: 100%;
    height: 100%;
    border: 4px solid transparent;
    border-radius: 6px;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
      rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
      rgba(0, 0, 0, 0.09) 0px 32px 16px;
    transition: all 250ms ease;

    &:hover {
      border: 4px solid rgba(185, 185, 185, 0.5);
      cursor: pointer;
    }
  }
`;



export default SlickCarousel;