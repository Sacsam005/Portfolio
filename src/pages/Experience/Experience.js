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
    const tools = document.querySelectorAll(".skill_labels_div span");
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
            <div className="skill_items_container p-2">
              <motion.div
                className="skill_labels_div"
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

            <ul className="experience__items_list">
              <h3 className="m-0 p-2 text-center">Work History</h3>
              <motion.li
                className="item"
                ref={experienceItem1Ref}
                animate={experienceItem1View ? "onscreen" : "offscreen"}
                variants={slideUpVariants}
              >
                <p className="item__timespan mb-0">Feb 2022 - May 2023</p>
                <p className="item__job_title mb-0">Web Designer | Developer</p>
                <RouterLink
                  className="item__company_title christus"
                  to="https://christushealth.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Christus Health
                </RouterLink>
              </motion.li>

              <motion.li
                className="item"
                ref={experienceItem2Ref}
                animate={experienceItem2View ? "onscreen" : "offscreen"}
                variants={slideUpVariants}
              >
                <p className="item__timespan mb-0">Aug 2020-Nov 2022</p>
                <p className="item__job_title mb-0">Frontend Developer</p>
                <RouterLink
                  className="item__company_title treetech"
                  to="https://treetechnology.com.np"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tree Technology Pvt Ltd
                </RouterLink>
              </motion.li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
