import React from "react";
import Title from "../Shared/Title";
import { socialLinks } from "../../ResumeData";
const Social = () => {
  return (
    <section className="social section">
      <Title title={socialLinks.title}></Title>
      <div className="social__container bd-grid">
        {socialLinks.links.map((sLink, i) => (
          <a href={sLink.link} rel="noreferrer"  target="_blank" key={i} className="social__link">
            <i className={`social__icon bx ${sLink.icon}`} />
            {sLink.text}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Social;
