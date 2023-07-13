import React, { useContext } from "react";
import { motion } from "framer-motion";
import { LoadingContext } from "../../App";
import { Helmet } from "react-helmet-async";
import Header from "../../Reusable Components/Header";
import Loader from "../../Reusable Components/Loader";
import HeroSection from "../../Components/HeroSection";
import FloatingCard from "../../Reusable Components/FloatingCard";
import SkillSection from "../../Components/SkillSection";
import CareerSection from "../../Components/CareerSection";
import Footer from "../../Reusable Components/Footer";
import Chatbot from "../../Components/Chatbot";
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
            <title>Sachin - Web Developer, Designer, Tester, and Analyst</title>
            <meta
              name="description"
              content="Web developer with an experience in design, development, and implementation of strategic architectures of web and mobile applications at an enterprise level."
              data-rh="true"
            />
            <meta
              name="keywords"
              content="sachin samal, developer, tester, analyst, designer, sachin's portfolio"
            />

            <link rel="canonical" href="/" />
          </Helmet>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Header />
            <HeroSection />
            <FloatingCard />
            <SkillSection />
            <CareerSection />
            <Footer
              quoteTitle="Developer"
              quoteText="Someone who can convert coffee and bread into software, vision and idea into business"
              quoteSource="Web"
            />
            <Chatbot />
          </motion.div>
        </>
      )}
    </>
  );
};

export default Home;
