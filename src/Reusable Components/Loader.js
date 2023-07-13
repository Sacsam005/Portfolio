import React from "react";
import styled from "styled-components";
import "../App.sass";

const Loader = () => {
  return (
    <>
      <LoaderContainer className="loader_container">
        <div className="loader-title">
          <h4>Loading</h4>
        </div>
        <div className="loader-square-container">
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
        </div>
      </LoaderContainer>
    </>
  );
};

const LoaderContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  background-size: cover;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;

  .loader-square-container {
    margin: 0 0.25rem;
  }

  .square {
    width: 5px;
    height: 5px;
    background: #ea7200;
    display: inline-block;
    margin: 0 0.15rem;
    &:nth-child(1) {
      visibility: hidden;
      animation: square 1s linear infinite;
    }
    &:nth-child(2) {
      animation: square 1s linear infinite;
      visibility: hidden;
      animation-delay: 0.25s;
    }
    &:nth-child(3) {
      opacity: 0;
      animation: square 1s linear infinite;
      visibility: hidden;
      animation-delay: 0.5s;
    }
    @keyframes square {
      0% {
        opacity: 0;
        visibility: hidden;
      }

      100% {
        visibility: visible;
        opacity: 1;
      }
    }
  }
`;

export default Loader;
