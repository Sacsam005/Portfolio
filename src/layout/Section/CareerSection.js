import React, { useState, useRef, useEffect, useContext } from "react";
import { AppContext } from "../../App";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./CareerSection.sass";

const CareerSection = () => {
  const { darkMode, darkModeForSmallerDiv, slideUpVariants } =
    useContext(AppContext);
  const [popupIndex, setPopupIndex] = useState(-1);
  const popupRefs = useRef([]);
  const closeBtnRefs = useRef([]);

  const skills = [
    "CSharp",
    "Microsoft Graph API",
    "SharePoint Rest API",
    "Azure DevOps",
    "ServiceNow",
    "UiPath Studio",
    "Postman",
    "SEOs",
  ];

  // Setting useInView animation
  const [career1Ref, career1InView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  const [career2Ref, career2InView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  const [career3Ref, career3InView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  // Handle popup
  function handlePopup(index) {
    setPopupIndex(index === popupIndex ? -1 : index);
  }

  function removePopup(index) {
    popupRefs.current[index].classList.remove("open");
    setPopupIndex(-1);
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        popupIndex !== -1 &&
        !popupRefs.current[popupIndex].contains(event.target)
      ) {
        removePopup(popupIndex);
      }
    }

    if (popupIndex !== -1) {
      popupRefs.current[popupIndex].classList.add("open");
      closeBtnRefs.current[popupIndex].classList.remove("open");
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popupIndex]);

  useEffect(() => {
    const popupDivs = document.querySelectorAll(".popup");
    darkModeForSmallerDiv(popupDivs);
  }, [darkMode, darkModeForSmallerDiv]);

  return (
    <>
      <section className="career_highlights_section mt-5">
        <h2
          className={`heading text-center ${
            darkMode ? "dark_mode_gradient_text" : "light_mode_gradient_text"
          }`}
        >
          Career Highlights
        </h2>

        <motion.div
          ref={career1Ref}
          initial="offscreen"
          animate={career1InView ? "onscreen" : "offscreen"}
          variants={slideUpVariants}
        >
          <div className="career_section_wrapper wrapper_1">
            <div className="career_section_image">
              <img
                src={require("../../assets/imgs/full-stack.png")}
                alt="Sachin Samal's experience in Web Development"
                title="Sachin Samal's experience in Web Development"
                width="256px"
                height="auto"
              />
            </div>

            <div className="career_section_text">
              <h2 className="px-3 py-2">Web Design & Development</h2>

              <ul className="small_text mb-1">
                <li>
                  Developed responsive and seamless frontend UIs with elegant
                  user experience.
                </li>
                <li>
                  Constructed designs for Mobile apps/products from scratch
                  alongside w/wireframes & animated prototypes.
                </li>
                <li>Created high fidelity mockups for all sized devices.</li>
                <li>Knowledge of workflow and UX research.</li>
              </ul>

              <div className="m-3">
                <button
                  className="all_button standard_text"
                  aria-label="Read more"
                  onClick={() => handlePopup(0)}
                >
                  Read more
                </button>
              </div>

              <div
                className="popup py-2"
                ref={(el) => (popupRefs.current[0] = el)}
              >
                <i
                  className="fa fa-window-close fa-2x close"
                  ref={(el) => (closeBtnRefs.current[0] = el)}
                  onClick={() => removePopup(0)}
                ></i>
                <div className="popup_text standard_text mt-4">
                  <ul>
                    <li>
                      Designed, built and maintained single-page web
                      applications (SPA)s w/React for e-commerce and small
                      businesses (internal/external purposes) assuring engaging
                      user experience and responsive web design.
                    </li>
                    <li>
                      Developed user interfaces utilizing fetch API using react,
                      material UI w/several other libraries, tools and
                      dependencies sprinkled to minify the frontend code. Worked
                      with Search Engine optimization (SEOs), secured JSON &
                      APIs. Working knowledge of current industry patterns and
                      best practices
                    </li>
                    <li>
                      Collaborated with fellow developers and engineers for code
                      reviews, bug-fixes, creating design mockups and
                      wireframes. Provided after-launch support for internal and
                      external web applications and reduced any client downtime
                      by 50%.
                    </li>
                    <li>
                      Ensured efficient web development by supporting designers
                      and developers while maintaining website and resolving
                      performance issues.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          ref={career2Ref}
          initial="offscreen"
          animate={career2InView ? "onscreen" : "offscreen"}
          variants={slideUpVariants}
        >
          <div className="career_section_wrapper wrapper_2 px-2">
            <div className="career_section_text">
              <h2 className="px-3 py-2">Software Ecosystem Exposure</h2>

              <ul className="small_text mb-1">
                <li>Worked in DevOps infused with agile methodology.</li>
                <li>
                  Partnered with a cross-functional agile team to develop and
                  maintain web sites/applications for health organization and
                  ecommerce business.
                </li>
              </ul>

              <div
                className="skills_items_div p-2 m-0 list-unstyled"
                style={{ fontSize: "1rem" }}
              >
                <h3 className="small_text m-2">Also familiar with</h3>

                {skills.map((skill, index) => (
                  <span key={index}>{skill}</span>
                ))}
              </div>

              <div className="m-3">
                <button
                  className="all_button standard_text"
                  aria-label="Read more"
                  onClick={() => handlePopup(2)}
                >
                  Read more
                </button>
              </div>

              <div
                className="popup py-2"
                ref={(el) => (popupRefs.current[2] = el)}
              >
                <i
                  className="fa fa-window-close fa-2x close"
                  ref={(el) => (closeBtnRefs.current[2] = el)}
                  onClick={() => removePopup(2)}
                ></i>
                <div className="popup_text standard_text mt-4">
                  <ul>
                    <li>
                      Overall exposure to a wide variety of software ecosystem -
                      DevOps, ServiceNow, UiPath Studio, Mobile testing
                      automation using UiPath Studio (iOS and Android), Postman,
                      Swagger.
                    </li>
                    <li>
                      Tested healthcare software/applications, identified bugs
                      and communicated defects to Developers, documented/wrote
                      manual testing steps for quality assurance purposes;
                      executing tests and analyzing results. Performed database
                      schema testing...
                    </li>
                    <li>
                      Exposure to feature updates in existing products targeted
                      at improving operational efficiency while also maintaining
                      scalability.
                    </li>
                    <li>
                      Worked closely with external stakeholders to identify and
                      address issues that impacted daily operations. Partenered
                      with cross-functional teams to ensure seamless alignment
                      between business needs and product requirements, resulting
                      in 100% customer satisfaction.
                    </li>
                    <li>
                      Knowledge of collaboration, Project Lifecycle / Software
                      Development Life Cycle (SDLC) and familiar with CI/CD.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="career_section_image career_image_overflow">
              <div className="cube_container">
                <div className="cube">
                  <div className="cube__face cube-face--left">
                    <img
                      src={require("../../assets/logos/mongodb.png")}
                      alt="Mongo DB"
                      width="512px"
                      height="512px"
                    />
                  </div>
                  <div className="cube__face cube-face--front">
                    <img
                      src={require("../../assets/logos/express.png")}
                      alt="Express JS"
                      width="100%"
                      height="100%"
                    />
                  </div>
                  <div className="cube__face cube-face--back">
                    <img
                      src={require("../../assets/logos/nodejs.png")}
                      alt="Node JS"
                      width="100%"
                      height="100%"
                    />
                  </div>
                  <div className="cube__face cube-face--right">
                    <img
                      src={require("../../assets/logos/react.png")}
                      alt="React JS"
                      width="100%"
                      height="100%"
                    />
                  </div>
                  <div className="cube__face cube-face--top">
                    <img
                      src={require("../../assets/logos/sql.png")}
                      alt="SQL"
                      width="100%"
                      height="100%"
                    />
                  </div>
                  <div className="cube__face cube-face--bottom">
                    <img
                      src={require("../../assets/logos/javascript.png")}
                      alt="JavaScript"
                      width="100%"
                      height="100%"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          ref={career3Ref}
          initial="offscreen"
          animate={career3InView ? "onscreen" : "offscreen"}
          variants={slideUpVariants}
        >
          <div className="career_section_wrapper wrapper_3">
            <div className="career_section_image">
              <img
                src={require("../../assets/imgs/programming.png")}
                alt="Sachin Samal's experience with CMS"
                title="Sachin Samal's experience with CMS"
                width="256px"
                height="auto"
              />
            </div>

            <div className="career_section_text">
              <h2 className="px-3 py-2">
                SharePoint Admin w/Custom Development
              </h2>

              <ul className="small_text mb-1">
                <li>
                  Overall exposure to different aspect of the job including
                  SharePoint custom development using SharePoint Framework
                  (SPFx).
                </li>
                <li>
                  While doing so, I had an exposure to TypeScript | MicroSoft
                  Graph API & SharePoint Restful API | several development
                  toolchains such as gulp-cli, yeoman, pnp-spfx, Webpack
                  (.sppkg), which I consider as a massive boosting to my career.
                </li>
              </ul>

              <div className="m-3">
                <button
                  className="all_button standard_text"
                  aria-label="Read more"
                  onClick={() => handlePopup(1)}
                >
                  Read more
                </button>
              </div>

              <div
                className="popup py-2"
                ref={(el) => (popupRefs.current[1] = el)}
              >
                <i
                  className="fa fa-window-close fa-2x close"
                  ref={(el) => (closeBtnRefs.current[1] = el)}
                  onClick={() => removePopup(1)}
                ></i>
                <div className="popup_text standard_text mt-4">
                  <ul>
                    <li>
                      Hands-on experience on developing and deploying OOTB
                      SharePoint components such as custom - webparts,
                      extensions, solutions. Worked simultaneously on multiple
                      servers with different versions of build toolchain
                      dependencies, by taking full ownership to develop, test
                      and ship custom web solutions w/o any conflict. Created
                      technical and user documentation for the shipped products.
                    </li>
                    <li>
                      Integrated SharePoint platform with other Microsoft
                      products and third-party solutions and ensured their joint
                      operation without business processes interruption.
                      Migrated contents to SharePoint Online and On-Premise
                      intranets using Sharegate.
                    </li>
                    <li>
                      Provided after-launch support and reduced any client
                      downtime by 50%. Implemented feature enhancements and
                      troubleshooting procedures understanding customer
                      concerns. Developed, Integrated, and Maintained SharePoint
                      Solutions for Optimal Business Performance.
                    </li>
                    <li>
                      Collaborated closely with other stakeholders to translate
                      business needs and product requirements into innovative
                      solutions for customers. Revamped multiple sites offering
                      customization using SPFx.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default CareerSection;
