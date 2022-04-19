import React from "react";
import { getDate, normalizeNumber } from "../../utils/web3Utils";

export const LandDetails = ({
  name,
  landOwnerAlias,
  landOwner,
  country,
  stateOrRegion,
  city,
  size,
  initialTCO2,
  currentTCO2,
  soldTCO2,
  creationDate,
  decimals,
}) => {
  return (
    <div className="row mt-5">
      <div className="col-4">
        <img src="/assets/land.png" alt={name} className="img-thumbnail" />
      </div>
      <div className="col-8">
        <h3>{name}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Land Owner: </b> {landOwnerAlias}
          </li>
          <li className="list-group-item">
            <b>Land Owner Address</b> {landOwner}
          </li>
          <li className="list-group-item">
            <b>Country: </b> {country}
          </li>
          <li className="list-group-item">
            <b>State or Region: </b> {stateOrRegion}
          </li>
          <li className="list-group-item">
            <b>City: </b> {city}
          </li>
          <li className="list-group-item">
            <b>Size (m2)</b>
            {normalizeNumber(size, decimals * -1)}
          </li>
          <li className="list-group-item">
            <b>Initial TCO2 projected: </b>{" "}
            {normalizeNumber(initialTCO2, decimals * -1)}
          </li>
          <li className="list-group-item">
            <b>Current TCO2 projected: </b>{" "}
            {normalizeNumber(currentTCO2, decimals * -1)}
          </li>
          <li className="list-group-item">
            <b>TCO2 sold from this land: </b>{" "}
            {normalizeNumber(soldTCO2, decimals * -1)}
          </li>
          <li className="list-group-item">
            <b>This land was created on: </b>
            {getDate(creationDate)}
          </li>
        </ul>
      </div>
    </div>
  );
};
