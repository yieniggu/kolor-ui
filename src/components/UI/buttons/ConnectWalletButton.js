import detectEthereumProvider from "@metamask/detect-provider";
import React, { useContext, useState } from "react";
import { Web3Context } from "../../../hooks/Web3Context";
import {
  disconnectWallet,
  connectWallet,
  unsupportedChainId,
} from "../../../web3-utils/metamask";

export const ConnectWalletButton = () => {
  const { account, setAccount, loading, provider, setError } =
    useContext(Web3Context);

  const handleConnection = async () => {
    const account = await connectWallet(provider);
    setAccount(account);
    if (account) {
      console.log("account:", account);
      setError(null);
    } else {
      setError(unsupportedChainId);
    }
  };

  const handleDisconnect = async () => {
    await disconnectWallet(provider);
    setAccount(null);
  };

  return (
    <div className="text-center">
      {loading ? (
        <p>Loading...</p>
      ) : account ? (
        <p
          onClick={handleDisconnect}
          className="text-light bg-dark"
          style={{ cursor: "pointer" }}
        >
          {account}
        </p>
      ) : (
        <button
          onClick={handleConnection}
          className="btn btn-primary"
          disabled={loading}
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
};
