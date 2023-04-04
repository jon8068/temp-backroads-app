import React from "react";

const Tour = (props) => {
  const {
    id,
    img,
    tourName,
    tourDetails,
    tourDate,
    location,
    duration,
    price,
  } = props;
  return (
    <article className="tour-card" key={id}>
      <div className="tour-img-container">
        <img src={img} className="tour-img" alt="" />
        <p className="tour-date">{tourDate}</p>
      </div>
      <div className="tour-info">
        <div className="tour-title">
          <h4>{tourName}</h4>
        </div>
        <p>{tourDetails}</p>
        <div className="tour-footer">
          <p>
            <span>
              <i className="fas fa-map"></i>
            </span>{" "}
            {location}
          </p>
          <p>{duration}</p>
          <p>{price}</p>
        </div>
      </div>
    </article>
  );
};

export default Tour;
