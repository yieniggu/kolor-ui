export const getERC20Balance = async (contract, address) => {
  const { balanceOf, decimals } = contract.methods;

  const decimals_ = await decimals().call();
  console.log("decimals", decimals_);
  const balance = await balanceOf(address).call();

  return balance;
};

export const getERC20Owner = async (contract) => {
  const { owner } = contract.methods;

  return await owner().call();
};

export const getERC20Vault = async (contract) => {
  const { vault } = contract.methods;

  return await vault().call();
};

export const getERC20Supply = async (contract) => {
  const { totalSupply } = contract.methods;

  return await totalSupply().call();
};

export const getERC20Info = async (contract) => {
  console.log("getting erc20 info...");
  //console.log("contract from geterc20info: ", contract);
  try {
    const { _address: address } = contract;
    const owner = await getERC20Owner(contract);
    const vault = await getERC20Vault(contract);
    const supply = await getERC20Supply(contract);

    return {
      address,
      owner,
      vault,
      supply,
    };
  } catch (ex) {
    console.error(ex);
  }
};
