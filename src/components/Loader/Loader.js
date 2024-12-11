import React, { useContext } from "react";
import { AppContext } from "../../App";
import styled from "styled-components";
import "../../App.sass";

const Loader = () => {
  const { darkMode } = useContext(AppContext);

  return (
    <>
      <LoaderContainer
        className="loader_container"
        style={{
          background: darkMode ? "#2f2f2f" : "#eee",
          color: darkMode ? "#eee" : "#222",
        }}
      >
        <div className="loader d-flex justify-content-center align-items-center flex-column">
          <div className="loader_image">
            <img
              src={require("../../assets/imgs/logo.png")}
              className="logo"
              alt="Sachin Samal"
              width="30px"
              height="30.5px"
            />
          </div>

          <div className="loader_text_container m-2">
            <div className="loader_title">
              <h4 className="mb-0">Loading</h4>
            </div>
            <div className="loader_bars"></div>
          </div>
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

    .loader_text_container {
      display: flex;
      justify-content: center;
      align-items: flex-end;
    }

    .loader_bars {
        width: 20px;
        height: 25px;
        margin: 0 0 0.4rem 0.5rem;
        --c: no-repeat linear-gradient(#e77200 0 0);
        background: var(--c) 0% 100%, var(--c) 50% 100%, var(--c) 100% 100%;
        background-size: 20% 65%;
        animation: l5 1s infinite linear;
    }
    @keyframes l5 {
      20% {
        background-position: 0% 50%, 50% 100%, 100% 100%;
      }
      40% {
        background-position: 0% 0%, 50% 50%, 100% 100%;
      }
      60% {
        background-position: 0% 100%, 50% 0%, 100% 50%;
      }
      80% {
        background-position: 0% 100%, 50% 100%, 100% 0%;
      }
    }
  }
`;

export default Loader;
