import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { selectTrending } from "../features/movie/movieSlice";
import { settings } from "../app/helpers";
import { Container, ContentCarousel, Wrapper } from './SectionNewToDisney'

const SectionTrending = () => {
  const movies = useSelector(selectTrending);

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

export default SectionTrending;