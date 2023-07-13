import React, { useState, useEffect } from "react";
import styled from "styled-components";

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const slideIntervalID = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 4000);
    return () => clearInterval(slideIntervalID);
  }, []);

  return (
    <>
      <Hero className="hero_section default_padding" id="hero_section">
        <h1 className="text-center mt-3">Web Developer | Sachin Samal</h1>
        <p className="text-center p-2 medium_text">
          I am a web designer and developer with a proven history of achievement
          and experience in design, development, and implementation of strategic
          architectures of web and mobile applications at an enterprise level. I
          am an open-source enthusiast and contributor. I believe in exchange of
          knowledge of programming.
        </p>

        <div className="hero_section_container_div">
          <div className="hero_section_wrapper">
            <div className="hero_wrapper_left">
              <img
                src={require("../Img/sachin-samal.png")}
                alt="Sachin Samal"
                className="profile-img"
                title="Web Developer | Sachin Samal"
                width="245px"
                height="245px"
              />
            </div>

            <div className="hero_wrapper_right standard_text">
              <div className="row cards_container">
                <div
                  className="col-4 col-md-4 col-sm-12 card p-2 m-2"
                  style={{ display: activeIndex === 0 ? "flex" : "none" }}
                >
                  <div className="card_dots">
                    <span className="dots"></span>
                    <span className="dots"></span>
                    <span className="dots"></span>
                  </div>
                  <img
                    src={require("../Img/what-sachin-can-do.png")}
                    alt="What Sachin Samal can do"
                    width="96px"
                    height="96px"
                  />
                  <h2>What I can do</h2>
                  <ul>
                    <li>Web Development</li>
                    <li>Front-end Engineering</li>
                    <li>App/Product/Web Design</li>
                    <li>SEO Improvement</li>
                  </ul>
                </div>
                <div
                  className="col-4 col-md-4 col-sm-12 card p-2 m-2"
                  style={{ display: activeIndex === 1 ? "flex" : "none" }}
                >
                  <div className="card_dots">
                    <span className="dots"></span>
                    <span className="dots"></span>
                    <span className="dots"></span>
                  </div>
                  <img
                    src={require("../Img/sachin-samal-qualification.png")}
                    alt="Overall qualification of Sachin Samal"
                    width="96px"
                    height="96px"
                  />
                  <h2>What am I</h2>
                  <ul>
                    <li>Web Designer & Developer</li>
                    <li>OpenSource Enthusiast/Contributor</li>
                    <li>Artist in CodePen</li>
                    <li>Bachelor's in CS (ECU 2021)</li>
                  </ul>
                </div>
                <div
                  className="col-4 col-md-4 col-sm-12 card p-2 m-2"
                  style={{ display: activeIndex === 2 ? "flex" : "none" }}
                >
                  <div className="card_dots">
                    <span className="dots"></span>
                    <span className="dots"></span>
                    <span className="dots"></span>
                  </div>
                  <img
                    src={require("../Img/what-sachin-likes.png")}
                    alt="What Sachin Samal likes to do"
                    width="96px"
                    height="96px"
                  />
                  <h2>What I Like</h2>
                  <ul>
                    <li>Camping, Trekking, Hiking</li>
                    <li>Long drive w/Wife</li>
                    <li>Bible/Old history</li>
                    <li>Football and Cricket</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Hero>
    </>
  );
};

const Hero = styled.section`
  h1 {
    font-size: 6vw;
    background: -webkit-linear-gradient(
      270deg,
      #8187a5,
      #ff8000,
      #e77200,
      #f0a150
    );
    -webkit-text-stroke: 4px transparent;
    letter-spacing: 1px;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-reflect: below -20px linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.09));

    @media (max-width: 1200px) {
      -webkit-text-stroke: 3px transparent;
      letter-spacing: 1px;
      font-size: 5vw;
    }
    @media (max-width: 550px) {
      -webkit-text-stroke: 2px transparent;
      font-size: 8vw;
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
    background-color: unset !important;
    border-radius: 0 !important;
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

export default HeroSection;
