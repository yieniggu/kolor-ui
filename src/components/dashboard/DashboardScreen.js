import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { Web3Context } from "../../hooks/Web3Context";
import { ConnectWalletButton } from "../UI/buttons/ConnectWalletButton";

export const DashboardScreen = () => {
  const { error, account, metamaskInstalled, loading } =
    useContext(Web3Context);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : metamaskInstalled ? (
        <div>
          <div>
            <h1>DashboardScreen</h1>
            {error && <p>{error}</p>}
          </div>
          
          <ConnectWalletButton />
        </div>
      ) : (
        <Navigate to="/no-provider" />
      )}
    </div>
  );
};
