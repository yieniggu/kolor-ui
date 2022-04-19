import React from "react";
import { useDispatch } from "react-redux";
import { LandCard } from "./LandCard";

export const LandList = ({ lands, getting, get, type = "minted" }) => {
  const dispatch = useDispatch();

  const refetch = () => {
    dispatch(get());
  };

  return (
    <div>
      {getting ? (
        <h2 className="text-center">Getting {type} lands...</h2>
      ) : (
        <div>
          <button className="fab" onClick={refetch}>
            <i className="fa-solid fa-arrows-rotate"></i>
          </button>
          {lands.length > 0 ? (
            <div className="row row-cols-3 mb-5">
              {lands.map((land, id) => (
                <LandCard key={id} land={land} />
              ))}
            </div>
          ) : (
            <h3 className="text-center">Theres no {type} lands yet...</h3>
          )}
        </div>
      )}
    </div>
  );
};
