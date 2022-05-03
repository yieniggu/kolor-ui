import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { publishLand } from "../../actions/NFT";
import { normalizeNumber } from "../../utils/web3Utils";

export const LandCard = ({ land }) => {
  const dispatch = useDispatch();
  const { allNFTs } = useSelector((state) => state.NFT);

  const {
    name,
    size,
    decimals,
    stateOrRegion,
    country,
    city,
    species,
    tokenId,
    state,
    publishing,
  } = land;

  const publish = () => {
    dispatch(publishLand(allNFTs, tokenId));
  };

  return (
    <div>
      <div className="col container mb-3">
        <div className="card">
          <div className="row no-gutters">
            <div className="col-4 flex-column">
              <img src="assets/land.png" alt={name} className="card-img" />
              <Link to={`/lands/${tokenId}`}>
                <button className="btn btn-primary w-100" disabled={publishing}>
                  Details
                </button>
              </Link>
              {state !== "3" && (
                <button
                  className="btn btn-outline-primary w-100 mt-2"
                  disabled={publishing}
                  onClick={publish}
                >
                  Publish
                </button>
              )}
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
