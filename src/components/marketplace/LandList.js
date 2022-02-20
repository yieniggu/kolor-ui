import React from "react";
import { useGetNFTData } from "../../hooks/web3Hooks";
import { Land } from "./LandCard";

export const LandList = React.memo(({ mintedNFTS, fetchingMessage }) => {
  return (
    <div>
      {fetchingMessage ? (
        <p className="text-center">{fetchingMessage}</p>
      ) : mintedNFTS.length > 0 ? (
        <div className="row row-cols-3 mb-5">
          {mintedNFTS.map((NFT) => (
            <Land key={NFT.identifier} {...NFT} />
          ))}
        </div>
      ) : (
        <p className="text-center">There is no lands yet</p>
      )}
    </div>
  );
});
