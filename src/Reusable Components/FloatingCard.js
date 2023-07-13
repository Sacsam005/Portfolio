import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ThemeContext, FloatingCardContext } from "../App";

const FloatingCard = () => {
  const { darkModeForSmallerDiv } = useContext(ThemeContext);
  const { floatingContainerRef, handleSlideCard, handleRemoveFloatingCard } =
    useContext(FloatingCardContext);

  useEffect(() => {
    darkModeForSmallerDiv(floatingContainerRef.current);
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
            src={require("../Img/lets_connect_icon.png")}
            alt="Sachin wants to connect"
            title="Connect with Sachin"
            width="38.14px"
            height="33.57"
          />
          <span>Let's Connect</span>
        </button>
      </FixedDiv>
      <FloatingCardContainer
        className="floating_card_container"
        ref={floatingContainerRef}
      >
        <div className="floating_card_div">
          <p>You motivate me! Let's connect</p>
          <button className="close_btn">
            <i
              className="fas fa-times"
              aria-label="Close"
              onClick={handleRemoveFloatingCard}
            ></i>
          </button>
          <div className="floating_card_buttons_div">
            <Link to="/contact">
              {" "}
              <button className="all_button" aria-label="Contact me">
                Get in touch
              </button>
            </Link>
            <Link to="/blogs">
              <button className="all_button" aria-label="Read Blogs">
                Read blogs
              </button>
            </Link>
          </div>
          <ul>
            <li>
              <Link
                to="https://codepen.io/sacsam005"
                target="noreferrer noopener"
                aria-label="Find Sachin Samal on CodePen"
              >
                <i className="fab fa-codepen" style={{ color: "#171717" }}></i>
              </Link>
            </li>
            <li>
              <Link
                to="https://twitter.com/sachinsamal6"
                target="noreferrer noopener"
                aria-label="Find Sachin Samal on Twitter"
              >
                <i className="fab fa-twitter" style={{ color: "#1A8CD8" }}></i>
              </Link>
            </li>
            <li>
              <Link
                to="https://www.linkedin.com/in/sachin-samal005/"
                target="noreferrer noopener"
                aria-label="Find Sachin Samal on LinkedIn"
              >
                <i className="fab fa-linkedin" style={{ color: "#0274B3" }}></i>
              </Link>
            </li>
            <li>
              <Link
                to="https://facebook.com/sachinsamal120"
                target="noreferrer noopener"
                aria-label="Find Sachin Samal on Facebook"
              >
                <i className="fab fa-facebook" style={{ color: "#1877F2" }}></i>
              </Link>
            </li>
            <li>
              <Link
                to="https://github.com/Sacsam005"
                target="noreferrer noopener"
                aria-label="Find Sachin Samal on GitHub"
              >
                <i className="fab fa-github" style={{ color: "#14191E" }}></i>
              </Link>
            </li>
          </ul>
          <p>
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
  box-shadow: rgba(240, 46, 170, 0.4) 0px 1px, rgba(240, 46, 170, 0.3) 0px 3px,
    rgba(240, 46, 170, 0.2) 0px 6px, rgba(240, 46, 170, 0.1) 0px 9px,
    rgba(240, 46, 170, 0.05) 0px 12px;
  background: inherit;

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
    &:hover > span {
      visibility: visible;
      left: 41px;
      opacity: 1;
      z-index: 1;
      background: inherit;
      color: inherit;
    }
    span {
      border: 1.5px solid #e77200;
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
  &.visible {
    transform: translateX(0);
  }

  .floating_card_div {
    color: inherit;
    box-shadow: 0 16px 31px -17px rgba(0, 31, 97, 0.6);
    border: 2px solid #e87300;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    max-width: 100%;
    .close_btn {
      color: red;
      cursor: pointer;
      position: absolute;
      font-size: 1.5rem;
      top: 1px;
      right: 1px;
      border: none;
    }
    p {
      font-weight: 700;
      text-align: center;
      max-width: 80%;
      margin-top: 0.25rem;
    }
    button {
      line-height: 1rem;
      text-transform: uppercase;
    }
    ul {
      display: flex;
      list-style-type: none;
      padding: 0;
      margin: 0.5rem 0;
      li {
        margin: 0 10px;
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

  @media (max-width: 360px) {
    .floating_card_buttons_div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      a {
      margin-top: 0.4rem;
      }
    }
  }
`;

export default FloatingCard;
