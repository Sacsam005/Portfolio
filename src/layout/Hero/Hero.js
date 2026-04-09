import React, { useContext } from "react";
import { motion } from "framer-motion";
import { AppContext } from "../../App";
import styled from "styled-components";

const Hero = () => {
    const { darkMode, slideDownVariants } = useContext(AppContext);

    return (
        <>
            <HeroSection
                className="hero_section default_padding"
                id="hero_section"
            >
                <motion.h1
                    className={`super_heading text-center pt-5 px-2 ${
                        darkMode
                            ? "dark_mode_gradient_text"
                            : "light_mode_gradient_text"
                    }`}
                    variants={slideDownVariants}
                    initial="hidden"
                    animate="visible"
                >
                    Hello World!
                    <br />
                    I'm Sachin Samal
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
                        a{" "}
                        <span className="flowing_underline">
                            software developer
                        </span>{" "}
                        exploring how we experience the digital world.
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

    .super_heading {
        font-size: min(max(60px, 11.111vw), 80px);
        font-family: "Space Grotesk", sans-serif;
        padding-top: 6rem !important;
        @media (min-width: 1024px) {
            font-size: 8rem !important;
        }
        @media (max-width: 1024px) {
            font-size: 2rem;
            padding-top: 5rem !important;
        }
    }

    @media screen and (min-width: 768px) {
        .hero_section__text {
            width: 90%;
        }
    }
`;

export default Hero;
