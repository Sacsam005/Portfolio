import React, { useContext } from "react";
import { ThemeContext, SlideUpContext } from "../../App";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const BlogCard = ({ blogLink, blogTitle }) => {
  const { darkMode } = useContext(ThemeContext);
  const { slideUpVariants } = useContext(SlideUpContext);

  // Setting useInView animation
  const [blogCardRef, blogCardView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  return (
    <>
      <motion.div
        className="blog_item m-3"
        ref={blogCardRef}
        animate={blogCardView ? "onscreen" : "offscreen"}
        variants={slideUpVariants}
      >
        <RouterLink
          to={blogLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="OpenSource Blog"
          className={`small_text p-3 text-decoration-none ${
            darkMode ? "dark_mode_gradient_text" : "light_mode_gradient_text"
          }`}
        >
          {blogTitle}

          <i className="fas fa-external-link-alt"></i>
        </RouterLink>
      </motion.div>
    </>
  );
};

export default BlogCard;
