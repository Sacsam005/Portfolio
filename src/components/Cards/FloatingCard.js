import React, { useContext, useEffect } from "react";
import { ThemeContext, FloatingCardContext } from "../../App";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";

const FloatingCard = () => {
  const { darkMode, darkModeForSmallerDiv } = useContext(ThemeContext);
  const { floatingContainerRef, handleSlideCard, handleRemoveFloatingCard } =
    useContext(FloatingCardContext);

  useEffect(() => {
    const floatingContainer = floatingContainerRef.current;
    darkModeForSmallerDiv(floatingContainer);
  });

  return (
    <>
      <FixedDiv id="fixed_icon">
        <button
          className="flotaing_btn"
          aria-label="Contact me"
          onClick={handleSlideCard}
        >
          <img
            src={require("../../assets/imgs/lets_connect_icon.png")}
            alt="Sachin wants to connect"
            title="Connect with Sachin"
            width="33.75px"
            height="29.37px"
          />
          <span>Let's Connect</span>
        </button>
      </FixedDiv>
      <FloatingCardContainer
        className="floating_card_container standard_text"
        ref={floatingContainerRef}
      >
        <div className="floating_card_div">
          <p
            className={`{mb-0 ${
              darkMode ? "dark_mode_gradient_text" : "light_mode_gradient_text"
            }`}
            style={{ marginRight: "0.1rem" }}
          >
            You motivate me! Let's connect
          </p>
          <button className="close_btn px-2 py-1">
            <i
              className="fas fa-times"
              aria-label="Close"
              onClick={handleRemoveFloatingCard}
            ></i>
          </button>
          <div className="floating_card_buttons_div">
            <ScrollLink
              to="blog_section"
              spy={true}
              smooth={true}
              offset={-50}
              duration={300}
            >
              <button className="all_button mx-3" aria-label="Read Blogs">
                READ BLOGS
              </button>
            </ScrollLink>
          </div>
          <ul>
            <li>
              <RouterLink
                to="https://codepen.io/sacsam005"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Find Sachin Samal on CodePen"
              >
                <i
                  className="fab fa-codepen"
                  style={{ color: darkMode ? "#E9E9E9" : "#171717" }}
                ></i>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="https://www.linkedin.com/in/sachin-samal005/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Find Sachin Samal on LinkedIn"
              >
                <i
                  className="fab fa-linkedin"
                  style={{ color: darkMode ? "#E9E9E9" : "#057AB9" }}
                ></i>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="https://github.com/Sacsam005"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Find Sachin Samal on GitHub"
              >
                <i
                  className="fab fa-github"
                  style={{ color: darkMode ? "#E9E9E9" : "#14191E" }}
                ></i>
              </RouterLink>
            </li>
          </ul>
          <p
            className={
              darkMode ? "dark_mode_gradient_text" : "light_mode_gradient_text"
            }
          >
            Each contact with a human being is so rare, so precious, one should
            preserve it! - Anais Nin
          </p>
        </div>
      </FloatingCardContainer>
    </>
  );
};

const FixedDiv = styled.div`
  position: fixed;
  top: 250px;
  z-index: 1;

  .flotaing_btn {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    text-align: center;
    line-height: 35px;
    margin-bottom: 0px;
    padding: 0;
    border: 1.5px solid #222;
    border-radius: 10px;

    &:hover > span {
      visibility: visible;
      left: 41px;
      opacity: 1;
      z-index: 1;
      background: inherit;
      color: inherit;
    }
    span {
      border: 1.5px solid #ff8c1b;
      font-weight: 500;
      left: 60px;
      position: absolute;
      text-align: center;
      width: 120px;
      visibility: hidden;
      transition-duration: 0.5s;
      z-index: 1;
      opacity: 0;
    }
  }
`;

const FloatingCardContainer = styled.div`
  width: 100%;
  max-width: 400px;
  position: fixed;
  left: 0;
  top: 20%;
  transform: translateX(-100%);
  transition: transform 0.4s ease-in-out;
  z-index: 1;
  border-radius: 1rem;

  &.visible {
    transform: translateX(0);
  }

  .floating_card_div {
    position: relative;
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: inherit;
    border: 2px solid #e87300;
    border-radius: 1rem;
    box-shadow: 0 16px 31px -17px rgba(0, 31, 97, 0.6);
    
    .close_btn {
      color: red;
      cursor: pointer;
      position: absolute;
      font-size: 1.5rem;
      top: 0;
      right: 0;
      border: 1px solid #ff8c1b;
      border-radius: 12px;
    }

    p {
      font-weight: 700;
      text-align: center;
      max-width: 90%;
      margin-top: 0.25rem;
    }

    ul {
      display: flex;
      list-style-type: none;
      padding: 0;
      margin: 0.5rem 0;

      li {
        margin: 0 10px;
        cursor: pointer;
        a {
        border-radius: 50%;
        color: #001f61;
        font-size: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        width: 50px;
        text-decoration: none;
        border: 0.5px solid #ff8000;
        &:hover {
          border: 1px solid #FBEBD7;
          box-shadow: 0 9px 12px -9px #ff6a00;
        }
      }
    }
  }

  @media screen and (max-width: 500px) {
    .floating_card_buttons_div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      a {
      margin-top: 0.4rem;
      }
    }

    button:not(.close_btn) {
      margin: 0.25rem 0;
    }
  }
`;

export default FloatingCard;
