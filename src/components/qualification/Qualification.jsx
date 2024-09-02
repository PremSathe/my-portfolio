import React from "react";

const Qualification = () => {
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personel Journey</span>

      <div className="qualification_container container">
        <div className="qualification_tabs">
          <div className="qualification__button qualification__active button--flex">
            <i className="uil uil-graduation-cap qualification__icon"></i>
            {""}
            Education
          </div>
        </div>

        <div className="qualification__button button--flex">
          <i className="uil uil-briefcase-alt qualification__icon"></i>
          {""}
          Experiance
        </div>
        <div className="qualification__sections">
            <div className="qualification__content">
                
            </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
