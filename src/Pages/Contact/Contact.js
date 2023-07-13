import React from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "../../Reusable Components/Header";
import Footer from "../../Reusable Components/Footer";
import "../../App.sass";
import "./Contact.sass";

const Contact = () => {
  const navigate = useNavigate();

  function handleSubmit() {
    alert("You have successfully sent your message.");
    navigate("/");
  }

  return (
    <>
      <Helmet>
        <title>
          Contact | Sachin - Find me on Linkedin, Github, and CodePen
        </title>
        <meta
          name="description"
          content="Find Sachin Samal on Linkedin, Github, CodePen, and other social media platforms. Connect for collaboration and follow for more web development content."
        />
        <meta
          name="keywords"
          content="sachin samal, sacsam005, contact, sachin-samal005, email, follow sachin, find sachin"
        />
        <link rel="canonical" href="/contact" />
      </Helmet>

      <Header />
      <form
        name="contact"
        method="post"
        data-netlify="true"
        onSubmit={handleSubmit}
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div hidden>
          <input name="bot-field" />
        </div>
        <div className="form_title_div">
          <h1>CONTACT</h1>
        </div>
        <div className="form_name_and_email_div">
          <div className="form_item">
            <label htmlFor="name">FULL NAME</label>
            <input
              type="text"
              placeholder="Full Name"
              id="name"
              name="name"
              required
            />
          </div>
          <div className="form_item">
            <label htmlFor="email">EMAIL</label>
            <input
              type="email"
              placeholder="Email Address"
              id="email_id"
              name="email"
              required
            />
          </div>
        </div>
        <div className="form_textarea_div">
          <label htmlFor="message">MESSAGE</label>
          <textarea
            name="message"
            placeholder="Message"
            id="message"
            required
          ></textarea>
        </div>
        <div className="form_action_div">
          <input type="submit" value="SEND MESSAGE" />
          <input type="reset" value="RESET" />
        </div>
      </form>
      <Footer
        quoteTitle="Connection"
        quoteText="Each contact with a human being is so rare, so precious, one should preserve it"
        quoteSource="Anais Nin"
      />
    </>
  );
};

export default Contact;
