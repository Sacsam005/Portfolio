import React, { useContext } from "react";
import { ThemeContext } from "../../App";
import { motion, useScroll, useSpring } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";
import "./Footer.sass";

const Footer = ({ quoteTitle, quoteText, quoteSource }) => {
  const { darkMode } = useContext(ThemeContext);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <MarqueText className="marquee_text_div linear_fade text-center mt-3">
        <p className="sliding_text heading2 m-5">
          Let's grow together ✴︎ Happy web development! ✴︎ Let's grow together
          ✴︎ Happy web development! ✴︎ Let's grow together ✴︎ Happy web
          development! ✴︎ Let's grow together ✴︎ Happy web development! ✴︎ Let's
          grow together ✴︎ Happy web development! ✴︎
        </p>
      </MarqueText>

      <hr />

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
        <div className="footer_div_wrapper">
          <div className="quote_div px-3">
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

          <div className="footer_social_links_div">
            <form className="form-inline">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control email"
                  placeholder="Send me an Email"
                  style={{ fontSize: "1rem" }}
                />
                <div className="input-group-prepend">
                  <div className="input-group-text send-email">
                    <RouterLink
                      to="mailto:shachinmagar120.smATgmailDOTcom"
                      onClick={(e) =>
                        (e.currentTarget.href = e.currentTarget.href
                          .replace("AT", "@")
                          .replace("DOT", "."))
                      }
                    >
                      <i className="fa fa-arrow-right"></i>
                    </RouterLink>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        <p
          className={`copyright_text text-center mt-4 ${
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
  overflow: hidden;
  display: grid;
  place-items: center;
  width: max-content;
  width: 100%;

  .sliding_text {
    font-family: "Poppins", sans-serif;
    text-transform: none;
    position: relative;
    white-space: nowrap;
    animation: slideRight 120s linear infinite;
    font-size: 8rem;
    text-shadow: 8px 8px #212121;
    -webkit-text-stroke: 2px #212121;
  }

  @keyframes slideRight {
    0% {
      transform: translateX(5%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;
