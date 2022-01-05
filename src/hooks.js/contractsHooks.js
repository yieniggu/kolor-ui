import { useState, useEffect, useMemo } from "react";
import { getERC20Balance, getERC20Info } from "../helpers/tokenGetters";
import { getLibrary } from "../helpers/web3Getters";
import { createContract } from "../web3-utils/contractCreation";

export const useCreateContract = (web3Context, address, abi) => {
  const [state, setState] = useState({
    contract: null,
    loading: true,
  });

  useEffect(() => {
    getLibrary(web3Context).then((library) => {
      //console.log("[3] library from create contract: ", library);
      createContract(library, address, abi).then((contract) => {
        //console.log("[4] contract from create contract: ", contract);
        setState({
          contract,
          loading: false,
        });
      });
    });
  }, [web3Context, address, abi]);

  return state;
};

export const useGetERC20Balance = (contract, address) => {
  const [state, setState] = useState({
    balance: 0,
    loading: true,
  });

  useEffect(() => {
    getERC20Balance(contract, address).then((balance) => {
      setState({
        balance,
        loading: false,
      });
    });
    return () => {
      setState({});
    };
  }, [contract, address]);
};

export const useGetERC20Info = (contract) => {
  //console.log("contract from usegeterc20info effect: ", contract);

  const [state, setState] = useState({
    address: "loading...",
    owner: "loading...",
    vault: "loading...",
    supply: "loading",
  });

  useEffect(() => {
    getERC20Info(contract).then(({ address, owner, vault, supply }) => {
      setState({
        address,
        owner,
        vault,
        supply,
      });
      return () => {
        setState({});
      };
    });
  }, [contract]);

  return state;
};

// export const useGetERC20Info = (contract) => {
//   //console.log("contract from usegeterc20info memo: ", contract);

//   const [state, setState] = useState({
//     address: "",
//     owner: "",
//     vault: "",
//     totalSupply: 0,
//   });

//   const result = useMemo(() => {
//     const { _address: address } = contract;
//     getERC20Info(contract).then(({ owner, vault, supply }) => {
//       setState({
//         address,
//         owner,
//         vault,
//         supply,
//       });
//     });
//   }, [contract]);

//   console.log("token info from gerc20: ");

//   return state;
// };

export const useGetLibrary = (context) => {
  const [state, setState] = useState({
    library: null,
    loading: true,
  });

  useEffect(() => {
    getLibrary(context).then((library) => {
      setState({
        library,
        loading: false,
      });
    });
  }, [context]);

  return state;
};
