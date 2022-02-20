import React, { useContext } from "react";
import { NFTMintingContext } from "../../../hooks/NFTMintingContext";
import { SpeciesAdded } from "./SpeciesAdded";
import { SpeciesForm } from "./SpeciesForm";

export const Species = () => {

  return (
    <div className="col-6">
      <h2 className="text-center">Species</h2>
      <div className="row">
        <SpeciesForm />
      </div>
      <hr/>
      <div className="row">
        <SpeciesAdded />
      </div>
      <br/>
    </div>
  );
};
