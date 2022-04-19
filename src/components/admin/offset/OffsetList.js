import React from "react";
import { useDispatch } from "react-redux";
import { OffsetCard } from "./OffsetCard";

export const OffsetList = ({ offsetRequests, getting, get }) => {
  const dispatch = useDispatch();

  const refetch = () => {
    dispatch(get());
  };

  return (
    <div>
      {getting ? (
        <h2 className="text-center">Getting offset requests</h2>
      ) : (
        <div>
          <button className="fab" onClick={refetch}>
            <i className="fa-solid fa-arrows-rotate"></i>
          </button>
          {offsetRequests.length > 0 ? (
            <div className="row row-cols-3 mb-5">
              {offsetRequests.map((request, id) => (
                <OffsetCard key={id} offsetRequest={request} />
              ))}
            </div>
          ) : (
            <h3 className="text-center">Theres no offset requests yet...</h3>
          )}
        </div>
      )}
    </div>
  );
};
