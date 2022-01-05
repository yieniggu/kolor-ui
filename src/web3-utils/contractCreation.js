export const loadAbi = async (fileName) => {
  try {
    const res = await fetch(fileName);
    //console.log("res: ", res);

    const { abi } = await res.json();

    //console.log("[5] abi loaded!")
    return abi;
  } catch (ex) {
    //console.log("[5] exception triggered on load abi");
    //console.error(ex);

    return null;
  }
};

export const createContract = async (library, contractAddress, fileName) => {
  try {
    const abi = await loadAbi(fileName);
    //console.log("abi: ", abi);

    //console.log("library from create contract: ", library);
    const { eth } = await library;
    //console.log("eth from create contract: ", eth);

    const createdContract = new eth.Contract(abi, contractAddress);

    //console.log("[6] contract created");
    return createdContract;
  } catch (ex) {
    console.error(ex);
  }
};
