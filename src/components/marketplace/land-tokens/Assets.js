import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAssetsBalances } from "../../../actions/token";

export const Assets = () => {
  const { balances, checking } = useSelector((state) => state.token);
  const { uid, address } = useSelector((state) => state.auth);
  const { NFT } = useSelector((state) => state.NFT);

  const dispatch = useDispatch();

  useEffect(() => {
    if (Object.keys(balances).length === 0) {
      dispatch(getAssetsBalances());
    }
  }, []);

  return (
    <div className="ps-4">
      {uid ? (
        <div>
          {checking ? (
            <h2>Checking...</h2>
          ) : (
            Object.keys(balances).length > 0 && (
              <div>
                <h2 className="text-center pt-4">
                  You currently own <b>{balances.landTokenBalances[NFT.tokenId]}</b> tokens of this land.
                </h2>
                <div className="token-balances">
                  <h4 className="text-center">
                    {" "}
                    Your current cUSD balance is:{" "}
                    <b>{balances.nativeBalances.cUSDBalance}</b>
                  </h4>
                  <h4 className="text-center">
                    {" "}
                    Your current CELO balance is:{" "}
                    <b>{balances.nativeBalances.celoBalance}</b>
                  </h4>
                </div>

                <h2 className="mt-4 text-center">
                  Not enough funds? <a href="#">Deposit now!</a>
                </h2>
              </div>
            )
          )}
        </div>
      ) : (
        <div>
          <div className="text-center tokens-login">
            <h3>Looking to invest?</h3>
            <h5> Sign in now and start protecting Patagonia!</h5>
          </div>
        </div>
      )}
    </div>
  );
};
