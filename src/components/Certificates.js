import React from "react";
import { certificatesData } from "../ResumeData";
import Title from "./Shared/Title";
const Certificates = () => {
  return (
    <section className="certificate section" id="certificates">
      <Title title={certificatesData.title}></Title>
      <div className="certificate__container bd-grid">
        {certificatesData.certificates.map((certificate, i) => (
          <div className="certificate__content" key={i}>
            <h3 className="certificate__title">{certificate.title}</h3>
            <p className="certificate__description">{certificate.describe}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
