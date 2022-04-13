import Swal from "sweetalert2";
import { fetchWithToken } from "../helpers/fetch";
import { types } from "../types/types";

const blockscoutURL = "https://alfajores-blockscout.celo-testnet.org";

export const mintNFT = (NFT) => {
  return async (dispatch) => {
    console.log(NFT);
    console.log(blockscoutURL);

    const resp = await fetchWithToken("lands", NFT, "POST");

    const body = await resp.json();

    console.log(body);
    if (body.ok) {
      dispatch(mintNFTAction(NFT));
      Swal.fire(
        {
          title: "A new land has been minted!",
          html: confirmationMessage(body.receipts),
        },
        "success"
      );
    } else {
      Swal.fire("Error!", "Something went wrong =(", "error");
    }
  };
};

const confirmationMessage = (receipts) => {
  let receiptsMessages = "";
  receipts.map((receipt) => (receiptsMessages += getReceiptInfo(receipt)));

  return `Please check the following transactions: <br/> ${receiptsMessages}`;
};

const getReceiptInfo = (receipt) => {
  return `<br/>
  <strong>
  <a href="${
    blockscoutURL +
    "/tx/" +
    receipt.receipt.transactionHash +
    "/internal-transactions"
  }" target="_blank">${receipt.transaction}</a>
  </strong> <br/>`;
};

const mintNFTAction = (NFT) => ({
  type: types.NFTMint,
  payload: NFT,
});
