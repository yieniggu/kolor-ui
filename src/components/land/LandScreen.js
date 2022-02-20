import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { useGetLand } from "../../hooks/web3Hooks";
import { LandDetails } from "./LandDetails";
import { LandSpecies } from "./LandSpecies";

export const LandScreen = () => {
  const { id } = useParams();
  const [mintedNFT, loadingMessage] = useGetLand(id);

  console.log("minted nft: ", mintedNFT);

  return (
    <div>
      {loadingMessage ? (
        <p className="text-center">{loadingMessage}</p>
      ) : mintedNFT ? (
        <div>
          <LandDetails {...mintedNFT} />
          <hr />
          <LandSpecies species={mintedNFT.species} />
        </div>
      ) : (
        <p className="text-center">Land not found :(</p>
      )}
    </div>
  );
};
