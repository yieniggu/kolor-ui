import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { Web3Context } from "../../hooks/Web3Context";
import { useGetNFTData, useGetNFTDatamemo } from "../../hooks/web3Hooks";
import { ConnectWalletButton } from "../UI/buttons/ConnectWalletButton";
import { LandList } from "./LandList";

export const MarketplaceScreen = () => {
  const { error, metamaskInstalled, loading } = useContext(Web3Context);
  const [mintedNFTS, fetchingMessage] = useGetNFTData();

  /* TODO: handle re render states with redux*/

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : metamaskInstalled ? (
        <div>
          <div>
            <h1 className="text-center">MarketplaceScreen</h1>
            {error ? (
              <p>{error}</p>
            ) : (
              <div>
                <h4 className="text-center">NFT Lands</h4>
                <LandList
                  mintedNFTS={mintedNFTS}
                  fetchingMessage={fetchingMessage}
                />
              </div>
            )}
          </div>

          <ConnectWalletButton />
        </div>
      ) : (
        <Navigate to="/no-provider" />
      )}
    </div>
  );
};
