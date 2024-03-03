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
    const tools = document.querySelectorAll(".skills_items_div span");
    darkModeForSmallerDiv(tools);
  }, [darkMode, darkModeForSmallerDiv]);

  return (
    <>
      <section
        id="experience_section"
        className="experience_section mt-5"
        ref={experienceSectionRef}
        animate={experienceSectionView ? "onscreen" : "offscreen"}
        variants={slideUpVariants}
      >
        <div className="experience_div_container">
          <h2
            className={`heading text-center ${
              darkMode ? "dark_mode_gradient_text" : "light_mode_gradient_text"
            }`}
          >
            Experience
          </h2>

          <div className="experience_wrapper_div">
            <div className="skills_label__container p-2">
              <motion.div
                className="skills_items_div"
                ref={skillsRef}
                animate={skillsView ? "onscreen" : "offscreen"}
                variants={slideUpVariants}
              >
                <h3 className="m-0 p-2 text-center">Some tools I have used:</h3>

                {skills.map((skill, index) => (
                  <span key={index}>{skill}</span>
                ))}
              </motion.div>
            </div>
            <div className="timeline_column p-2">
              <h3 className="m-0 p-2 text-left">Work History</h3>

              <motion.div
                className="experience_item_wrapper"
                ref={experienceItem1Ref}
                animate={experienceItem1View ? "onscreen" : "offscreen"}
                variants={slideUpVariants}
              >
                <time dateTime="2022-02-28/2023-05-23">
                  Feb 2022 - May 2023
                </time>

                <div className="experience_item standard_text mx-3 px-3">
                  <span className="timeline_circle one"></span>
                  <div className="timeline_img">
                    <RouterLink
                      to="https://www.linkedin.com/company/christus-health/"
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="Christus Health"
                    >
                      <img
                        src={require("../../assets/imgs/christus_health_logo.jpg")}
                        alt="Sachin Samal works at Christus Health"
                        width="auto"
                        height="100%"
                      />
                    </RouterLink>
                  </div>
                  <div className="timeline_info" id="first">
                    <RouterLink
                      to="https://www.christushealth.org/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Christus Health
                    </RouterLink>
                    <div className="timeline_role_title">
                      Web Designer | Developer
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="experience_item_wrapper mt-2"
                ref={experienceItem2Ref}
                animate={experienceItem2View ? "onscreen" : "offscreen"}
                variants={slideUpVariants}
              >
                <time dateTime="2014-01-01/2016-12-31">
                  Jan 2014 - Feb 2016
                </time>

                <div className="experience_item standard_text mx-3 px-3">
                  <span className="timeline_circle two"></span>
                  <div className="timeline_img">
                    <RouterLink
                      to="https://www.linkedin.com/company/treetechnologypvtltd/"
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="Tree Technology"
                    >
                      <img
                        src={require("../../assets/imgs/sachin-samal-treetech.png")}
                        alt="Sachin Samal worked at Tree technology"
                        width="auto"
                        height="100%"
                      />
                    </RouterLink>
                  </div>
                  <div className="timeline_info" id="second">
                    <RouterLink
                      to="https://treetechnology.com.np/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Tree Technology Pvt. Ltd.
                    </RouterLink>
                    <div className="timeline_role_title">
                      Frontend Developer
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
