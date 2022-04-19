import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { finishGetNFTAction, getNFT, getNFTAction } from "../../actions/NFT";
import { uiOpenOffsetModal } from "../../actions/UI";
import { OffsetModal } from "../marketplace/offset/OffsetModal";
import { LandDetails } from "./LandDetails";
import { LandSpecies } from "./LandSpecies";

export const LandScreen = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { gettingNFT, NFT, allNFTs } = useSelector((state) => state.NFT);

  useEffect(() => {
    dispatch(getNFTAction());
    if (allNFTs.length > 0) {
      dispatch(finishGetNFTAction(allNFTs[id]));
    } else {
      dispatch(getNFT(id));
    }
  }, []);

  const openOffsetModal = () => {
    console.log("open offset modal");
    dispatch(uiOpenOffsetModal());
  };

  return (
    <div>
      {!gettingNFT ? (
        <div>
          <OffsetModal />
          <LandDetails {...NFT} />
          <hr />
          <LandSpecies species={NFT.species} />
          <button onClick={openOffsetModal} className="fab kolor">
            Lets Kolor!
          </button>
        </div>
      ) : (
        "Getting..."
      )}
    </div>
  );
};
