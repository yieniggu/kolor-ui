import React from "react";
import { AppRouter } from "./routers/AppRouter";
import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";

const getLibrary = (provider) => {
  return new Web3(provider);
};

export const KolorApp = () => {
  return (
    <div>
      <Web3ReactProvider getLibrary={getLibrary}>
        <AppRouter />
      </Web3ReactProvider>
    </div>
  );
};
