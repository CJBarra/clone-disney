import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";

import { imgUrl } from "../app/helpers";
import { auth } from "../firebase";
import { selectUserName, selectUserPhoto, setUserLoginDetails, setUserSignOutState } from "../features/user/userSlice";


function Header() {
  // Handle Mobile Menu events
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // Handle User Login State
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

  const handleAuth = () => {
    // [ Handle User Login ]
    // [ If no user in state, navigate to login page, display login button wit popup ]
    if (!userName) {
      signInWithPopup(auth, provider).then((result) => {
        // [ if user does not exist, update setUser with firebase Auth credentials
        // and then dispatch setUserLoginDetails to state in userSlice ]
        setUser(result.user);
      }).catch((error) => {
        alert(error.message);
      })
    } else if (userName) {
      // [ if user exists, dispatch setUserSignOutState and update store ]
      auth.signOut().then(() => {
        dispatch(setUserSignOutState());
        navigate('/');
      }).catch((err) => alert(err.message))
    }
  }

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user);
        navigate('/home');
      } else {
        navigate('/');
      }
    })
  }, [userName]);


  const setUser = (user) => {
    dispatch(setUserLoginDetails({
      name: user.displayName,
      email: user.email,
      photo: user.photoURL,
    }))
  }


  return (
    <Nav id="navbar-wrapper">
      <Logo src={imgUrl + "logo.svg"} alt="Disney plus logo" id="logo" />

      {!userName ? (<LoginBtn onClick={handleAuth} id="user-btn">Login</LoginBtn>) : (
        <>
          <NavMenu id="navbar--menu-list">
            <li>
              <a href="/"><img src={imgUrl + 'home-icon.svg'} alt="home" /><span>home</span></a>
            </li>
            <li>
              <a href=""><img src={imgUrl + 'search-icon.svg'} alt="search" /><span>search</span></a>
            </li>
            <li>
              <a href=""><img src={imgUrl + 'watchlist-icon.svg'} alt="watchlist" /><span>watchlist</span></a>
            </li>
            <li>
              <a href=""><img src={imgUrl + 'original-icon.svg'} alt="originals" /><span>originals</span></a>
            </li>
            <li>
              <a href=""><img src={imgUrl + 'movie-icon.svg'} alt="movies" /><span>movies</span></a>
            </li>
            <li>
              <a href=""><img src={imgUrl + 'series-icon.svg'} alt="series" /><span>series</span></a>
            </li>
          </NavMenu>

          {/* <NavMenu>
            <li>
              <a href="/"><img src={imgUrl + 'original-icon.svg'} alt="originals" /><span>originals</span></a>
            </li>
            <li>
              <a href="/"><img src={imgUrl + 'movie-icon.svg'} alt="movies" /><span>movies</span></a>
            </li>
            <li>
              <a href="/"><img src={imgUrl + 'series-icon.svg'} alt="series" /><span>series</span></a>
            </li>
          </NavMenu> */}

          <DropdownProfileContainer id="dropdown--profile-container">
            <DropdownMenu className="dropdown--menu">
              <li className="dropdown--profile-list">
                <a id="active-profile">
                  <p className="dropdown--profile-text">My Profile</p>
                </a>
                <UserImgWrap id="dropdown--userImg-wrap">
                  <UserImg id="dropdown--userImg-image" src={userPhoto} alt={userName} />
                </UserImgWrap>
              </li>
              <DropdownActiveToggle className="active" />
              <DropdownOptionsList id="dropdown--options-list">
                <li className="dropdown--option-logout">
                  <span id="logout-btn" onClick={handleAuth}>Logout</span>
                </li>
              </DropdownOptionsList>
            </DropdownMenu>
          </DropdownProfileContainer>
        </>
      )}
    </Nav>
  );
}

export default Header;


// ----------- [Styled Components] ----------- // 

// ------------ Nav Menu ------------ //
const Nav = styled.nav`
  display: flex;
  flex-flow: no-wrap;
  height: 70px;
  padding: 0 20px;
  align-items: center;
  background: transparent;
  color: var(--text-primary);

  @media(max-width: 992px){
    #logo{
      width: 68px;
    }

    #dropdown--userImg-image {
      width: 32px;
      height: 32px;
    }

    #navbar--menu-list a{
      padding: 0 10px;
    }

    #navbar--menu-list span{
      display: none;
    }
  }
  
  @media(max-width: 374px){
    padding: 0px 12px;

    #logo{
      width: 48px;
    }

    #dropdown--userImg-image {
      width: 26px;
      height: 26px;
    }

    #navbar--menu-list{
      margin-left: -34px;
    }
    #navbar--menu-list a{
      padding: 0 6px;
    }
    #navbar--menu-list span{
      display: none;
    }
  }
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.ul`
  display: flex;
  flex: 1;
  margin-left: -16px;
  align-items: center;

  li {
    list-style-type: none;
  
    a {
      display: flex;
      align-items: center;
      padding: 0 20px;
      text-decoration: none;
      cursor: pointer;
    
      img {
        height: 20px;
      }

      span {
        position: relative;
        font-size: 14px;
        letter-spacing: 1px;
        text-transform: uppercase;
        color: var(--text-primary);

        &:after {
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

      &:hover {
        span:after {
          transform: scaleX(1);
          transition: all 250ms ease-in-out, transform 400ms;
          opacity: 1;
        }
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
const UserImgWrap = styled.div`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 10px;
  flex-direction: column;
`

const UserImg = styled.img`
  position: relative;
  width: 40px;
  height: 40px;
  margin: auto;
  border-radius: 50%;
  overflow-x: hidden;

  &:after {
    inset: 0;
    content: "";
    position: absolute;
  }
`;

// ------------ User Image Dropdown ------------ //
const DropdownMenu = styled.ul`
  display: flex;
  position: absolute;
  width: 100px;
  height: 100%;
  max-height: 70px;
  padding: 0 20px;
  right: 0;
  margin: 0;
  align-items: center;
  flex-flow: row wrap;
  justify-content: flex-end;
  border-bottom-left-radius: 4px;
  list-style: none;

  .dropdown--profile-list {
    display: flex;
    position: relative;
    align-items: center;
    padding: 8px 0;
    width: 0;

    overflow: hidden;
    text-align: left;
  }

  li:first-child {
    height: 70px;
    width: auto;

    a {
      justify-content: flex-end;
    }
    
    p {
      margin-right: 16px;
      opacity: 0;
    }
  }

  li a {
    display: flex;
    position: relative;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: flex-start;
    text-decoration: none;
  }

  .dropdown--profile-text {
    display: none;
    float: left;
    margin: 0;
    margin-left: 16px;
  }

`;

const DropdownActiveToggle = styled.div`
  display: flex;
  width: 0;
  height: 1px;
  margin: 4px 8px;
  background-color: var(--text-muted);
  opactiy: 0;
  z-index: 4;
`

const DropdownOptionsList = styled.div`  
  max-height: calc(100vh - 135px);  
  height: 100%;
  overflow: hidden auto;

  text-transform: capitalize;
  z-index: 1;
  opacity: 0;

  .dropdown--option-logout {
    display: flex;
    position: relative;
    width: 0;
    padding: 8px 0;
    align-items: center;
    text-align: left;
  }

  span {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: flex-start;
  }
`;

// ------------ Dropdown Container (Hover) ------------ //
const DropdownProfileContainer = styled.div`
  display: flex;
  height: 100%;
  top: 0;
  right: calc(3.5vw + 20px);
  align-items: flex-start;
  transition: all 250ms ease-in-out;
  cursor: pointer;
  z-index: 1;
  
  &:hover{
    ${DropdownOptionsList} {
      background-color: var(--bg-dropdown-hover);
      opacity: 1;
      width: 240px;
      height: auto;
      max-height: calc(100vh - 40px);
      padding: 0 20px ;
    }
    
    .dropdown--menu{
      border-left: 1px solid var(--text-muted);
      background-color: var(--bg-dropdown-hover);
      width: 240px;
      height: auto;
      max-height: calc(100vh - 40px);
      padding: 0 20px 0 20px;
    }

    .dropdown--profile-text {
      display: block;
      opacity: 1;
    }

    .active {
      opacity: 1;
      width: 200px;
    }

    #dropdown--options-list:hover {
      background-color: var(--text-muted);
    }
  }
`;




