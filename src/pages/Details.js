import { collection, getDoc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { imgUrl } from "../app/helpers";
import db from "../firebase";

function Details() {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});

  useEffect(() => {
    const docRef = collection(db, 'movies');
    // const docSnap = getDoc(docRef);

    // if () {
    //   console.log('exists');
    // } else {
    //   console.log('No data available for that :id');
    // }

  }) // [useEffect END]

  return (
    <Container>
      <Backdrop>
        <img src={imgUrl + "details-backdrop.jpg"} alt="media background " />
      </Backdrop>
      <Title>
        <img src={imgUrl + "details-title2.png"} alt="media title" />
      </Title>
      <ControlBlock>
        <PlayBtn>
          <img src={imgUrl + "play-icon-black.png"} alt="play media button" />
          <span>play</span>
        </PlayBtn>
        <TrailerBtn>
          <img src={imgUrl + "play-icon-white.png"} alt="trailer button" />
          <span>trailer</span>
        </TrailerBtn>
        <AddToPlaylistBtn>
          <span className="add" />
        </AddToPlaylistBtn>
        <GroupWatchBtn>
          <img src={imgUrl + "group-icon.png"} alt="group watch button" />
        </GroupWatchBtn>
      </ControlBlock>
      <SubtitleTags>2022 ‧ Comedy, Animation ‧ 1h 30m</SubtitleTags>
      <Synopsis>
        The untold story of one 12-year-old's dream to be named the greatest
        supervillain in the whole world.
      </Synopsis>
    </Container>
  );
}

// ----------- [Styled Components] ----------- // 

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;

  `;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  mix-blend-mode: exclusion; // <-- may delete

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Title = styled.div`
  height: 30vh;
  width: 35vw;
  min-height: 180px;
  min-width: 200px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const ControlBlock = styled.div`
  display: flex;
  align-items: center;
`;

const PlayBtn = styled.button`
  display: flex;
  align-items: center;
  height: 50px;
  padding: 0 20px;
  border: none;
  border-radius: 6px;
  margin-right: 16px;
  background: var(--text-primary);

  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 240ms ease-in-out;

  &:hover {
    background: var(--btn-primary-hover);
    color: var(--text-primary);
  }
`;

const TrailerBtn = styled(PlayBtn)`
  background: var(--btn-dark);
  border: 2px solid var(--text-primary);
  color: var(--text-primary);

  &:hover {
    background: var(--text-muted);
  }
`;

const AddToPlaylistBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 2px solid var(--text-primary);
  margin-right: 16px;
  background: var(--btn-dark);
  
  cursor: pointer;
  transition: all 240ms ease-in-out;

  .add:before {
    content: "+";
    height: 45px;
    width: 45px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 36px;
    font-weight: 600;
    font-family: courier;
    color: var(--text-primary);
  }

  &:hover {
    background: var(--text-muted);
  }
`;

const GroupWatchBtn = styled(AddToPlaylistBtn)``;

const SubtitleTags = styled.div`
  min-height: 20px;
  font-size: 14px;
  margin-top: 20px;
  `;

const Synopsis = styled.div`
  max-width: 750px;
  font-size: 20px;
  margin-top: 16px;
  line-height: 1.4;
  
  `;



export default Details;