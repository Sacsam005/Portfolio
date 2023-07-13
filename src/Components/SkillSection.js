import React from "react";
import styled from "styled-components";

const SkillSection = () => {
  return (
    <>
      <Skills className="skills_section">
        <h2 className="text-center heading2">My Tech Stacks</h2>

        <div className="skills_div_wrapper">
          <div className="skills_div">
            <div className="skills_heading_div">
              <h3 className="mx-2">Proficient in</h3>
            </div>
            <div className="skills_items_div">
              <span>React</span>
              <span>Javascript ES6</span>
              <span>HTML | CSS</span>
              <span>SASS | SCSS</span>
              <span>TailWind CSS</span>
              <span>SharePoint Framework (SPFx)</span>
              <span>SQL | Azure Data Studio</span>
              <span>Git | GitHub</span>
              <span>NPM</span>
            </div>
          </div>
          <div className="skills_div">
            <div className="skills_heading_div">
              <h3 className="mx-2">Familiar with</h3>
            </div>
            <div className="skills_items_div">
              <span>CSharp w/.NET</span>
              <span>Microsoft Graph API</span>
              <span>SharePoint Rest API</span>
              <span>Azure DevOps</span>
              <span>ServiceNow</span>
              <span>UiPath Studio</span>
              <span>Postman</span>
              <span>SEOs</span>
              <span>APIs</span>
            </div>
          </div>
        </div>
      </Skills>
    </>
  );
};

const Skills = styled.section`
  .skills_div_wrapper {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 1rem;
    @media (max-width: 680px) {
      padding: 0.15rem;
    }
  }

  .skills_div {
    padding: 0.5rem;
    box-shadow: rgba(232, 115, 0, 0.2) 0px 1px 3px;
    margin: 0.75rem;
    width: 50%;
    @media (max-width: 680px) {
      padding: 0.15rem;
      margin: 0.25rem;
      width: 50%;
    }
    span {
      display: inline-block;
      padding: 0.5rem;
      margin: 0.35rem;
      box-shadow: 0px 4px 5px rgba(232, 115, 0, 0.2);
      -webkit-box-shadow: 0px 4px 5px rgba(255, 178, 34, 0.2);
      @media (max-width: 500px) {
        font-size: 18px;
        width: 100%;
      }
      @media (max-width: 320px) {
        font-size: 15px;
      }
    }
  }
`;

export default SkillSection;
