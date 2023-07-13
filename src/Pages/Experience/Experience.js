import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { LoadingContext } from "../../App";
import Header from "../../Reusable Components/Header";
import FloatingCard from "../../Reusable Components/FloatingCard";
import Footer from "../../Reusable Components/Footer";
import Loader from "../../Reusable Components/Loader";
import "../../App.sass";
import "./Experience.sass";

const Experience = () => {
  const { isLoading } = useContext(LoadingContext);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Helmet>
            <title>
              Sachin - Experience in modern web application development
            </title>
            <meta
              name="description"
              content="Sachin Samal has an in-depth understanding of modern methodology for design, programming, delivery, and support standards for enterprise-level web applications."
            />
            <meta
              name="keywords"
              content="sachin samal, experience, developer, testing, uiux, design, christus, programming, delivery, modern methodology, support"
            />
            <link rel="canonical" href="/experience" />
          </Helmet>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Header />

            <section
              id="experience_section"
              className="experience_section default_padding"
            >
              <div className="experience_div_container">
                <h1
                  className="text-center mt-3 heading2"
                  style={{ fontSize: "2.5rem" }}
                >
                  Professional Experience | Projects | Learnings
                </h1>
                <div className="experience_wrapper_div">
                  <div className="row">
                    <div className="col-md-6 timeline_label">
                      <img
                        src={require("../../Img/sachin-as-a-web-developer.png")}
                        alt="Sachin Samal is an experienced web developer"
                        title="Web Developer | Sachin Samal"
                        width="282.25px"
                        height="auto"
                      />
                    </div>
                    <div className="col-md-6 timeline timeline_column">
                      <div className="experience_item_wrapper">
                        <time dateTime="2022-02-28/2023-05-23">
                          Feb 2022 - May 2023
                        </time>
                        <div className="experience_item small_text">
                          <span className="timeline_circle one"></span>
                          <div className="timeline_img">
                            <Link
                              to="https://www.christushealth.org/"
                              aria-label="Christus Health"
                            >
                              <img
                                src={require("../../Img/christus_health_logo.jpg")}
                                alt="Sachin Samal works at Christus Health"
                                width="auto"
                                height="100%"
                              />
                            </Link>
                          </div>
                          <div className="timeline_info clear-after" id="first">
                            <Link to="https://www.christushealth.org/">
                              Christus Health
                            </Link>
                            <div className="timeline_role_title">
                              Web Designer | Developer
                            </div>
                            <p>Feb 2022 - May 2023</p>
                          </div>
                        </div>
                      </div>
                      <div className="experience_item_wrapper">
                        <time dateTime="2014-01-01/2016-12-31">
                          2014 - 2016
                        </time>
                        <div className="experience_item small_text">
                          <span className="timeline_circle two"></span>
                          <div className="timeline_img">
                            <Link
                              to="https://www.linkedin.com/company/treetechnologypvtltd/"
                              aria-label="Tree Technology"
                            >
                              <img
                                src={require("../../Img/sachin-samal-treetech.png")}
                                alt="Sachin Samal worked at Tree technology"
                                width="auto"
                                height="100%"
                              />
                            </Link>
                          </div>
                          <div
                            className="timeline_info clear-after"
                            id="second"
                          >
                            <Link to="https://www.linkedin.com/company/treetechnologypvtltd/">
                              Tree Technology Pvt. Ltd.
                            </Link>
                            <div className="timeline_role_title">
                              Frontend Developer
                            </div>
                            <p>Jan 2014 - Feb 2016</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <FloatingCard />

            <section className="projects_section mt-2 standard_text">
              <h2
                className="text-center heading2"
                style={{ fontSize: "2.5rem" }}
              >
                Exploratory Projects and Insightful Learnings
              </h2>
              <div className="projects_div_wrapper">
                <div className="project_div">
                  <p>
                    Web development has allowed me to effectively communicate my
                    ideas through digital means and establish a seamless
                    interaction with users. I believe that technology is a
                    massive field where it's very uncommon for any individual to
                    possess complete expertise in their respective field so, its
                    always an advantage if you're a resourceful person. I've
                    always tried to be one...
                  </p>
                </div>

                <div className="project_div">
                  <p>
                    WeatherCast is a web-based weather forecasting application
                    created using reactJS from scratch. It provides up-to-date
                    information on the diverse factors influencing accurate
                    weather predictions worldwide. Thanks to the data provided
                    by OpenWeatherMap API.
                  </p>
                  <div className="project_links_div">
                    <Link
                      to="https://weathercastrjs.netlify.app/"
                      className="all_button"
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="Weather App Project"
                    >
                      View Live
                    </Link>
                    <Link
                      to="https://github.com/Sacsam005/Weather_Application_React"
                      className="all_button"
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="Weather App Project"
                    >
                      GitHub Repo
                    </Link>
                  </div>
                </div>

                <div className="project_div">
                  <p>
                    React Admin Dashboard is a dummy sales dashboard built using
                    ReactJS and Material UI. It supports google sign in and
                    includes various features such as data tables, dynamic data
                    grids, and PDF generation.
                  </p>
                  <div className="project_links_div">
                    <Link
                      to="https://admindashrjs.netlify.app/"
                      className="all_button"
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="React Admin Dashboard"
                    >
                      View Live
                    </Link>
                    <Link
                      to="https://github.com/Sacsam005/React_Admin_Dashboard"
                      className="all_button"
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="React Admin Dashboard"
                    >
                      GitHub Repo
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            <Footer
              quoteTitle="Experience"
              quoteText="Wisdom is with the aged, and understanding in length of days"
              quoteSource="Bible | Job 12:12"
            />
          </motion.div>
        </>
      )}
    </>
  );
};

export default Experience;
