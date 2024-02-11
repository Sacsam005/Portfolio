import React, { useContext } from "react";
import { LoadingContext } from "../../App";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Loader from "../../components/Loader/Loader";
import Header from "../../layout/Header/Header";
import Hero from "../../layout/Hero/Hero";
import FloatingCard from "../../components/Cards/FloatingCard";
import Main from "../../layout/Main/Main";
import Footer from "../../layout/Footer/Footer";
import "../../App.sass";

const Home = () => {
  const { isLoading } = useContext(LoadingContext);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Helmet>
            <title>
              Sachin Samal - Modern Web Application Designer And Developer
            </title>
            <meta
              name="description"
              content="Web developer with an experience in the design, development, and implementation of strategic architectures of web and mobile applications at an enterprise level."
              data-rh="true"
            />
            <meta
              name="keywords"
              content="sachin samal, frontend development, web developer, portfolio"
            />

            {/* Open Graph (OG) meta tags */}
            <meta
              property="og:title"
              content="Sachin Samal - Modern Web Application Designer And Developer"
            />
            <meta
              property="og:site_name"
              content="Sachin Samal's Portfolio Website"
            />
            <meta
              property="og:url"
              content="https://sachinsamal.netlify.app/"
            />
            <meta
              property="og:description"
              content="Developer with experience in web and mobile application design, development, and implementation at an enterprise level."
            />
            <meta property="og:type" content="website" />
            <meta
              property="og:image"
              content="https://sachinsamal.netlify.app/static/media/sachin-samal.49dcbac0df474f805299.png"
            />

            <link rel="canonical" href="/" />
          </Helmet>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Header />
            <Hero />
            <FloatingCard />
            <Main />
            <Footer
              quoteTitle="Champion"
              quoteText="someone who is bent over from exhaustion, drenched with sweat, when no one else is looking"
              quoteSource="Eddie Gray"
            />
          </motion.div>
        </>
      )}
    </>
  );
};

export default Home;
