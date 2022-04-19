import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllNFTs } from "../../../actions/NFT";
import { LandList } from "../../land/LandList";

export const NFTManagement = () => {
  const { landsFirstFetch, gettingNFTs, allNFTs } = useSelector(
    (state) => state.NFT
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (landsFirstFetch) {
      dispatch(getAllNFTs());
    }
  }, []);

  return (
    <div>
      <LandList lands={allNFTs} getting={gettingNFTs} get={getAllNFTs} />
    </div>
  );
};
