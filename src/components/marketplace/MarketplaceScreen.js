import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPublishedNFTs } from "../../actions/NFT";
import { LandList } from "../land/LandList";

export const MarketplaceScreen = () => {
  const dispatch = useDispatch();

  const { landsFirstFetch, gettingPublishedNFTs, publishedNFTs } = useSelector(
    (state) => state.NFT
  );

  useEffect(() => {
    // if all lands not fetched yet dispatch fetch action
    if (landsFirstFetch && gettingPublishedNFTs) {
      dispatch(getPublishedNFTs());
    }
  }, []);

  return (
    <div>
      <h2 className="text-center mt-2 mb-4">Available Lands</h2>
      <div className="container">
        <LandList
          lands={publishedNFTs}
          type="published"
          getting={gettingPublishedNFTs}
          get={getPublishedNFTs}
        />
      </div>
    </div>
  );
};
