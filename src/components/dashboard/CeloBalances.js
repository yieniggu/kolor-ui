import React from "react";

export const CeloBalances = ({ nativeBalances }) => {
  const { cUSDBalance, celoBalance } = nativeBalances;

  return (
    <div className="text-center">
      <h3>Native balances</h3>
      <h4>Your current cUSD balance is: ${cUSDBalance}</h4>
      <h4 className="mt-2">Your current Celo balance is: ${celoBalance}</h4>
    </div>
  );
};
