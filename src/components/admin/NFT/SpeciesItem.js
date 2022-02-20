import React from "react";

export const SpeciesItem = ({
  speciesScientificName,
  speciesAlias,
  density,
  size,
  TCO2perSecond,
}) => {
  return (
    <div className="accordion-item">
      <h2
        className="accordion-header"
        id={`panelsStayOpen-heading${speciesScientificName}`}
      >
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#panelsStayOpen-collapse${speciesScientificName}`}
          aria-expanded="true"
          aria-controls={`panelsStayOpen-collapse${speciesScientificName}`}
        >
          {speciesScientificName}
        </button>
      </h2>
      <div
        id={`panelsStayOpen-collapse${speciesScientificName}`}
        className="accordion-collapse collapse show"
        aria-labelledby={`panelsStayOpen-heading${speciesScientificName}`}
      >
        <div className="accordion-body">
          <p>
            <strong>Species Alias: </strong>
            {speciesAlias}
          </p>
          <p>
            <strong>Species Name: </strong>
            {speciesScientificName}
          </p>
          <p>
            <strong>Density: </strong>
            {density}
          </p>
          <p>
            <strong>Size (m2): </strong>
            {size}
          </p>
          <p>
            <strong>TCO2 per second: </strong>
            {TCO2perSecond}
          </p>
        </div>
      </div>
    </div>
  );
};
