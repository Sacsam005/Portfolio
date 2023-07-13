import React, { useState, useContext, useEffect } from "react";
import BlogCard from "../Reusable Components/BlogCard";
import { ThemeContext } from "../App";

const BlogSection = () => {
  const { darkMode, darkModeForSmallerDiv } = useContext(ThemeContext);
  const [currentItem, setCurrentItem] = useState(3);
  const [isLoadMoreBtnVisible, setLoadMoreBtnVisible] = useState(true);
  const [isNoContentBtnVisible, setNoContentBtnVisible] = useState(false);

  // Copy blog links onclick
  const copyLink = (link) => {
    navigator.clipboard.writeText(link);
    alert("Link copied to clipboard!");
  };

  // Display 3 blogs on each click
  function handleLoadMore() {
    const boxes = document.querySelectorAll(".blog_item");
    const remainingItems = boxes.length - currentItem;
    const itemsToDisplay = Math.min(3, remainingItems);

    for (let i = currentItem; i < currentItem + itemsToDisplay; i++) {
      boxes[i].style.display = "inline-block";
    }

    setCurrentItem(currentItem + itemsToDisplay);

    if (currentItem >= boxes.length) {
      setLoadMoreBtnVisible(false);
      setNoContentBtnVisible(true);
    } else if (remainingItems <= 3) {
      setLoadMoreBtnVisible(false);
      setNoContentBtnVisible(true);
    }
  }

  useEffect(() => {
    const blogItemContents = document.querySelectorAll(".blog_item_content");
    darkModeForSmallerDiv(blogItemContents);
  }, [darkMode, darkModeForSmallerDiv]);

  return (
    <>
      <section id="blog_section" className="blog_section default_padding">
        <div className="blog_container_div">
          <div className="row">
            <div className="blog_item col-xs-12 col-sm-6 col-md-4">
              <div className="blog_section_heading">
                <h1 className="heading2" style={{ fontSize: "2.5rem" }}>
                  Read my stories exploring web development and coding
                  discoveries...
                </h1>
                <p className="medium_text">
                  Stay informed about the evolving technology, frameworks and
                  tools. Keep in touch.
                  <span style={{ color: "#e77200", fontWeight: 500 }}>
                    {" "}
                    <strong
                      className="heading2"
                      style={{ fontSize: "1.75rem" }}
                    >
                      COMING SOON !!!
                    </strong>
                  </span>
                </p>
              </div>
            </div>

            <BlogCard
              blogLink="https://opensource.com/article/22/8/coding-advice-new-programmers"
              blogImg="https://opensource.com/sites/default/files/lead-images/wfh_work_home_laptop_work.png"
              blogSource="OpenSource"
              blogTitle="My practical advice for new programmers"
              blogDesc="Being an efficient and curious problem-solver will help you succeed as a programmer."
              copyLink={copyLink}
            />

            <BlogCard
              blogLink="https://opensource.com/article/22/7/learn-javascript-before-reactjs"
              blogImg="https://opensource.com/sites/default/files/lead-images/OSDC_women_computing_5.png"
              blogSource="OpenSource"
              blogTitle="How much JavaScript do you need to know before learning ReactJS?"
              blogDesc="The main idea is to be good in JavaScript so you can reduce the complexity of your ReactJS journey."
              copyLink={copyLink}
            />

            <BlogCard
              blogLink="https://opensource.com/article/22/9/dark-theme-website"
              blogImg="https://opensource.com/sites/default/files/lead-images/browser_web_internet_website.png"
              blogSource="OpenSource"
              blogTitle="A beginner's guide to making a dark theme for a website"
              blogDesc="Learn how to program dark website themes using HTML, CSS variables, classes, and JavaScript methods."
              copyLink={copyLink}
            />

            <BlogCard
              blogLink="https://opensource.com/article/22/9/javascript-glossary"
              blogImg="https://opensource.com/sites/default/files/lead-images/code_javascript.jpg"
              blogSource="OpenSource"
              blogTitle="165+ JavaScript terms you need to know"
              blogDesc="Keep this JavaScript glossary bookmarked to reference variables, methods, strings, and more."
              copyLink={copyLink}
            />
            <BlogCard
              blogLink="https://opensource.com/article/22/12/learn-javascript-2023"
              blogImg="https://opensource.com/sites/default/files/lead-images/code2.png"
              blogSource="OpenSource"
              blogTitle="Learn JavaScript in 2023"
              blogDesc="Download our new JavaScript programming guide in honor of the popular programming language's 27th anniversary"
              copyLink={copyLink}
            />

            <BlogCard
              blogLink="https://opensource.com/sites/default/files/2022-11/osdc_javascript-2022-11-30.zip"
              blogImg="https://opensource.com/sites/default/files/2022-11/osdc_JavaScript_2022-11-30.jpg"
              blogSource="OpenSource"
              blogTitle="Learn JavaScript: 6 tutorials"
              blogDesc="This downloadable eBook contains 6 JavaScript tutorials and an extensive glossary."
              copyLink={copyLink}
            />
          </div>
        </div>
      </section>

      {isLoadMoreBtnVisible && (
        <button
          className="all_button standard_text"
          id="load-more-btn"
          onClick={handleLoadMore}
        >
          Load more
        </button>
      )}
      {isNoContentBtnVisible && (
        <button
          id="no-content-btn"
          className="standard_text"
          style={{
            display: "block",
            pointerEvents: "none",
            opacity: 0.75,
            zIndex: "unset",
            border: "none",
          }}
        >
          No more content
        </button>
      )}
    </>
  );
};

export default BlogSection;
