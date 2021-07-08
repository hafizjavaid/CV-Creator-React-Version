import React from "react";
import { interestsData } from "../ResumeData";
import Title from "./Shared/Title";
const Interests = () => {
  return (
    <section className="interests section">
      <Title title={interestsData.title}></Title>
      <div className="interests__container bd-grid">
        {interestsData.interests.map((interest, i) => (
          <div className="interests__content" key={i}>
            <i className={`interests__icon bx ${interest.icon}`} />
            <span className="interests__name"> {interest.text} </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Interests;
