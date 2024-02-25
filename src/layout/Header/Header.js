import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../App";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import styled from "styled-components";

const Header = () => {
  const { darkMode, handleDarkMode, slideDownVariants } =
    useContext(AppContext);
  const [showButton, setShowButton] = useState(false);

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
  background: rgba(0, 0, 0, 0.5);
  width: fit-content;
  height: 45px;
  display: flex;
  justify-content: center;

  #logo {
    cursor: pointer;
    margin-left: 0.9rem;
    @media (max-width: 1024px) {
      margin-left: 1rem;
    }
  }

  nav {
    width: 350px;
    max-width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1000 !important;
    @media (max-width: 350px) {
      width: 100%;
    }
  }

  #home_link img {
    filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.8));
  }

  #theme_btn {
    margin: 0 0.5rem 0 3rem;
    font-size: 1.5rem;
    color: #ff8c1b;
    filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.8));
    cursor: pointer;
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
