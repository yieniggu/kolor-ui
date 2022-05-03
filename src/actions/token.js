import Swal from "sweetalert2";
import { fetchWithoutToken, fetchWithToken } from "../helpers/fetch";
import { types } from "../types/types";
import { confirmationMessage, getNFT } from "./NFT";

const blockscoutURL = "https://alfajores-blockscout.celo-testnet.org";

export const getAssetsBalances = (uid) => {
  return async (dispatch) => {
    dispatch(getAssetsStartAction());

    const resp = await fetchWithToken("tokens/" + uid);

    const body = await resp.json();

    console.log(body);

    if (body.ok) {
      dispatch(getAssetsFinishAction(body.balances));
    } else {
      Swal.fire("Error", "Something went wrong =(", "error");
      dispatch(getAssetsFinishAction({}));
    }
  };
};

const getAssetsStartAction = () => ({
  type: types.tokensGetStart,
});

const getAssetsFinishAction = (balances) => ({
  type: types.tokensGetFinish,
  payload: {
    checking: false,
    balances,
  },
});

export const acquireLandTokens = (tokenId, amount, uid) => {
  return async (dispatch) => {
    dispatch(acquireLandTokensAction(true));

    const resp = await fetchWithToken(
      `marketplace/tokens/${tokenId}`,
      { amount },
      "POST"
    );

    const body = await resp.json();
    console.log(body);

    if (body.ok) {
      Swal.fire({
        title: "You're now a holder!",
        html: confirmationMessage(body.receipts),
      });
      dispatch(acquireLandTokensAction(false));
      dispatch(getNFT(tokenId));
      dispatch(getAssetsBalances(uid));
    } else {
      Swal.fire("Error", "Something went wrong =(", "error");
      dispatch(acquireLandTokensAction(false));
    }
  };
};

const acquireLandTokensAction = (buying) => ({
  type: types.tokenAcquire,
  payload: buying,
});
