import { collection, onSnapshot, query } from "firebase/firestore";
import React, { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
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

  let trending = [];
  let recommend = [];
  let newToDisney = [];
  let originals = [];

  // handles document snapshot changes base on db.collection types
  useEffect(() => {
    const q = query(collection(db, 'movies'));
    const unsub = onSnapshot(q, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        switch (change.type) {
          case 'trending':
            trending.push({ id: change.id, ...change.doc.data() })
            break;

          case 'recommend':
            recommend.push({ id: change.id, ...change.doc.data() })
            break;

          case 'new':
            newToDisney.push({ id: change.id, ...change.doc.data() })
            break;

          case 'original':
            originals.push({ id: change.id, ...change.doc.data() })
            break;
        }
      })  // [docChanges END]
    })  // [unsubscribe END]
    unsub();
  })

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