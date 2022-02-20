import React from "react";
import { Link } from "react-router-dom";
import { getDate, normalizeNumber } from "../../web3-utils/contracts";

export const Land = ({
  identifier,
  landOwner,
  landOwnerAlias,
  name,
  size,
  decimals,
  currentTCO2,
  initialTCO2,
  soldTCO2,
  stateOrRegion,
  country,
  city,
  creationDate,
  species,
}) => {
  return (
    <div>
      <div className="col container mb-3">
        <div className="card">
          <div className="row no-gutters">
            <div className="col-4 flex-column">
              <img src="assets/land.png" alt={name} className="card-img" />
              <Link to={`/land/${identifier}`}>
                <button className="btn btn-primary w-100">Details</button>
              </Link>
            </div>
            <div className="col-8">
              <div className="card-body">
                <h5 className="card-title">
                  <b>{name}</b>
                </h5>
                <p className="card-text">
                  Land Size (m2): <b>{normalizeNumber(size, decimals * -1)}</b>
                </p>
                <p className="card-text">
                  Country: <b>{country}</b>
                </p>
                <p className="card-text">
                  State or Region: <b>{stateOrRegion}</b>
                </p>
                <p className="card-text">
                  City: <b>{city}</b>
                </p>
                <p className="card-text">
                  Current TCO2:{" "}
                  <b>{normalizeNumber(currentTCO2, decimals * -1)}</b>
                </p>
                <p className="card-text">
                  Species in this land: <b>{species.length}</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
