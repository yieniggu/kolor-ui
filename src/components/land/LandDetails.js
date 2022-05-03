import React from "react";
import { getDate, normalizeNumber, roundValue } from "../../utils/web3Utils";

export const LandDetails = ({
  name,
  landOwnerAlias,
  landOwner,
  country,
  stateOrRegion,
  city,
  size,
  initialTCO2perYear,
  soldTCO2,
  creationDate,
  decimals,
  VCUInfo,
}) => {
  const { emittedVCUs, projectedVCUS, VCUsLeft } = VCUInfo;

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
            <b>Size (m2): </b>
            {normalizeNumber(size, decimals * -1)}
          </li>
          <li className="list-group-item">
            <b>Estimated Initial TCO2 projected per year: </b>{" "}
            {normalizeNumber(initialTCO2perYear, decimals * -1)}
          </li>
          <li className="list-group-item">
            <b>Estimated Current TCO2 projected per year: </b>{" "}
            {normalizeNumber(projectedVCUS, decimals * -1)}
          </li>
          <li className="list-group-item">
            <b>TCO2 sold from this land: </b>{" "}
            {normalizeNumber(soldTCO2, decimals * -1)}
          </li>
          <li className="list-group-item">
            <b>This land was created on: </b>
            {getDate(creationDate)}
          </li>

          <h5 className="card-vcus text-center mt-3">
            This land has emitted {roundValue(emittedVCUs, 2)} TCO2 and has a
            remaining of {roundValue(VCUsLeft, 2)} TCO2 to sell.
          </h5>
        </ul>
      </div>
    </div>
  );
};
