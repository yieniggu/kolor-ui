import React, { useContext } from "react";
import { NFTMintingContext } from "../../../hooks/NFTMintingContext";
import { SpeciesItem } from "./SpeciesItem";

export const SpeciesAdded = () => {
  const { attributes } = useContext(NFTMintingContext);

  const { species } = attributes;

  return (
    <div>
      <h2>Current Species</h2>
      {species.length > 0 ? (
        <div>
          <br />
          <div className="accordion" id="speciesAccordion">
            {species.map((specie) => (
              <SpeciesItem key={specie.speciesScientificName} {...specie} />
            ))}
          </div>
        </div>
      ) : (
        <p>No species added yet....</p>
      )}
    </div>
  );
};
