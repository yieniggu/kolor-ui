import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { NFTMintingContext } from "../../hooks/NFTMintingContext";
import { Web3Context } from "../../hooks/Web3Context";
import { mintLandNFT, setLandSpecies } from "../../web3-utils/contracts";
import { ConnectWalletButton } from "../UI/buttons/ConnectWalletButton";
import { NFTMintingForm } from "./NFT/NFTMintingForm";
import { Species } from "./NFT/Species";

export const AdminScreen = () => {
  const { error, metamaskInstalled, loading, account, web3, NFTContract } =
    useContext(Web3Context);

  const [attributes, setAttributes] = useState({
    landAttributes: {},
    species: [],
  });

  const [mintingMessage, setMintingMessage] = useState(null);
  const endMessages = [
    "Done!",
    "Something went wrong :(",
    "Please edit and save the land attributes first :)",
    "Please add some species before minting :)",
  ];

  const resetStates = () => {
    setMintingMessage(null);
    setAttributes({
      landAttributes: {},
      species: [],
    });
  };

  const addNewLand = async () => {
    const { landAttributes, species } = attributes;
    if (Object.keys(landAttributes).length === 0) {
      setMintingMessage(endMessages[2]);
    } else if (species.length <= 0) {
      setMintingMessage(endMessages[3]);
    } else {
      setMintingMessage("Minting land NFT...");
      const mintReceipt = await mintLandNFT(account, NFTContract, attributes);
      if (mintReceipt) {
        const { tokenId } = mintReceipt.events.Transfer.returnValues;
        console.log("tokenId: ", tokenId);

        setMintingMessage("Adding species to the land...");
        const setSpeciesReceipt = await setLandSpecies(
          account,
          NFTContract,
          species,
          tokenId
        );

        if (setSpeciesReceipt) {
          setMintingMessage(endMessages[0]);
        } else {
          setMintingMessage(endMessages[1]);
        }
      } else {
        setMintingMessage(endMessages[1]);
      }
    }
  };

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : metamaskInstalled ? (
        <div>
          <div>
            <h1 className="ms-5">AdminScreen</h1>
            {error ? (
              <p>{error}</p>
            ) : mintingMessage ? (
              <div>
                <p className="text-center">{mintingMessage}</p>
                {endMessages.includes(mintingMessage) && (
                  <button
                    onClick={resetStates}
                    className="btn btn-outline-success w-100"
                  >
                    Start Again
                  </button>
                )}
              </div>
            ) : (
              <div>
                <NFTMintingContext.Provider
                  value={{ attributes, setAttributes }}
                >
                  <div className="row">
                    <NFTMintingForm />
                    <Species />
                  </div>
                  <div className="row">
                    <button
                      onClick={addNewLand}
                      className="btn btn-primary mb-3"
                    >
                      Add new Land
                    </button>
                  </div>
                </NFTMintingContext.Provider>
              </div>
            )}
          </div>
          <hr />
          <ConnectWalletButton />
        </div>
      ) : (
        <Navigate to="/no-provider" />
      )}
    </div>
  );
};
