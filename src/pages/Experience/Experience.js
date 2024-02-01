import React, { useContext, useEffect } from "react";
import { ThemeContext, SlideUpContext } from "../../App";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../../App.sass";
import "./Experience.sass";

const Experience = () => {
  const { darkMode, darkModeForSmallerDiv } = useContext(ThemeContext);
  const { slideUpVariants } = useContext(SlideUpContext);

  const skills = [
    "ReactJS",
    "Javascript | ES6",
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
        className="experience_section"
        ref={experienceSectionRef}
        animate={experienceSectionView ? "onscreen" : "offscreen"}
        variants={slideUpVariants}
      >
        <div className="experience_div_container">
          <h2 className="text-center mt-3 heading2">Experience</h2>
          <div className="experience_wrapper_div">
            <div className="timeline_label">
              <motion.div
                className="skills_items_div"
                ref={skillsRef}
                animate={skillsView ? "onscreen" : "offscreen"}
                variants={slideUpVariants}
              >
                {skills.map((skill, index) => (
                  <span key={index}>{skill}</span>
                ))}
              </motion.div>
            </div>
            <div className="timeline timeline_column">
              <motion.div
                className="experience_item_wrapper"
                ref={experienceItem1Ref}
                animate={experienceItem1View ? "onscreen" : "offscreen"}
                variants={slideUpVariants}
              >
                <time dateTime="2022-02-28/2023-05-23">
                  Feb 2022 - May 2023
                </time>
                <div className="experience_item small_text">
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
                  <div className="timeline_info clear-after" id="first">
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
                    <p>Feb 2022 - May 2023</p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="experience_item_wrapper"
                ref={experienceItem2Ref}
                animate={experienceItem2View ? "onscreen" : "offscreen"}
                variants={slideUpVariants}
              >
                <time dateTime="2014-01-01/2016-12-31">2014 - 2016</time>
                <div className="experience_item small_text">
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
                  <div className="timeline_info clear-after" id="second">
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
                    <p>Jan 2014 - Feb 2016</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="projects_section standard_text pt-4">
        <h2 className="text-center heading2">
          Exploratory Projects and Insightful Learnings
        </h2>
        <div className="projects_div_wrapper">
          <p className="small_text px-4 py-2">
            Web development has allowed me to effectively communicate my ideas
            through digital means and establish a seamless interaction with
            users. I believe that technology is a massive field where it's very
            uncommon for any individual to possess complete expertise in their
            respective field so, its always an advantage if you're a resourceful
            person. I've always tried to be one...
          </p>
          <Project
            title="WeatherCast"
            description="WeatherCast is a web-based weather forecasting application created using reactJS from scratch. It provides up-to-date information on the diverse factors influencing accurate weather predictions worldwide. Thanks to the data provided by OpenWeatherMap API."
            liveLink="https://weathercastrjs.netlify.app/"
            repoLink="https://github.com/Sacsam005/Weather_Application_React"
          />
          <Project
            title="React Admin Dashboard"
            description="React Admin Dashboard is a dummy sales dashboard built using ReactJS and Material UI. It supports google sign in and includes various features such as data tables, dynamic data grids, and PDF generation."
            liveLink="https://admindashrjs.netlify.app/"
            repoLink="https://github.com/Sacsam005/React_Admin_Dashboard"
          />
          <Project
            title="MediaCraft PRO"
            description="MediaCraft PRO is a browser-based tool to transform your media files swiftly and effortlessly, without the fuss. Built with plain JavaScript, this tool offers a user-friendly interface and a wide range of supported formats, to effortlessly convert your images and videos, edit, make gifs, get custom photo collages and more. Try MediaCraft PRO today!"
            liveLink="https://mediacraftpro.netlify.app/"
            repoLink="https://github.com/Sacsam005/MediaCraft-PRO"
          />
        </div>
      </section> */}
    </>
  );
};

export default Experience;
