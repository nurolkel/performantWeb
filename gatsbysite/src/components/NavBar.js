import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const Navigation = styled.nav`
  display: flex;
  position: sticky;
  position: -webkit-sticky;
  position: -moz-sticky;
  position: -ms-sticky;
  position: -o-sticky;
  background-color: var(--white);
  justify-content: space-between;
  text-transform: uppercase;
  border-bottom: 2px solid var(--light-green-shadow);
  width: 100%;
  margin: 0;
  top: 0;
  padding: 0.5rem 0;
  z-index: 2;
  align-items: center;
  box-sizing: border-box;
  transition: background ease-out 300ms;
  background: ${({ background }) => background ? `var(--light-green-tint)` : `var(--light-green)`};

  @media (max-width: 768px) {
    height: 5vh;
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }
`

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 10vw;

  @media (max-width: 768px) {
    display: flex;
  }
`

const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  box-sizing: border-box;
  
  ul {
        display: flex;
        align-items: center;
        width: 100;
        justify-content: end;
        gap: 2rem;
        padding: 0 1rem;
        flex-direction: row;
        li {
            list-style: none;
            transition: transform 500ms;
            :hover {
                transform: translateY(-10px);

            }
            a {
                text-decoration: none;
                transition: color 300ms, transform 500ms;
                color: var(--white);
                :hover {
                    color: var(--light-grey);
                } 
                &[aria-current="page"] {
                  color: var(--dark-grey);
                }
        }
      
        }

    @media (max-width: 768px) {
      flex-direction: column;
      position: fixed;
      width: 100%;
      justify-content: flex-start;
      padding-top: 10vh;
      background-color: var(--black);
      transition: all 0.3s ease-in;
      top: 6.5vh;
      right: ${({open}) => open ? "0" : "-100%"};
        ul {
            flex-direction: column;
        }
    }
  }
`;

const LogoStyle = styled.div`
    margin-left: 2.5rem;
    a {
        text-decoration: none;
        white-space: nowrap; 
        font-size: 1.65rem;
        @media (min-width: 768px) {
            white-space: nowrap;
        }
    }
`;

const Hamburger = styled.div`
  background-color: #111;
  width: 30px;
  height: 3px;
  transition: all .3s linear;
  align-self: center;
  position: relative;
  transform: ${({open}) => open ? "rotate(-45deg)" : "inherit"};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #111;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${({open}) => open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${({open}) => open ? "0" : "1"};
    transform: ${({open}) => open ? "rotate(90deg) " : "rotate(0deg)"};
    top: 10px;
  }
`
const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const [background, setBackground] = useState(false);
    

  const changeBackground = () => {
      if (window.scrollY > 25) {
          setBackground(true);
      } else {
          setBackground(false);
      }
  }

  const toggleNavbar = () => setNavbarOpen(open => !open);

  useEffect(() => {


      window.addEventListener('scroll', changeBackground);

      return () => {
          window.removeEventListener('scroll', changeBackground)
      }
  },[background]);


  return (
    <Navigation background={background}>
       <LogoStyle> 
          <Link to="/">Performant Web Design</Link>
        </LogoStyle>
      <Toggle
        onClick={toggleNavbar}
      >
      <Hamburger open={navbarOpen} />
      </Toggle>
      <Navbox open={navbarOpen}>
        <ul>
            <li>
              <Link to='/services' onClick={toggleNavbar}>Services</Link>
            </li>
            <li>
                <Link to="/about" onClick={toggleNavbar}>About</Link>
            </li>
            <li>
                <Link to="/contact" onClick={toggleNavbar}>Contact</Link>
            </li>
        </ul>
      </Navbox>
    </Navigation>
  )
}

export default Navbar