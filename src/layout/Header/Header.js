import React, { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext, SlideDownContext } from "../../App";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import styled from "styled-components";

const Header = () => {
  const { darkMode, handleDarkMode } = useContext(ThemeContext);
  const { slideDownVariants } = useContext(SlideDownContext);
  const [showButton, setShowButton] = useState(false);
  const [menu, setMenu] = useState(false);
  const navMenuRef = useRef(null);
  const hamburgerRef = useRef(null);
  const overlayRef = useRef(null);

  function handleMenu() {
    setMenu(!menu);
    if (navMenuRef.current) {
      navMenuRef.current.classList.toggle("active");
    }
    if (hamburgerRef.current) {
      hamburgerRef.current.classList.toggle("active");
    }
    if (
      navMenuRef.current &&
      hamburgerRef.current &&
      (navMenuRef.current.classList.contains("active") ||
        hamburgerRef.current.classList.contains("active"))
    ) {
      if (overlayRef.current) {
        overlayRef.current.style.display = "block";
        document.documentElement.style.overflowY = "hidden";
      }
    } else {
      if (overlayRef.current) {
        overlayRef.current.style.display = "none";
        document.documentElement.style.overflowY = "auto";
      }
    }
  }

  function removeMenu() {
    if (navMenuRef.current) {
      navMenuRef.current.classList.remove("active");
    }
    if (hamburgerRef.current) {
      hamburgerRef.current.classList.remove("active");
    }
    if (overlayRef.current) {
      overlayRef.current.style.display = "none";
      document.documentElement.style.overflowY = "auto";
    }
  }

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (
        window.innerWidth >= 1024 &&
        navMenuRef.current &&
        hamburgerRef.current &&
        (navMenuRef.current.classList.contains("active") ||
          hamburgerRef.current.classList.contains("active"))
      ) {
        removeMenu();
      }
    });
  }, []);

  // Remove navmenu when clicked outside
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

  // Setting scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };
  const handleButtonClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <HeaderContainer
        style={{
          backgroundImage: darkMode
            ? "linear-gradient(180deg, rgba(28, 37, 84, 0.85), rgba(28, 37, 84, 1))"
            : "linear-gradient(180deg, rgba(194, 194, 194, 0.85), rgba(194, 194, 194, 1))",
          borderRadius: "100px",
        }}
      >
        <div className="overlay" ref={overlayRef}></div>
        <motion.nav
          variants={slideDownVariants}
          initial="hidden"
          animate="visible"
        >
          <ScrollLink
            id="home_link"
            aria-label="Goto home page"
            to="hero_section"
            spy={true}
            smooth={true}
            offset={-50}
            duration={300}
          >
            <img
              src={require("../../assets/imgs/logo.png")}
              alt="Sachin Samal"
              id="logo"
              width="30px"
              height="30.5px"
            />
          </ScrollLink>

          <motion.i
            id="theme_btn"
            className={`fas ${darkMode ? "fa-sun" : "fa-moon"}`}
            onClick={handleDarkMode}
            initial={{ rotate: 0 }}
            animate={{ rotate: darkMode ? 270 : 0 }} // Rotates 90 degrees when in dark mode
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          ></motion.i>

          <div className="navbar standard_text">
            <ul className="nav_menu p-0" ref={navMenuRef}>
              <li className="nav_item">
                <ScrollLink
                  to="experience_section"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={300}
                  className="nav_link shadowed_text"
                >
                  Experience
                </ScrollLink>
              </li>

              <li className="nav_item">
                <ScrollLink
                  to="blog_section"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={300}
                  className="nav_link shadowed_text"
                >
                  Blogs
                </ScrollLink>
              </li>
            </ul>
          </div>

          <div className="hamburger" onClick={handleMenu} ref={hamburgerRef}>
            <div className="menu">
              <p className="small_text mb-0 filter-none">MENU</p>
            </div>

            <div className="bars_container">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </div>
        </motion.nav>
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
  margin: 0.2rem auto;
  padding: 0.25rem;
  box-shadow: 0px 4px 10px rgba(232, 115, 0, 0.2);
  background: rgba(0, 0, 0, 0.5);
  width: fit-content;
  height: 45px;
  display: flex;
  align-items: center;
  @media (max-width: 1024px) {
    width: 100%;
    margin: 0 auto;
  }

  #logo {
    cursor: pointer;
    @media (min-width: 1024px) {
      margin-left: 1rem;
    }
    @media (max-width: 320px) {
      width: 100%;
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
      padding: 0 2rem;
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
      color: #fff;
      width: 100%;
      height: 50%;
      justify-content: center;
      flex-direction: column;
      position: fixed;
      top: 45px;
      left: -100%;
      transition: 0.5s;
      z-index: 1;
      border-bottom: 10px solid #ff8c1b;
    }
  }

  .nav_item {
    text-decoration: none;
    list-style: none;
    cursor: pointer;
    @media (max-width: 1024px) {
      margin: 0.5rem;
      font-size: 24px;
    }
  }

  .nav_link {
    color: unset;
    padding: 0.5rem;
    text-decoration: none;
    font-weight: 600;
    @media (max-width: 1024px) {
      padding: 0.8rem;
    }
    @media screen and (max-width: 360px) {
      padding: 0.25rem 0;
    }
  }

  #home_link img {
    filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.8));
  }

  #theme_btn {
    margin: 0 3rem;
    font-size: 1.25rem;
    color: #ff8c1b;
    filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.8));
    cursor: pointer;
    @media (max-width: 1024px) {
      margin-left: 0;
    }
  }

  .hamburger {
    display: none;
    cursor: pointer;
    @media (max-width: 1024px) {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    p {
      font-weight: 700;
    }

    .bars_container {
      filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.8));
    }
  }

  .bar {
    width: 1.5rem;
    height: 3px;
    display: block;
    padding: 0;
    margin: 6px;
    transition: 0.5s;
    background: #ff8c1b;
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
  right: 15px;
  z-index: 99;
  font-size: 1.25rem;
  color: #ff8c1b;
  border: none;
  border-radius: 12px;
  outline: 0;
  cursor: pointer;
  padding: 4px 8px;
  box-shadow: rgb(51, 51, 51) 0px 0px 0px 1.5px;
  &:hover {
    box-shadow: none;
    outline: none;
    transition: 0.3s;
  }
`;

export default Header;
