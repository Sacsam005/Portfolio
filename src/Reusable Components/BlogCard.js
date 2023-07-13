import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({
  blogLink,
  blogImg,
  blogSource,
  blogTitle,
  blogDesc,
  copyLink,
}) => {
  const handleClick = () => {
    copyLink(blogLink);
  };

  return (
    <>
      <div className="blog_item col-xs-12 col-sm-6 col-md-4 mt-3 standard_text">
        <Link
          to={blogLink}
          className="blog_item_link"
          aria-label="OpenSource Blog"
        >
          <div
            className="blog_item_img"
            style={{
              backgroundImage: `url(${blogImg})`,
            }}
          ></div>
          <div className="blog_item_content">
            <span className="blog_item_label ">{blogSource}</span>
            <h2>{blogTitle}</h2>
            <p>{blogDesc}</p>
          </div>
        </Link>

        <i className="fa fa-copy copy_icon" onClick={handleClick}></i>
      </div>
    </>
  );
};

export default BlogCard;
