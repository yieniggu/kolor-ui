import detectEthereumProvider from "@metamask/detect-provider";

export const supportedChainIds = ["44787"];

export const unsupportedChainId =
  "Unsupported network... Please connect to CELO Alfajores!";

export const isMetamaskInstalled = async () => {
  const provider = await detectEthereumProvider();

  if (provider) {
    console.log("Provider installed: ", provider);
    return [provider, true];
  } else {
    console.log("Please install metamask");
    return [null, false];
  }
};

export const connectWallet = async (provider) => {
  try {
    console.log("Connecting wallet...");
    const accounts = await provider.request({
      method: "eth_requestAccounts",
    });
    console.log(accounts[0]);

    console.log("provider network id", provider.networkVersion);

    if (supportedChainIds.includes(provider.networkVersion)) {
      localStorage.setItem("authorized", JSON.stringify(true));
      return accounts[0];
    } else {
      console.log("unsupported network");
      return null;
    }
  } catch (e) {
    console.error("Error: ", e);
    return null;
  }
};

export const disconnectWallet = async (provider) => {
  console.log("disconnecting wallet...");

  if (provider.close) {
    console.log("closing provider...");
    await provider.close();
  }

  localStorage.setItem("authorized", false);
};
