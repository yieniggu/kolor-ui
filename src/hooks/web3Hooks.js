import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import {
  createMarketplaceContract,
  createNFTContract,
  fetchMintedNFTS,
  getMintedNFTS,
  initializeWeb3,
} from "../web3-utils/contracts";
import {
  connectWallet,
  isMetamaskInstalled,
  supportedChainIds,
  unsupportedChainId,
} from "../web3-utils/metamask";
import { Web3Context } from "./Web3Context";

export const useWeb3States = () => {
  const [metamaskInstalled, setMetamaskInstalled] = useState(false);
  const [loading, setLoading] = useState(true);
  const [newTransaction, setNewTransaction] = useState(false);
  const [account, setAccount] = useState(null);
  const [provider, setProvider] = useState(null);
  const [error, setError] = useState(null);
  const [web3, setWeb3] = useState(null);
  const [NFTContract, setNFTContract] = useState(null);
  const [marketplaceContract, setMarketplaceContract] = useState(null);
  const [loadingMessage, setLoadingMessage] = useState(null);
  const [mintedNFTS, setMintedNFTS] = useState(null);

  return {
    metamaskInstalled,
    setMetamaskInstalled,
    loading,
    setLoading,
    newTransaction,
    setNewTransaction,
    account,
    setAccount,
    provider,
    setProvider,
    error,
    setError,
    web3,
    setWeb3,
    NFTContract,
    setNFTContract,
    marketplaceContract,
    setMarketplaceContract,
    loadingMessage,
    setLoadingMessage,
    mintedNFTS,
    setMintedNFTS,
  };
};

export const useInitMetamask = () => {
  const {
    setMetamaskInstalled,
    setLoading,
    setProvider,
    account,
    setAccount,
    setError,
    error,
    web3,
    setWeb3,
    setNFTContract,
    setMarketplaceContract,
  } = useContext(Web3Context);

  useEffect(() => {
    const init = async () => {
      setLoading(true);

      /* Metamask detection */
      const [provider, metamask] = await isMetamaskInstalled();

      if (provider) {
        setMetamaskInstalled(metamask);
        setProvider(provider);
        setError(null);
      } else {
        setError("No provider detected!");
        setAccount(null);
      }

      /* Connect without button interaction in case 
        was authorized previously */
      if (provider) {
        const authorized = await JSON.parse(localStorage.getItem("authorized"));
        console.log("checking auth...", authorized);
        if (authorized) {
          console.log("authorized!");
          const account = await connectWallet(provider);

          if (account) {
            console.log("account connected on init...");
            setAccount(account);
            setError(null);
          } else {
            console.log("not connected on init...");
            setError(unsupportedChainId);
          }
        }
      }

      /* Init web3 */
      if (provider) {
        const web3 = initializeWeb3(provider);
        /* init contracts */
        if (web3) {
          setWeb3(web3);
          // NFT Contract
          const NFTContract = createNFTContract(web3);
          setNFTContract(NFTContract);

          // Marketplace Contract
          const marketplaceContract = createMarketplaceContract(web3);
          setMarketplaceContract(marketplaceContract);
        } else {
          setError("Couldn't connect to web3 provider...");
          setAccount(null);
        }
      }

      setLoading(false);

      if (!account && !error) {
        const handleAccountsChanged = (accounts) => {
          console.log("handling account change", accounts);
          if (accounts.length > 0) {
            setAccount(accounts[0]);
            setError(null);
          } else {
            setError("Please connect at least 1 account");
            setAccount(null);
            setWeb3(null);
          }
        };

        const handleNetworkChanged = async (networkId) => {
          console.log("Handling network id change...", networkId);
          if (!supportedChainIds.includes(networkId)) {
            console.log("Unsupported network id!", networkId);
            setAccount(null);
            setError(unsupportedChainId);
          } else {
            console.log("valid chain....");
            const account = await connectWallet(provider);
            setAccount(account);
            setError(null);
          }
        };

        provider.on("accountsChanged", handleAccountsChanged);
        provider.on("networkChanged", handleNetworkChanged);

        return () => {
          if (provider.removeListener) {
            provider.removeListener("networkChanged", handleNetworkChanged);
            provider.removeListener("accountsChanged", handleAccountsChanged);
          }
        };
      }
    };

    init();
  }, []);
};

export const useNFTContract = () => {};

export const useDetectMetamask = () => {
  const {
    metamaskInstalled,
    setMetamaskInstalled,
    loading,
    setLoading,
    setProvider,
    provider,
  } = useContext(Web3Context);

  useEffect(() => {
    console.log("loading1: ", loading);

    const detectMetamask = async () => {
      const [provider, metamask] = await isMetamaskInstalled();
      console.log("metamask installed: ", metamask);
      setMetamaskInstalled(metamask);

      setProvider(provider);
      console.log("metamask?", metamaskInstalled);
      setLoading(false);
      console.log("loading2", loading);
    };

    detectMetamask();

    return [provider, metamaskInstalled, loading];
  }, []);

  return { provider, metamaskInstalled, loading };
};

export const useConnectAuthorizedWallet = () => {
  const { account, setAccount, provider } = useContext(Web3Context);

  const authorized = localStorage.getItem("authorized");

  useEffect(() => {
    const connectAuthorizedWallet = async () => {
      if (authorized) {
        const account = await connectWallet(provider);

        setAccount(account);
      }
    };

    connectAuthorizedWallet();

    return [provider, account];
  }, []);

  return account;
};

export const useGetNFTData = () => {
  const { NFTContract, setMintedNFTS, account } = useContext(Web3Context);

  const [fetchingMessage, setFetchingMessage] = useState(
    "Fetching NFT data..."
  );
  const [NFTsInfo, setNFTsInfo] = useState([]);

  useEffect(() => {
    async function fetchNFTS() {
      try {
        const mintedNFTS = await fetchMintedNFTS(NFTContract);
        console.log("mintedNFTS: ", mintedNFTS);
        setNFTsInfo(mintedNFTS);
        setMintedNFTS(mintedNFTS);
        setFetchingMessage(null);
      } catch (e) {
        console.error("Error fetching nft data: ", e);
        setFetchingMessage("Error on fetching NFT data :(");
      }
    }

    fetchNFTS();

    return [NFTsInfo, fetchingMessage];
  }, [account]);

  return [NFTsInfo, fetchingMessage];
};

export const useGetLand = (id) => {
  const { mintedNFTS } = useContext(Web3Context);

  const [NFT, setNFT] = useState(null);
  const [loadingMessage, setLoadingMessage] = useState("Loading NFT info...");

  useEffect(() => {
    if (mintedNFTS) {
      const foundNFT = mintedNFTS.find((NFT) => NFT.identifier === id);

      setNFT(foundNFT);
      setLoadingMessage(null);
    } else {
      setLoadingMessage("Error on loading nft data :(");
    }

    return [NFT, loadingMessage];
  }, [id, mintedNFTS]);

  return [NFT, loadingMessage];
};
