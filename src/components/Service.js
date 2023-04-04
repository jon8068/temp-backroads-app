import React from "react";

const Service = (props) => {
  const { id, iconClass, title, text } = props;
  return (
    <article className="service" key={id}>
      <span className="service-icon">
        <i className={iconClass}></i>
      </span>
      <div className="service-info">
        <h4 className="service-title">{title}</h4>
        <p className="service-text">{text}</p>
      </div>
    </article>
  );
};

export default Service;
