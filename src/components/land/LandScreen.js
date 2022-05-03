import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  finishGetNFTAction,
  getNFT,
  getNFTAction,
  NFTErrorFalseAction,
} from "../../actions/NFT";
import { uiOpenOffsetModal, uiOpenTokensModal } from "../../actions/UI";
import { TokensModal } from "../marketplace/land-tokens/TokensModal";
import { OffsetModal } from "../marketplace/offset/OffsetModal";
import { LandDetails } from "./LandDetails";
import { LandError } from "./LandError";
import { LandSpecies } from "./LandSpecies";

export const LandScreen = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { gettingNFT, NFT, NFTError, allNFTs } = useSelector(
    (state) => state.NFT
  );

  useEffect(() => {
    //dispatch(getNFTAction());
    if (allNFTs.length > 0) {
      dispatch(finishGetNFTAction(allNFTs[id]));
      dispatch(NFTErrorFalseAction());
    } else {
      dispatch(getNFT(id));
    }
    console.log(NFTError);
  }, []);

  const openOffsetModal = () => {
    console.log("open offset modal");
    dispatch(uiOpenOffsetModal());
  };

  const openTokensModal = () => {
    dispatch(uiOpenTokensModal());
  };

  return (
    <div>
      {!gettingNFT ? (
        NFTError ? (
          <LandError />
        ) : (
          <div>
            <OffsetModal />
            <TokensModal />
            <LandDetails {...NFT} />
            <hr />
            <LandSpecies species={NFT.species} />
            <button
              onClick={openOffsetModal}
              className="fab kolor"
              disabled={NFT.state !== "2"}
            >
              Lets Kolor{NFT.state !== "2" && " Soon"}!
            </button>
            <button
              className="fab tokens"
              onClick={openTokensModal}
              disabled={NFT.landTokenInfo.available === 0}
            >
              {NFT.landTokenInfo.available > 0
                ? "Land Tokens Available!"
                : "Sold Out"}
            </button>
          </div>
        )
      ) : (
        "Getting..."
      )}
    </div>
  );
};
