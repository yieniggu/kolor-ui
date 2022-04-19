import React from "react";
import { getDate, normalizeNumber } from "../../../utils/web3Utils";

export const SpecieDetails = (specie) => {
  console.log("specie details: ", specie);

  return (
    <div>
      {Object.keys(specie).length > 0 ? (
        // TODO: ADD CARD WITH SPECIES IMAGE
        <div>
          <h4>Specie Info</h4>
          <ul className="list-group">
            <li className="list-group-item">
              <p>
                <b>Specie: </b>
                {specie.speciesAlias}
              </p>
              <p>
                <b>Scientific Name: </b>
                {specie.scientificName}
              </p>
              <p>
                <b>Density: </b>
                {normalizeNumber(specie.density, specie.decimals * -1)}%
              </p>
              <p>
                <b>TCO2 projected from specie in 5 years: </b>
                {normalizeNumber(specie.TCO2, specie.decimals * -1)}
              </p>
              <p>
                <b>TCO2 offset per second: </b>
                {normalizeNumber(
                  specie.TCO2perSecond,
                  specie.decimals * -1,
                  false
                )}
              </p>
              <p>
                <b>Added on: </b>
                {getDate(specie.creationDate)}
              </p>
              <p>
                <b>Last update on: </b>
                {specie.updateDate === "0"
                  ? "No updates yet..."
                  : getDate(specie.updateDate)}
              </p>
            </li>
          </ul>
        </div>
      ) : (
        <h4 className="text-center">
          Select a specie from left to see its details...
        </h4>
      )}
    </div>
  );
};
