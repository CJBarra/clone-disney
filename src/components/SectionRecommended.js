import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { selectRecommend } from "../features/movie/movieSlice";
import { settings } from "../app/helpers";
import { Container, ContentCarousel, Wrapper } from './SectionNewToDisney'

const SectionRecommended = () => {
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
    </Container>
  );
}

export default SectionRecommended;