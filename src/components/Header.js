import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";

import { imgUrl } from "../app/helpers";
import { auth } from "../firebase";
import { selectUserName, selectUserPhoto, setUserLoginDetails, setUserSignOutState } from "../features/user/userSlice";


function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  /*
  * Sign in using Google popup.
  * const provider = new GoogleAuthProvider();
  * addScope to provider.
  * const result = await signInWithPopup(auth, provider);
  * */
  const provider = new GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user);
        navigate('/');
      }
    })
  }, [userName]);

  const handleAuth = () => {
    // [Handle User Exists]
    if (!userName) {
      signInWithPopup(auth, provider).then((result) => {
        // if user does not exist, dispatch setUser state to store and update 
        setUser(result.user);
      }).catch((error) => {
        alert(error.message);
      })
    } else if (userName) {
      // If user exists, dispatch setUserSignOutState and update store
      auth.signOut().then(() => {
        dispatch(setUserSignOutState())
        navigate('/login')
      }).catch((err) => alert(err.message))
    }
  }

  const setUser = (user) => {
    dispatch(setUserLoginDetails({
      name: user.displayName,
      email: user.email,
      photo: user.photoURL,
    }))
  }


  return (
    <Nav>
      <Logo src={imgUrl + "logo.svg"} alt="Disney plus logo" />

      {!userName ? (<LoginBtn onClick={handleAuth}>Login</LoginBtn>) : (
        <>
          <NavMenu>
            <a href="/"><img src={imgUrl + 'home-icon.svg'} alt="home" /><span>home</span></a>
            <a href="/"><img src={imgUrl + 'search-icon.svg'} alt="search" /><span>search</span></a>
            <a href="/"><img src={imgUrl + 'watchlist-icon.svg'} alt="watchlist" /><span>watchlist</span></a>
            <a href="/"><img src={imgUrl + 'original-icon.svg'} alt="originals" /><span>originals</span></a>
            <a href="/"><img src={imgUrl + 'movie-icon.svg'} alt="movies" /><span>movies</span></a>
            <a href="/"><img src={imgUrl + 'series-icon.svg'} alt="series" /><span>series</span></a>
          </NavMenu>

          <SignOutContainer className="anchor">
            <UserImg src={userPhoto} alt={userName} onClick={handleAuth} />
            <DropDown>
              <span onClick={handleAuth}>Sign Out</span>
            </DropDown>
          </SignOutContainer>
        </>
      )}
    </Nav>
  );
}

// ----------- [Styled Components] ----------- // 

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
    text-decoration: none;
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
        transition: all 250ms ease-in-out, transform 400ms;
        opacity: 1;
      }
    }
  }
`;

const LoginBtn = styled.button`
  display: flex;
  height: 40px;
  padding: 0 20px;
  border: 1px solid var(--text-primary);
  border-radius: 6px;
  margin-left: auto;
  margin-right: 10px;
  align-items: center;
  background: var(--bg-primary);
  color: var(--text-primary);

  font-size: 16px;
  font-weight: 400;
  text-transform: capitalize;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 240ms ease-in-out;

  &:hover {
    background: var(--text-primary);
    color: var(--btn-dark);
  }
`;

// ------------ User Image ------------ //

const UserImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow-x: hidden;
  cursor: pointer;
`;

const DropDown = styled.div`
  width: 100px;
  position: absolute;
  top: 78px;
  right: 0;
  margin-right: 20px;
  
  font-size: 12px;
  font-weight: 400;
  text-transform: uppercase;
  text-align: right;
  letter-spacing: 1px;
  z-index: 1;
  opacity: 0;

  span {
    width: 100%;
    padding: 10px;
    border-right: 2px solid var(--text-primary);
    border-bottom: 2px solid var(--text-primary);
    border-bottom-right-radius: 4px;
    background: var(--bg-primary);
    transition: all 240ms ease;
    
    &:hover{
      background: var(--text-muted);
      color: var(--bg-dark);
      cursor: pointer;
    }
  }
`;


const SignOutContainer = styled.div`
  &:hover{
    ${DropDown} {
      opacity: 1;
      transition: all 240ms ease;
    }
  }
`;



export default Header;