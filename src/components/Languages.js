import React from "react";
import Title from "./Shared/Title";
import { languageData } from "../ResumeData";
const Languages = () => {
  return (
    <section className="languages section">
      <Title title={languageData.title}></Title>
      <ul className="languages__content bd-grid">
        {languageData.languages.map((language, i) => (
          <li className="languages__name" key={i}>
            <span className="languages__circle" />
            {language}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Languages;
