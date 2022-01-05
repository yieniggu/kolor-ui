import { useWeb3React } from "@web3-react/core";
import React, { useEffect } from "react";
import { createContract } from "../../web3-utils/contractCreation";

export const Balance = React.memo(() => {
  const { library } = useWeb3React();

  return <div>Balance</div>;
});
