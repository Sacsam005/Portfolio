import React, { useContext, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ThemeContext } from "../App";

const Header = () => {
  const { darkMode, handleDarkMode, darkModeForSmallerDiv } =
    useContext(ThemeContext);
  const [showButton, setShowButton] = useState(false);
  const [menu, setMenu] = useState(false);
  const navMenuRef = useRef(null);
  const hamburgerRef = useRef(null);

  function handleMenu() {
    setMenu(!menu);
    navMenuRef.current.classList.toggle("active");
    hamburgerRef.current.classList.toggle("active");
  }

  function removeMenu() {
    navMenuRef.current.classList.remove("active");
    hamburgerRef.current.classList.remove("active");
  }

  // Get rid of navmenu when clicked outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (
        (menu &&
          navMenuRef.current &&
          !navMenuRef.current.contains(e.target)) ||
        (hamburgerRef.current && !hamburgerRef.current.contains(e.target))
      ) {
        removeMenu();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menu]);

  // Setting active-link class to the corresponding active pages
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");
  useEffect(() => {
    const pathname = location.pathname;
    setActiveLink(pathname);
  }, [location]);

  // Setting scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 20) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };
  const handleButtonClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Dark theme for outcast divs
  useEffect(() => {
    const header = document.querySelector("header");
    const navMenu = document.querySelector(".nav_menu");
    darkModeForSmallerDiv(navMenu);
    darkModeForSmallerDiv(header);
  }, [darkMode, darkModeForSmallerDiv]);

  return (
    <>
      <HeaderContainer>
        <nav>
          <Link to="/" id="home_link" aria-label="Goto home page">
            <img
              src={require("../Img/sachin-samal-logo.png")}
              alt="Sachin Samal"
              id="logo"
              width="195px"
              height="41.67px"
            />
          </Link>

          <i
            id="theme_btn"
            className={`fas ${darkMode ? "fa-sun" : "fa-moon"}`}
            style={{ cursor: "pointer" }}
            onClick={handleDarkMode}
          ></i>

          <div className="navbar standard_text">
            <ul className="nav_menu" ref={navMenuRef}>
              <li className="nav_item">
                <Link
                  to="/"
                  className={`nav_link ${
                    activeLink === "/" || activeLink === "/home"
                      ? "active-link"
                      : ""
                  }`}
                >
                  Home
                </Link>
              </li>
              <li className="nav_item">
                <Link
                  to="/experience"
                  className={`nav_link ${
                    activeLink === "/experience" ? "active-link" : ""
                  }`}
                >
                  Experience
                </Link>
              </li>
              <li className="nav_item">
                <Link
                  to="/blogs"
                  className={`nav_link ${
                    activeLink === "/blogs" ? "active-link" : ""
                  }`}
                >
                  Blogs
                </Link>
              </li>
            </ul>
          </div>

          <div className="hamburger" onClick={handleMenu} ref={hamburgerRef}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
      </HeaderContainer>

      <ScrollTopButton
        id="scroll_top_btn"
        aria-label="Scroll to top"
        style={{ display: showButton ? "block" : "none" }}
        onClick={handleButtonClick}
      >
        <i className="fas fa-chevron-up"></i>
      </ScrollTopButton>
    </>
  );
};

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  padding: 0.25rem;
  box-shadow: 0px 4px 10px rgba(232, 115, 0, 0.2);
  height: 45px;
  display: flex;
  align-items: center;

  #logo {
    @media (min-width: 1024px) {
      margin-left: 1rem;
    }
    @media (max-width: 320px) {
      width: 100%;
      height: auto;
    }
  }

  nav {
    width: 100%;
    display: flex !important;
    flex-wrap: wrap;
    justify-content: space-between;
    text-align: center;
    align-items: center;
    z-index: 1000 !important;
    @media (max-width: 1024px) {
      padding: 0 2.5rem;
    }
    @media (max-width: 360px) {
      padding: 0.5rem 1.5rem;
    }
  }

  .navbar {
    padding: 0 !important;
  }

  .nav_menu {
    display: flex;
    margin: 0 auto;
    text-align: left;
    @media (max-width: 1024px) {
      width: 75%;
      height: 50%;
      justify-content: center;
      flex-direction: column;
      position: fixed;
      top: 0;
      left: -100%;
      transition: 0.5s;
      z-index: 1;
      border: 1px solid #e77200;
    }
  }

  .nav_item {
    text-decoration: none;
    list-style: none;
    @media (max-width: 1024px) {
      margin: 0.5rem;
      font-size: 24px;
    }
  }

  .nav_link {
    color: unset;
    padding: 0.5rem;
    text-decoration: none;
    @media (max-width: 1024px) {
      padding: 0.8rem;
    }
    @media screen and (max-width: 360px) {
      padding: 0.25rem 0;
    }
  }

  #theme_btn {
    font-size: 1.25rem;
    color: #e77200;
  }

  .hamburger {
    display: none;
    @media (max-width: 1024px) {
      display: block;
    }
    @media (max-width: 360px) {
      margin-right: auto;
    }
  }

  .bar {
    width: 1.5rem;
    height: 3px;
    display: block;
    padding: 0;
    margin: 6px;
    transition: 0.5s;
    background: #e77200;
    @media (max-width: 1024px) {
      &:nth-child(1) {
        width: 180%;
      }
      &:nth-child(2) {
        width: 240%;
      }
      &:nth-child(3) {
        width: 120%;
      }
    }
  }

  /* ----------------------- */
  @media screen and (max-width: 1024px) {
    #home_link {
      width: 75%;
      margin: 0 auto;
    }

    .fa-moon::before,
    .fa-sun::before {
      margin-right: 0.75rem;
    }

    .active .bar:nth-child(2) {
      opacity: 0;
      width: 240%;
    }

    .active .bar:nth-child(1) {
      transform: translateY(8px) rotate(-315deg);
      width: 240%;
    }

    .active .bar:nth-child(3) {
      transform: translateY(-10px) rotate(-45deg);
      width: 240%;
    }

    .active {
      left: 0;
      z-index: 999;
      transition: 0.2s ease;
    }
  }
`;

export const ScrollTopButton = styled.button`
  display: none;
  position: fixed;
  bottom: 15px;
  left: 15px;
  z-index: 99;
  font-size: 1.25rem;
  color: #eee;
  background: #e77200;
  border: none;
  outline: 0;
  cursor: pointer;
  padding: 4px 8px;
  box-shadow: rgba(231, 89, 0, 0.25) 0px 13px 27px -5px,
    rgba(231, 89, 0, 0.3) 0px 8px 16px -8px;
  &:hover {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    outline: none;
  }
`;

export default Header;
