import React, { useContext } from "react";
import { AppContext } from "../../App";
import styled from "styled-components";
import "./Footer.sass";

const Footer = ({ quoteTitle, quoteText, quoteSource }) => {
    const { darkMode } = useContext(AppContext);

    return (
        <>
            <MarqueText className="mt-3">
                <p
                    className={`heading ${
                        darkMode
                            ? "dark_mode_gradient_text"
                            : "light_mode_gradient_text"
                    }`}
                >
                    Let's grow together ✴︎ Happy web development! ✴︎ Let's grow
                    together ✴︎ Happy web development! ✴︎ Let's grow together ✴︎
                    Happy web development! ✴︎ Let's grow together ✴︎ Happy web
                    development! ✴︎ Let's grow together ✴︎ Happy web
                    development! ✴︎ Let's grow together ✴︎ Happy web
                    development! ✴︎ Let's grow together ✴︎ Happy web
                    development! ✴︎ Let's grow together ✴︎ Happy web
                    development! ✴︎ Let's grow together ✴︎ Happy web
                    development! ✴︎ Let's grow together ✴︎ Happy web
                    development! ✴︎
                </p>
            </MarqueText>

            <footer
                className="footer_section standard_text"
                style={{
                    background: darkMode
                        ? "linear-gradient(180deg, rgba(31, 31, 31, 0.85), rgba(31, 31, 31, 1))"
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
                        darkMode
                            ? "dark_mode_gradient_text"
                            : "light_mode_gradient_text"
                    }`}
                >
                    &copy; {new Date().getFullYear()} | This page is maintained
                    by Sachin Samal
                </p>
                <div />
            </footer>
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
        font-size: min(max(30px, 11.111vw), 48px);
        text-transform: none;
        position: relative;
        white-space: nowrap;
        animation: slide 240s linear infinite;
        @media screen and (max-width: 1024px) {
            font-size: 2rem;
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
