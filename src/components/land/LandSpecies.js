import React, { useEffect, useState } from "react";
import { normalizeNumber } from "../../utils/web3Utils";
import { OffsetModal } from "../marketplace/offset/OffsetModal";
import { SpecieDetails } from "./specie/SpecieDetails";

export const LandSpecies = ({ species }) => {
  const [specie, setSpecie] = useState(null);
  const [activeItem, setActiveItem] = useState(null);

  console.log(species);

  const toggleSelected = (specie) => {
    setActiveItem(specie.scientificName);
    setSpecie(specie);
  };

  useEffect(() => {
    species.length > 0 && setActiveItem(species[0].scientificName);
    console.log(species);
  }, []);

  return (
    <div className="row mt-5 ms-5 me-5">
      {species.length > 0 ? (
        <>
          <div className="col-5">
            <h4>Select specie to see its details</h4>
            <ul className="list-group">
              {species.map((specie, id) => (
                <li
                  key={id}
                  className={`list-group-item ${
                    activeItem === specie.scientificName && "active"
                  }`}
                  style={{ cursor: "pointer" }}
                  onClick={() => toggleSelected(specie)}
                >
                  <div className="row justify-content-between">
                    <div className="col-3">
                      <p>
                        <b>{specie.speciesAlias}</b>
                      </p>
                    </div>
                    <div className="col-3">
                      <p>{specie.scientificName}</p>
                    </div>
                    <div className="col-3">
                      <p>
                        {normalizeNumber(specie.size, specie.decimals * -1)}{" "}
                        [m2]
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-7">
            <SpecieDetails {...specie} />
          </div>
        </>
      ) : (
        <h3 className="text-center">This land has no species yet...</h3>
      )}
    </div>
  );
};
