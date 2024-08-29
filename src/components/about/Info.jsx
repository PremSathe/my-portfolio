import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-award about__icon"></i>
        <h3 className="about__title">
          Experiance
          <span className="about__subtitle">1 Years Working</span>
        </h3>
      </div>
      <div className="about__box">
        <i className="bx bx-briefcase about__icon"></i>
        <h3 className="about__title">
          Completed
          <span className="about__subtitle">15 + Projects</span>
        </h3>
      </div>
      <div className="about__box">
        <i className="bx bx-support about__icon"></i>
        <h3 className="about__title">
          Support
          <span className="about__subtitle">Online 24/7</span>
        </h3>
      </div>
    </div>
  );
};

export default Info;
