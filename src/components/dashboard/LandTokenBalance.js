import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPublishedNFTs } from "../../actions/NFT";

export const LandTokenBalance = ({ landTokenBalance, index }) => {
  const { landsFirstFetch, gettingPublishedNFTs, publishedNFTs } = useSelector(
    (state) => state.NFT
  );

  console.log(index);

  const dispatch = useDispatch();

  useEffect(() => {
    // if all lands not fetched yet dispatch fetch action
    if (landsFirstFetch && gettingPublishedNFTs) {
      dispatch(getPublishedNFTs());
    }
  }, []);

  return (
    <div className="text-center">
      {gettingPublishedNFTs ? (
        <h3>Loading...</h3>
      ) : (
        <div>
          <h4>
            {landTokenBalance} $tokens from  
            <Link to={`/lands/${index}`}>
              <a> {publishedNFTs[index].name}</a>
            </Link>
          </h4>
          <br />
        </div>
      )}
    </div>
  );
};
