import React, { useContext, useEffect } from "react";
import { AppContext } from "../../App";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../../App.sass";
import "./Experience.sass";

const Experience = () => {
    const { darkMode, darkModeForSmallerDiv, slideUpVariants } =
        useContext(AppContext);

    const skills = [
        "Javascript | ES6",
        "ReactJS",
        "Redux",
        "CSharp",
        "ASP.NET Framework",
        "NodeJS",
        "ExpressJS",
        "MongoDB",
        "REST APIs",
        "HTML | CSS",
        "SASS | SCSS",
        "Bootstrap",
        "SharePoint Framework (SPFx)",
        "Git | GitHub",
        "NPM",
    ];

    // Setting useInView animation
    const [experienceSectionRef, experienceSectionView] = useInView({
        triggerOnce: true,
        threshold: 0.05,
    });

    const [skillsRef, skillsView] = useInView({
        triggerOnce: true,
        threshold: 0.05,
    });

    const [experienceItem1Ref, experienceItem1View] = useInView({
        triggerOnce: true,
        threshold: 0.05,
    });

    const [experienceItem2Ref, experienceItem2View] = useInView({
        triggerOnce: true,
        threshold: 0.05,
    });

    useEffect(() => {
        const tools = document.querySelectorAll(".skills_item");
        darkModeForSmallerDiv(tools);
    }, [darkMode, darkModeForSmallerDiv]);

    return (
        <>
            <section
                className="about_section mt-5"
                ref={experienceSectionRef}
                animate={experienceSectionView ? "onscreen" : "offscreen"}
                variants={slideUpVariants}
            >
                <h2
                    className={`heading text-center ${
                        darkMode
                            ? "dark_mode_gradient_text"
                            : "light_mode_gradient_text"
                    }`}
                >
                    More About Me
                </h2>

                <div className="about_container">
                    <div className="about_text_container p-2">
                        <ul
                            className="small_text"
                            style={{
                                listStyle: "square",
                                paddingRight: "0.5rem",
                            }}
                        >
                            <li>
                                Developing softwares and web applications for
                                more than 3.5 years and counting...
                            </li>
                            <li>
                                Experienced in designing, developing, and
                                implementing strategic architectures of web and
                                mobile applications at an enterprise level.
                            </li>
                            <li>
                                Open-source enthusiast and contributor. I
                                believe in exchange of knowledge of programming.
                            </li>
                        </ul>
                    </div>

                    <div className="skills_container p-2">
                        <div className="skills_content">
                            <motion.div
                                className="skills_card"
                                ref={skillsRef}
                                animate={skillsView ? "onscreen" : "offscreen"}
                                variants={slideUpVariants}
                            >
                                <h3 className="m-0 text-center">
                                    Some tools I have used:
                                </h3>

                                <div className="skill_list p-2">
                                    {skills.map((skill, index) => (
                                        <span
                                            key={index}
                                            className="skills_item"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="work_history_container mt-5">
                <h3
                    className={`heading text-center m-0 p-0 ${
                        darkMode
                            ? "dark_mode_gradient_text"
                            : "light_mode_gradient_text"
                    }`}
                >
                    Work History
                </h3>

                <div className="work_history_div">
                    <ul className="py-2">
                        <motion.li
                            className="item"
                            ref={experienceItem1Ref}
                            animate={
                                experienceItem1View ? "onscreen" : "offscreen"
                            }
                            variants={slideUpVariants}
                        >
                            <p className="item__timespan mb-0 font-monospace">
                                Feb 2022 &rarr; May 2023
                            </p>

                            <p className="item__job_title mb-0">
                                Web Designer | Developer
                            </p>
                            <RouterLink
                                className="item__company_title christus small_text text-decoration-none"
                                to="https://christushealth.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Christus Health
                            </RouterLink>
                        </motion.li>

                        <hr
                            style={{
                                color: "#FFA161",
                                width: "100%",
                                height: "1.2px",
                            }}
                        />

                        <motion.li
                            className="item"
                            ref={experienceItem2Ref}
                            animate={
                                experienceItem2View ? "onscreen" : "offscreen"
                            }
                            variants={slideUpVariants}
                        >
                            <p className="item__timespan mb-0 font-monospace">
                                Jan 2014 &rarr; Feb 2016
                            </p>

                            <p className="item__job_title mb-0">
                                Frontend Developer | Engineer
                            </p>
                            <RouterLink
                                className="item__company_title treetech small_text text-decoration-none"
                                to="https://treetechnology.com.np"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Tree Technology Pvt Ltd
                            </RouterLink>
                        </motion.li>
                    </ul>
                </div>
            </section>
        </>
    );
};

export default Experience;
