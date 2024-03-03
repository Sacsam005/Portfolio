import React, { useContext } from "react";
import { motion } from "framer-motion";
import { AppContext } from "../../App";
import styled from "styled-components";

const Hero = () => {
  const { darkMode, slideDownVariants } = useContext(AppContext);

  return (
    <>
      <HeroSection className="hero_section default_padding" id="hero_section">
        <motion.h1
          className={`heading text-center mt-5 px-2 ${
            darkMode ? "dark_mode_gradient_text" : "light_mode_gradient_text"
          }`}
          variants={slideDownVariants}
          initial="hidden"
          animate="visible"
        >
          Web Developer
        </motion.h1>

        <motion.div
          className="hero_section__text mx-auto"
          variants={slideDownVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            className="medium_text text-center p-2"
            variants={slideDownVariants}
            initial="hidden"
            animate="visible"
          >
            I am a{" "}
            <span className="flowing_underline">
              web designer and developer
            </span>{" "}
            with experience in the design, development, and implementation of
            strategic architectures of web and mobile applications at an
            enterprise level. I am an open-source enthusiast and contributor. I
            believe in exchange of knowledge of programming.
          </motion.p>
        </motion.div>
      </HeroSection>
    </>
  );
};

const HeroSection = styled.section`
  background: #efefef;
  border-bottom-left-radius: 3rem;
  border-bottom-right-radius: 3rem;
  border-style: solid;
  border-color: transparent;

  h1 {
    font-size: min(max(60px, 11.111vw), 160px);
    font-family: "Rubik", sans-serif;
    @media (max-width: 1100px) {
      font-size: 4rem;
      margin-top: 4rem !important;
    }
    @media (max-width: 768px) {
      font-size: 2rem;
      margin-top: 4rem !important;
    }
  }

  @media screen and (min-width: 768px) {
    .hero_section__text {
      width: 90%;
    }
  }
`;

export default Hero;
