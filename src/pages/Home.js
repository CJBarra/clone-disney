import React, { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { collection, getDocs } from "firebase/firestore";
import styled from "styled-components";

import { setMovie } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";
import db from "../firebase";


// lazy loading components
const SlickCarousel = React.lazy(() => import('../components/SlickCarousel'));
const Viewers = React.lazy(() => import('../components/Viewers'));
const Trending = React.lazy(() => import('../components/SectionTrending'));
const Recommended = React.lazy(() => import('../components/SectionRecommended'));
const NewToDisney = React.lazy(() => import('../components/SectionNewToDisney'));
const Originals = React.lazy(() => import('../components/SectionOriginals'));

function Homepage() {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  let trendings = [];
  let recommends = [];
  let newToDisneys = [];
  let originals = [];

  // handles document snapshot changes base on db.collection types
  useEffect(() => {
    // set collection reference
    const movieRef = collection(db, 'movies');
    // retrieve documents from reference
    getDocs(movieRef).then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        // search for documents by 'type' field, sort into relevant arrays.
        switch (doc.data().type) {
          case 'trending':
            trendings = [...trendings, { id: doc.id, ...doc.data() }]
            break;

          case 'recommend':
            recommends = [...recommends, { id: doc.id, ...doc.data() }]
            break;

          case 'new':
            newToDisneys = [...newToDisneys, { id: doc.id, ...doc.data() }]
            break;

          case 'original':
            originals = [...originals, { id: doc.id, ...doc.data() }]
            break;

          default:
            return;
        }
      })

      dispatch(setMovie({
        trending: trendings,
        recommend: recommends,
        newToDisney: newToDisneys,
        original: originals,
      }))
    })
  }, [userName]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MainBackground />
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
const MainBackground = styled.div`
  position: fixed;
  height: 100vh;
  width: 100%;
  top: 0;
  z-index: -3;
  background-color: var(--bg-cloned);

  &:after {
    content: "";
    position: absolute;
    inset: 0;

    background: url("/images/home-background.png") 50%/cover no-repeat fixed;    
  }
`

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;


  h4 {
    text-transform: capitalize;
    color: var(--text-muted);
    letter-spacing: 1px;
  }
`;


export default Homepage;