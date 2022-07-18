import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { LandTokenBalance } from "./LandTokenBalance";

export const LandTokenBalances = ({ landTokenBalances }) => {
  return (
    <div className="text-center">
      <h3 className="mt-5">Land Tokens Balances</h3>
      {landTokenBalances.map((landTokenBalance, index) =>
        landTokenBalance != 0 ? (
          <LandTokenBalance
            key={index}
            landTokenBalance={landTokenBalance}
            index={index}
          />
        ) : (
          ""
        )
      )}
    </div>
  );
};
