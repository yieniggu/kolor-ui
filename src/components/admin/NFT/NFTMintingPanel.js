import React from "react";
import { useForm } from "../../../hooks/useForm";
import { NFTMintingForm } from "./NFTMintingForm";
import { PointsForm } from "./PointsForm";
import { SpeciesForm } from "./SpeciesForm";

export const NFTMintingPanel = () => {
  const [landAttributes, handleLandInputChange, landReset] = useForm({
    toAddress: "",
    name: "",
    landOwnerAlias: "",
    size: 0,
    country: "",
    stateOrRegion: "",
    city: "",
  });

  const [speciesAttributes, handleSpeciesInputChange, speciesReset] = useForm({
    speciesAlias: "",
    speciesScientificName: "",
    density: 0,
    size: 0,
    TCO2perSecond: 0,
  });

  const [pointAttributes, handlePointInputChange, pointReset] = useForm({
    latitude: 0,
    longitude: 0,
  });

  return (
    <div className="text-center">
      <div className="row">
        <NFTMintingForm
          landAttributes={landAttributes}
          handleInputChange={handleLandInputChange}
        />
      </div>
      <hr />
      <div className="row">
        <div className="col-6">
          <SpeciesForm
            speciesAttributes={speciesAttributes}
            handleInputChange={handleSpeciesInputChange}
            reset={speciesReset}
          />
        </div>
        <div className="col-6">
          <h2>Species added</h2>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-6">
          <PointsForm
            pointAttributes={pointAttributes}
            handleInputChange={handlePointInputChange}
            reset={pointReset}
          />
        </div>
        <div className="col-6">
          <h2>Points added</h2>
        </div>
      </div>
    </div>
  );
};
