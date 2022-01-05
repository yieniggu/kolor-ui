import React, { useEffect, useState } from "react";
import { injected } from "../../web3-utils/connectors";
import { useWeb3React } from "@web3-react/core";
import { useEagerConnect, useInactiveListener } from "../../hooks.js/connectorHooks";

export const ConnectWalletButton = () => {
  const { connector, account, activate, error } = useWeb3React();
  //console.log("injected: ", injected);

  // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
  const triedEager = useEagerConnect();

  const [activatingConnector, setActivatingConnector] = useState();

  // handle logic to recognize the connector currently being activated
  useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);

  // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
  useInactiveListener(!triedEager || !!activatingConnector);

  const connected = "Injected" === connector;
  const disabled = !triedEager || !!activatingConnector || connected || !!error;

  const connectWallet = async () => {
    try {
      await activate(injected);
      console.log("wallet connected with address: ", account);
    } catch (ex) {
      console.error(ex);
    }
  };

  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={connectWallet}
        disabled={disabled}
      >
        Connect wallet
      </button>
    </div>
  );
};
