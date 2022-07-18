import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { acquireLandTokens } from "../../../actions/token";
import { useForm } from "../../../hooks/useForm";
import { Assets } from "./Assets";

export const LandTokens = () => {
  const { NFT } = useSelector((state) => state.NFT);
  const { balances, buying } = useSelector((state) => state.token);
  const { uid } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const {
    available,
    initialAmount,
    currentAmount,
    sold,
    creationDate,
    totalHolders,
  } = NFT.landTokenInfo;

  const [formValues, handleInputChange] = useForm({
    tokensToBuy: 1,
  });

  const { tokensToBuy } = formValues;

  const buyLandTokens = () => {
    dispatch(acquireLandTokens(NFT.tokenId, tokensToBuy, uid));
  };

  return (
    <div className="row pt-3 ps-5">
      <div className="col-4">
        <h3 className="text-center">
          {Object.keys(balances).length > 0
            ? balances.landTokenBalances[NFT.tokenId] > 0
              ? "You're part of this land!"
              : "Be part of this land too!"
            : "Be part of this land too!"}
        </h3>
        <div className="">
          <p className="token-info-text">
            This land had an initial offering of <b>{initialAmount}</b> land
            tokens. Currently there's a total of{" "}
            <b>
              {available}/{currentAmount}
            </b>{" "}
            tokens available.
          </p>
          <p>
            Buy{" "}
            <input
              className="token-input"
              type="number"
              name="tokensToBuy"
              onChange={handleInputChange}
              min={1}
              step={1}
              value={tokensToBuy}
            />{" "}
            land token{tokensToBuy > 1 && "s"} at a price of <br />
            <b>{tokensToBuy} $cUSD</b>
          </p>
        </div>

        <div>
          {totalHolders === "0" ? (
            <h5 className="first-holder">Be the first holder of this land!</h5>
          ) : (
            <h5 className="has-holders">
              There are {totalHolders} holders already!
            </h5>
          )}
          {sold / currentAmount < 0.25 && (
            <h4 className="get-tokens early">
              Looks like you're early. Get your land tokens now
              {totalHolders > 0 && ` and join other ${totalHolders} holders`}!
            </h4>
          )}

          {sold / currentAmount < 0.75 && sold / currentAmount > 0.25 && (
            <h4 className="get-tokens peak">
              This land is at its peak point. Get your land tokens now
              {totalHolders > 0 && ` and join other ${totalHolders} holders`}!
            </h4>
          )}

          {sold / currentAmount > 0.75 && (
            <h4 className="get-tokens late">
              Hurry up, this land is selling out! Get your land tokens now
              {totalHolders > 0 && ` and join other ${totalHolders} holders`}!
            </h4>
          )}
        </div>
      </div>

      <div className="col-8">
        <Assets />
      </div>
      <div className="row text-center mt-5">
        {uid && Object.keys(balances).length > 0 && (
          <button
            onClick={buyLandTokens}
            className="btn btn-outline-dark w-100"
            disabled={
              balances.nativeBalances.cUSDBalance < tokensToBuy || buying
            }
          >
            {balances.nativeBalances.cUSDBalance >= tokensToBuy &&
            balances.nativeBalances.celoBalance > 0.0001
              ? "Buy tokens"
              : "Not enough balance"}
          </button>
        )}
      </div>
    </div>
  );
};
