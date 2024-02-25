import React, { useContext } from "react";
import { AppContext } from "../../App";
import { motion, useScroll, useSpring } from "framer-motion";
import styled from "styled-components";
import "./Footer.sass";

const Footer = ({ quoteTitle, quoteText, quoteSource }) => {
  const { darkMode } = useContext(AppContext);
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <MarqueText className="mt-3">
        <p
          className={`heading ${
            darkMode ? "dark_mode_gradient_text" : "light_mode_gradient_text"
          }`}
        >
          Let's grow together ✴︎ Happy web development! ✴︎ Let's grow together
          ✴︎ Happy web development! ✴︎ Let's grow together ✴︎ Happy web
          development! ✴︎ Let's grow together ✴︎ Happy web development! ✴︎ Let's
          grow together ✴︎ Happy web development! ✴︎
        </p>
      </MarqueText>

      <footer
        className="footer_section standard_text"
        style={{
          background: darkMode
            ? "linear-gradient(180deg, rgba(28, 37, 84, 0.85), rgba(28, 37, 84, 1))"
            : "linear-gradient(180deg, rgba(200, 200, 200, 0.85), rgba(200, 200, 200, 1))",
          borderTopLeftRadius: "2rem",
          borderTopRightRadius: "2rem",
        }}
      >
        <div className="footer_div_wrapper text-center p-2">
          <strong>
            <span
              className={
                darkMode
                  ? "dark_mode_gradient_text"
                  : "light_mode_gradient_text"
              }
            >
              {quoteTitle}:{" "}
            </span>
            {quoteText}!
            <span
              className={
                darkMode
                  ? "dark_mode_gradient_text"
                  : "light_mode_gradient_text"
              }
            >
              {" "}
              - {quoteSource}
            </span>
          </strong>
        </div>

        <p
          className={`copyright_text text-center mt-4 mb-0 py-2 ${
            darkMode ? "dark_mode_gradient_text" : "light_mode_gradient_text"
          }`}
        >
          &copy; 2023 | This page is maintained by Sachin Samal
        </p>
        <div />
      </footer>

      <motion.div className="progress rounded-0" style={{ scaleX }} />
    </>
  );
};

export default Footer;

const MarqueText = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  overflow: hidden;

  p {
    font-size: min(max(60px, 11.111vw), 160px);
    text-transform: none;
    position: relative;
    white-space: nowrap;
    animation: slide 120s linear infinite;
    @media screen and (max-width: 1024px) {
      font-size: 50px;
    }
  }

  @keyframes slide {
    0% {
      transform: translateX(5%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;
