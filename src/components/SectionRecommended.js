import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { selectRecommend } from "../features/movie/movieSlice";


function SectionRecommended() {
  // react-slick carousel settings
  let settings = {
    infinite: false,
    speed: 350,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        }
      }
    ]
  }
  const movies = useSelector(selectRecommend);
  return (
    <Container>
        <ContentCarousel {...settings}>
        {movies && movies.map((movie, key) => (
          <Wrapper key={key}>
            {movie.id}
            <Link to={'/details/' + movie.id}>
              <img src={movie.cardImg} alt={movie.title} />
            </Link>
          </Wrapper>
        ))}
        </ContentCarousel>
    </Container >
  );
}

// ----------- [Styled Components] ----------- // 
const Container = styled.div`
  padding: 0 0 26px;
  margin-bottom: 20px;

`;

const ContentCarousel = styled(Slider)`
  .slick-slide{
    padding: 0 5px;
  }
  
  li.slick-active button:before {
    color: var(--text-primary) !important;
  }

  ul li button {
    &:before {
      font-size: 8px;
      color: var(--text-muted);
    }
  }
  
  button {
    z-index: 1;
  }

  .slick-list{
    margin: 0 -5px;
    overflow: visible;
  }
`

const Wrapper = styled.div`
  position: relative;
  padding-top: 48%;
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