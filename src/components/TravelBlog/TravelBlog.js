import React from "react";
import "./Travelblog.css";

//This contains the place holders of the main section of the website. The values are passed dynamically.
export const TravelBlog = (props) => {
  return (
    <div className="card-wrapper">
      <div className="card-heading">
        <h1>{props.pHeading}</h1>
      </div>
      <div className="card-container">
        <img src={props.pImg1} alt="" className="card-image" />
        <img src={props.pImg2} alt="" className="card-image" />
        <img src={props.pImg3} alt="" className="card-image" />
      </div>
      <div className="card-description">
        <h3>{props.pDesc}</h3>
      </div>
    </div>
  );
};

export default TravelBlog;
