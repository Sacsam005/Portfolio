import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { LoadingContext } from "../../App";
import Header from "../../Reusable Components/Header";
import FloatingCard from "../../Reusable Components/FloatingCard";
import BlogSection from "../../Components/BlogSection";
import Footer from "../../Reusable Components/Footer";
import Loader from "../../Reusable Components/Loader";
import "../../App.sass";
import "./Blogs.sass";

const Blogs = () => {
  const { isLoading } = useContext(LoadingContext);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Helmet>
            <title>
              Sachin - Blogs on my coding journey & web development content
            </title>
            <meta
              name="description"
              content="Sachin Samal's blog includes inspiring coding journey as a web developer and essential kits for interview preparation and web development."
            />
            <meta
              name="keywords"
              content="sachin samal, web development, javascript, blogger, content, sachin's blogs, coding journey"
            />
            <link rel="canonical" href="/blogs" />
          </Helmet>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Header />
            <FloatingCard />
            <BlogSection />
            <Footer
              quoteTitle="Champion"
              quoteText="someone who is bent over from exhaustion, drenched with sweat, when no one else is looking"
              quoteSource="Eddi Gray"
            />
          </motion.div>
        </>
      )}
    </>
  );
};

export default Blogs;
