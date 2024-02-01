import React, { useContext, useEffect } from "react";
import { ThemeContext, SlideUpContext } from "../../App";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import BlogCard from "../../components/Cards/BlogCard";
import "../../App.sass";
import "./Blogs.sass";

const Blogs = () => {
  const { darkMode, darkModeForSmallerDiv } = useContext(ThemeContext);
  const { slideUpVariants } = useContext(SlideUpContext);

  // Setting useInView animation
  const [blogSectionRef, blogSectionView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  useEffect(() => {
    const blogItems = document.querySelectorAll(".blog_item");
    darkModeForSmallerDiv(blogItems);
  }, [darkMode, darkModeForSmallerDiv]);

  return (
    <>
      <motion.section
        id="blog_section"
        className="blog_section"
        ref={blogSectionRef}
        animate={blogSectionView ? "onscreen" : "offscreen"}
        variants={slideUpVariants}
      >
        <h2 className="text-center heading2 mt-3">
          READ MY STORIES EXPLORING WEB DEVELOPMENT AND CODING DISCOVERIES...
        </h2>
        <div
          className="blog_container_div"
          style={{
            background:
              "url(../../../Imgs/graph_bg.png) center/cover no-repeat",
          }}
        >
          <BlogCard
            blogLink="https://opensource.com/article/22/8/coding-advice-new-programmers"
            blogTitle="My practical advice for new programmers"
          />

          <BlogCard
            blogLink="https://opensource.com/article/22/7/learn-javascript-before-reactjs"
            blogTitle="How much JavaScript do you need to know before learning ReactJS?"
          />

          <BlogCard
            blogLink="https://opensource.com/article/22/9/dark-theme-website"
            blogTitle="A beginner's guide to making a dark theme for a website"
          />

          <BlogCard
            blogLink="https://opensource.com/article/22/9/javascript-glossary"
            blogTitle="165+ JavaScript terms you need to know"
          />
          <BlogCard
            blogLink="https://opensource.com/article/22/12/learn-javascript-2023"
            blogTitle="Learn JavaScript in 2023"
          />

          <BlogCard
            blogLink="https://opensource.com/sites/default/files/2022-11/osdc_javascript-2022-11-30.zip"
            blogTitle="Learn JavaScript: 6 tutorials"
          />
        </div>
      </motion.section>
    </>
  );
};

export default Blogs;
