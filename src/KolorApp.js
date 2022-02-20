import React, { useState } from "react";
import { Web3Context } from "./hooks/Web3Context";
import { useWeb3States } from "./hooks/web3Hooks";
import { AppRouter } from "./routers/AppRouter";

export const KolorApp = () => {
  const web3States = useWeb3States();

  return (
    <div>
      <Web3Context.Provider value={web3States}>
        <AppRouter />
      </Web3Context.Provider>
    </div>
  );
};
