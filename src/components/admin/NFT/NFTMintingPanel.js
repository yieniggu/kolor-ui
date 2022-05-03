import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { mintNFT } from "../../../actions/NFT";

import { useForm } from "../../../hooks/useForm";
import { NFTMintingForm } from "./NFTMintingForm";
import { PointsAdded } from "./points/PointsAdded";
import { PointsForm } from "./points/PointsForm";
import { SpeciesAdded } from "./species/SpeciesAdded";
import { SpeciesForm } from "./species/SpeciesForm";

export const NFTMintingPanel = () => {
  const dispatch = useDispatch();

  const { mintingNFTSuccess, mintingNFT } = useSelector((state) => state.NFT);

  const [landAttributes, handleLandInputChange, landReset] = useForm({
    toAddress: "0xF600c24AdC748AA5B42b94A9D39053299ffEA2f2",
    name: "",
    landOwnerAlias: "",
    size: 0,
    country: "",
    stateOrRegion: "",
    city: "",
  });

  const [speciesAttributes, handleSpeciesInputChange, speciesReset] = useForm({
    speciesAlias: "",
    scientificName: "",
    density: 0,
    //size: 0,
    initialTCO2perYear: 0,
  });

  const [pointAttributes, handlePointInputChange, pointReset] = useForm({
    latitude: 0,
    longitude: 0,
  });

  const [species, setSpecies] = useState([]);
  const [points, setPoints] = useState([]);

  useEffect(() => {
    if (mintingNFTSuccess) {
      landReset();
      setSpecies([]);
      setPoints([]);
    }
  }, [mintingNFTSuccess]);

  const handleMint = () => {
    // console.log(landAttributes, species, points);

    const NFT = { landAttributes, species, points };
    dispatch(mintNFT(NFT));
  };

  return (
    <div>
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
            setSpecies={setSpecies}
          />
        </div>
        <div className="col-6">
          {/* <h2>Species added</h2> */}
          <SpeciesAdded species={species} />
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-6">
          <PointsForm
            pointAttributes={pointAttributes}
            handleInputChange={handlePointInputChange}
            reset={pointReset}
            setPoints={setPoints}
          />
        </div>
        <div className="col-6">
          {/* <h2>Points added</h2> */}
          <PointsAdded points={points} />
        </div>
      </div>

      <button
        onClick={handleMint}
        className="btn btn-primary fab"
        disabled={mintingNFT}
      >
        Mint!
      </button>
    </div>
  );
};
