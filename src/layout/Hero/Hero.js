import React, { useContext, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SlideDownContext, ThemeContext } from "../../App";
import styled from "styled-components";
import img from "../../assets/imgs/stars.svg";

const Hero = () => {
  const { darkMode } = useContext(ThemeContext);
  const { slideDownVariants } = useContext(SlideDownContext);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const slideIntervalID = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 4000);
    return () => clearInterval(slideIntervalID);
  }, []);

  // Sliding card variant
  const slidingCardVariants = {
    hidden: {
      y: -50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <HeroSection className="hero_section default_padding" id="hero_section">
        <motion.h1
          className="gradient_text_img text-center mt-3 linear_fade"
          style={{ background: darkMode ? "" : `url(${img})` }}
          variants={slideDownVariants}
          initial="hidden"
          animate="visible"
        >
          Web Developer Sachin Samal
        </motion.h1>

        <motion.p
          className="text-center p-2 medium_text"
          variants={slideDownVariants}
          initial="hidden"
          animate="visible"
        >
          I am a{" "}
          <span className="flowing_underline">web designer and developer</span>{" "}
          with experience in the design, development, and implementation of
          strategic architectures of web and mobile applications at an
          enterprise level. I am an open-source enthusiast and contributor. I
          believe in exchange of knowledge of programming.
        </motion.p>

        <div className="hero_section_container_div">
          <div className="hero_section_wrapper">
            <motion.div
              className="hero_wrapper_left"
              variants={slideDownVariants}
              initial="hidden"
              animate="visible"
            >
              <img
                src={require("../../assets/imgs/sachin-samal.png")}
                alt="Sachin Samal"
                className="profile-img"
                title="Web Developer | Sachin Samal"
                width="245px"
                height="245px"
              />
            </motion.div>

            <div className="hero_wrapper_right standard_text">
              <motion.div
                className="col-4 col-md-4 col-sm-12 card p-2 m-2"
                style={{ display: activeIndex === 0 ? "flex" : "none" }}
                initial="hidden"
                animate={activeIndex === 0 ? "visible" : "hidden"}
                variants={slidingCardVariants}
              >
                <div className="card_dots">
                  <span className="dots"></span>
                  <span className="dots"></span>
                  <span className="dots"></span>
                </div>
                <img
                  src={require("../../assets/imgs/ladder.png")}
                  alt="What Sachin Samal can do"
                  width="96px"
                  height="96px"
                />
                <h2
                  className={`my-2 ${
                    darkMode
                      ? "dark_mode_gradient_text"
                      : "light_mode_gradient_text"
                  }`}
                >
                  What I can do
                </h2>
                <ul>
                  <li>Web Development</li>
                  <li>Front-end Engineering</li>
                  <li>App/Product/Web Design</li>
                  <li>SEO Improvement</li>
                </ul>
              </motion.div>
              <motion.div
                className="col-4 col-md-4 col-sm-12 card p-2 m-2"
                style={{ display: activeIndex === 1 ? "flex" : "none" }}
                initial="hidden"
                animate={activeIndex === 1 ? "visible" : "hidden"}
                variants={slidingCardVariants}
              >
                <div className="card_dots">
                  <span className="dots"></span>
                  <span className="dots"></span>
                  <span className="dots"></span>
                </div>
                <img
                  src={require("../../assets/imgs/degree.png")}
                  alt="Overall qualification of Sachin Samal"
                  width="96px"
                  height="96px"
                />
                <h2
                  className={`my-2 ${
                    darkMode
                      ? "dark_mode_gradient_text"
                      : "light_mode_gradient_text"
                  }`}
                >
                  What am I
                </h2>
                <ul>
                  <li>Web Designer & Developer</li>
                  <li>OpenSource Enthusiast/Contributor</li>
                  <li>Artist in CodePen</li>
                  <li>Bachelor's in CS (ECU 2021)</li>
                </ul>
              </motion.div>
              <motion.div
                className="col-4 col-md-4 col-sm-12 card p-2 m-2"
                style={{ display: activeIndex === 2 ? "flex" : "none" }}
                initial="hidden"
                animate={activeIndex === 2 ? "visible" : "hidden"}
                variants={slidingCardVariants}
              >
                <div className="card_dots">
                  <span className="dots"></span>
                  <span className="dots"></span>
                  <span className="dots"></span>
                </div>
                <img
                  src={require("../../assets/imgs/like.png")}
                  alt="What Sachin Samal likes to do"
                  width="96px"
                  height="96px"
                />
                <h2
                  className={`my-2 ${
                    darkMode
                      ? "dark_mode_gradient_text"
                      : "light_mode_gradient_text"
                  }`}
                >
                  What I Like
                </h2>
                <ul>
                  <li>Camping, Trekking, Hiking</li>
                  <li>Long drive w/Wife</li>
                  <li>Bible/Old history</li>
                  <li>Football and Cricket</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </HeroSection>
    </>
  );
};

const HeroSection = styled.section`
  background: #efefef;
  border-bottom-left-radius: 3rem;
  border-bottom-right-radius: 3rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  margin: 0 1rem;
  @media (max-width: 400px) {
    margin: 0 0.75rem;
  }

  h1 {
    font-size: 5rem;
    font-family: "Ultra", serif;
    letter-spacing: 8px;
    text-transform: uppercase;
    color: #fff;
    -webkit-text-stroke: 1px #444;
    text-shadow: #444 2px 2px 0px, #444 2.5px 2.5px 0px, #444 3px 3px 0px,
      #444 3.5px 3.5px 0px, #444 4px 4px 0px;
    -webkit-box-reflect: below -20px linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.07));

    @media (max-width: 1100px) {
      font-size: 10vw;
    }

    @media (max-width: 550px) {
      font-size: 2.5rem;
      letter-spacing: 5px;
    }
  }

  .hero_section_wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    @media (max-width: 600px) {
      grid-template-columns: 1fr;
      grid-template-rows: auto;
      align-items: center;
    }
  }

  .hero_wrapper_left,
  .hero_wrapper_right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .hero_wrapper_right {
    overflow-x: hidden;
    @media (max-width: 600px) {
      text-align: center;
      margin-top: 1rem;
    }
  }

  .hero_wrapper_left a {
    color: inherit;
    &:hover {
      color: inherit;
    }
  }

  .profile-img {
    -webkit-animation: floating 4s linear infinite;
    animation: floating 5s linear infinite alternate-reverse;
    background-image: url(${img});
  }

  @keyframes floating {
    0%,
    100% {
      -webkit-transform: translateY(0rem);
      transform: translateY(0rem);
    }

    50% {
      -webkit-transform: translateY(-1rem);
      transform: translateY(-1rem);
    }
  }

  .card {
    background-color: unset;
    border-radius: 1rem !important;
    position: relative;
    border: none !important;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    width: 300px !important;
    max-width: 100%;

    img {
      align-self: center;
    }

    h2 {
      font-weight: 600;
      font-size: 1.25rem;
    }

    ul {
      margin: 0 auto 1rem auto;
      text-align: center;
      padding-left: 0;
    }

    li {
      text-decoration: none;
      list-style-type: none;
      margin: auto;
      line-height: 1.5;
    }
  }

  .card_dots {
    padding: 1rem 0;
    .dots {
      width: 1rem;
      height: 1rem;
      position: absolute;
      border-radius: 50%;
      top: 5%;
      left: 10%;
      &:nth-child(1) {
        margin: 0 0.75rem;
        background: #ffbd44;
      }
      &:nth-child(2) {
        background: #00ca4e;
        margin: 0 2.3rem;
      }
      &:nth-child(3) {
        background: #ff605c;
        margin: 0 -0.75rem;
      }
    }
  }
`;

export default Hero;
