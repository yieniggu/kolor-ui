import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAssetsBalances } from "../../actions/token";
import { CeloBalances } from "./CeloBalances";
import { LandTokenBalances } from "./LandTokenBalances";

export const Balances = () => {
  const { balances, checkingBalances } = useSelector((state) => state.token);
  const dispatch = useDispatch();

  useEffect(() => {
    if (Object.keys(balances).length === 0) {
      dispatch(getAssetsBalances());
    }
  }, []);

  return (
    <div className="col-8">
      {checkingBalances ? (
        <h4 className="text-center">Checking...</h4>
      ) : (
        <div>
          <CeloBalances {...balances} />
          <LandTokenBalances landTokenBalances={balances.landTokenBalances} />
        </div>
      )}
    </div>
  );
};
