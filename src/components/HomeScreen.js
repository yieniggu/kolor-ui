import React from "react";
import { useWeb3React} from "@web3-react/core";

export const HomeScreen = () => {
  const {active, account} = useWeb3React();

  return (
    <div>
      <h1>Home Screen!</h1>
    </div>
  );
};
