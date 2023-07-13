import React from "react";
import { Link } from "react-router-dom";
import "../Stylesheets/Footer.sass";

const Footer = ({ quoteTitle, quoteText, quoteSource }) => {
  return (
    <>
      <hr />
      <footer className="footer_section standard_text">
        <div className="footer_div_wrapper">
          <div className="quote_div px-2">
            <strong>
              <span>{quoteTitle}: </span>
              {quoteText}!<span> - {quoteSource}</span>
            </strong>
          </div>

          <div className="footer_social_links_div">
            <form className="form-inline">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control email rounded-0"
                  placeholder="Send me an Email"
                  style={{ fontSize: "1rem" }}
                />
                <div className="input-group-prepend">
                  <div className="input-group-text send-email rounded-0">
                    <Link
                      to="mailto:shachinmagar120.smATgmailDOTcom"
                      onClick={(e) =>
                        (e.currentTarget.href = e.currentTarget.href
                          .replace("AT", "@")
                          .replace("DOT", "."))
                      }
                    >
                      <i className="fa fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        <p className="text-center mt-1">
          &copy; 2023 | This page is maintained by Sachin Samal
        </p>
        <div />
      </footer>
    </>
  );
};

export default Footer;
