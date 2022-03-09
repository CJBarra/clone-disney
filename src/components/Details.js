import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { imgUrl } from "../app/helpers";
import db from "../firebase";

const Details = () => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});

  useEffect(() => {
    async function getDocumentReference() {
      const document = await getDoc(doc(db, 'movies', id));
      
      if (document.exists()) {
        return setDetailData(document.data());
      }
      else {
        return Promise.reject(Error('No document under id: ', id));
      }
    }

    getDocumentReference();
  }, [id]) // [useEffect END]

  return (
    <Container id="detail--container">
      <Backdrop className="detail--backgroundImg">
        <img src={detailData.backgroundImg} alt={detailData.title} />
        <GradientMask></GradientMask>
      </Backdrop>
      <Title className="detail--titleImg">
        <img src={detailData.titleImg} alt={detailData.title} />
      </Title>
      <ControlBlock className="detail--control-wrap">
        <ControlBlockInner className="detail--control-inner">
          <PlayBtn id="control--play">
            <img src={imgUrl + "play-icon-white.png"} alt="play media button" />
            <span>play</span>
          </PlayBtn>
          <TrailerBtn id="control--trailer">  
            <span>trailer</span>
          </TrailerBtn>
          <AddToPlaylistBtn id="control--add">
            <span className="add" />
          </AddToPlaylistBtn>
          <GroupWatchBtn id="control--groupwatch">
            <img src={imgUrl + "group-icon.png"} alt="group watch button" />
          </GroupWatchBtn>
        </ControlBlockInner>
      </ControlBlock>
      <SubtitleTags className="detail--subtitle">{detailData.subTitle}</SubtitleTags>
      <Synopsis className="detail--synopsis">
        {detailData.description}
      </Synopsis>
    </Container>
  );
}

// ----------- [Styled Components] ----------- // 

const Container = styled.div`
  position: relative;
  top: 68px;
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  overflow-x: hidden;


  /* Media */
  @media(max-width: 768px){
    top: 0;

    .detail--titleImg img{
      width: 100%;
    }
  }
  @media(max-width: 374px){
    .detail--subtitle, .detail--synopsis{
      font-size: 14px;
    }

    #control--play{
      margin-right: 8px;
      padding: 0 8px;
    }

    #control--add{
      margin-right: 8px;
    }
  }
`;

const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100vw;
    object-fit: cover;
  }
`;

const GradientMask = styled.div`
  background-image: radial-gradient(farthest-side at 73% 21%, transparent, rgb(26, 29, 41));
  position: absolute;
  inset: 0px;
`

const Title = styled.div`
  display: flex;
  width: 100%;
  min-height: 170px;
  align-items: flex-end;
  justify-content: flex-start;
  margin: 0 auto;
  padding-top: 50px;
  padding-bottom: 16px;
  
  img {
    min-width: 100px;
    max-width: 341px;
    width: 35vw;

  }
`;

const ControlBlock = styled.div`
  max-width: 874px;
`

const ControlBlockInner = styled.div`
  display: flex;
  min-height: 50px;
  align-items: center;
  flex-flow: row nowrap;
  margin: 20px 0;
`;

const PlayBtn = styled.button`
  display: flex;
  align-items: center;
  height: 50px;
  padding: 0 20px;
  border: none;
  border-radius: 6px;
  margin-right: 16px;
  background: var(--btn-primary);

  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 240ms ease-in-out;
  color: var(--text-primary);

  &:hover {
    background: var(--btn-primary-hover);
  }

  @media(max-width: 768px){
    height: 40px;
    font-size: 12px;
    padding: 0 16px;
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

    font-size: 30px;
    font-weight: 600;
    font-family: courier;
    color: var(--text-primary);
  }

  &:hover {
    background: var(--text-muted);
  }

  @media(max-width: 768px){
    width: 36px;
    height: 36px;
  }
`;

const GroupWatchBtn = styled(AddToPlaylistBtn)``;

const SubtitleTags = styled.div`
  min-height: 20px;
  font-size: 14px;
  margin-top: 20px;
`;

const Synopsis = styled.div`
  max-width: 876px;
  font-size: 20px;
  margin-top: 16px;
  line-height: 1.4;
  
  @media(max-width: 768px){
    font-size: 16px;
  }
`;



export default Details;