import React from "react";
import { SpeciesItem } from "./SpeciesItem";

export const SpeciesAdded = ({ species }) => {
  return (
    <div>
      <h2 className="text-center">Current Species</h2>
      {species.length > 0 ? (
        <div>
          <br />
          <div className="accordion" id="speciesAccordion">
            {species.map((specie, id) => (
              <SpeciesItem key={id} {...specie} />
            ))}
          </div>
        </div>
      ) : (
        <p className="text-center">No species added yet....</p>
      )}
    </div>
  );
};
