import React from "react";
import { PointItem } from "./PointItem";

export const PointsAdded = ({ points }) => {
  return (
    <div>
      <h2 className="text-center">Current Points</h2>
      {points.length > 0 ? (
        <div>
          <br />
          <div className="accordion" id="pointsAccordion">
            {points.map((point, id) => (
              <PointItem key={id} {...point} id={id} />
            ))}
          </div>
        </div>
      ) : (
        <p className="text-center">No points added yet....</p>
      )}
    </div>
  );
};
