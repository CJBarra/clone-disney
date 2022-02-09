import React from "react";
import styled from "styled-components";

import { imgUrl } from "../app/helpers";

function Header() {
  
  return (
    <Nav>
      <Logo src={imgUrl + "logo.svg"} alt="Disney plus logo" />
      <NavMenu>
        <a href="/"><img src={imgUrl + 'home-icon.svg'} alt="home" /><span>home</span></a>
        <a href="/"><img src={imgUrl + 'search-icon.svg'} alt="search" /><span>search</span></a>
        <a href="/"><img src={imgUrl + 'watchlist-icon.svg'} alt="watchlist" /><span>watchlist</span></a>
        <a href="/"><img src={imgUrl + 'original-icon.svg'} alt="originals" /><span>originals</span></a>
        <a href="/"><img src={imgUrl + 'movie-icon.svg'} alt="movies" /><span>movies</span></a>
        <a href="/"><img src={imgUrl + 'series-icon.svg'} alt="series" /><span>series</span></a>
      </NavMenu>
      <UserImg src={imgUrl + '500_92-origin.png'} alt="user" />
    </Nav>
  );
}

export default Header;

// ------------ Nav Menu ------------ //
const Nav = styled.nav`
  display: flex;
  height: 70px;
  padding: 0 20px;
  align-items: center;
  background: var(--bg-primary);
  color: var(--text-primary);
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 20px;
  align-items: center;

  a{
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
   
    img{
      height: 20px;
    }

    span{
      position: relative;
      font-size: 14px;
      letter-spacing: 1px;
      text-transform: uppercase;
      color: var(--text-primary);

      &:after{
        background: var(--bg);
        position: absolute;
        height: 2px;
        content: "";
        opacity: 0;

        left: 0;
        right: 0;
        bottom: -6px;
        transform-origin: left center;
        transform: scaleX(0);
      }
    }

    &:hover{
      span:after{
        transform: scaleX(1);
        transition: all 0.2s ease-in-out, transform 0.4s;
        opacity: 1;
      }
    }
  }
`;

// ------------ User Image ------------ //

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow-x: hidden;
  cursor: pointer;
`;