import React from "react";

export const PointItem = ({ latitude, longitude, id }) => {
  return (
    <div className="accordion-item">
      <h2
        className="accordion-header"
        id={`panelsStayOpen-headingPoint${id}`}
      >
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#panelsStayOpen-collapsePoint${
            id
          }`}
          aria-expanded="true"
          aria-controls={`panelsStayOpen-collapsePoint${id}`}
        >
          Location Point
        </button>
      </h2>
      <div
        id={`panelsStayOpen-collapsePoint${id}`}
        className="accordion-collapse collapse show"
        aria-labelledby={`panelsStayOpen-headingPoint${id}`}
      >
        <div className="accordion-body">
          <p>
            <strong>Latitude: </strong>
            {latitude}
          </p>
          <p>
            <strong>Longitude: </strong>
            {longitude}
          </p>
        </div>
      </div>
    </div>
  );
};
