import Web3 from "web3";
import { NFTAbi } from "./abis/NFTAbi";
import { marketplaceAbi } from "./abis/MarketplaceAbi";
import { checkAttributes, checkSpecies } from "../helpers/validations";

const fiveYearsInSeconds = 31536000 * 5;

export const getDate = (dateInTimestamp) => {
  const date = new Date(dateInTimestamp * 1000);

  return date.toLocaleString();
};

export const createNFTContract = (web3) => {
  const contract = new web3.eth.Contract(
    NFTAbi,
    "0x45C4071eF868Df5237069FF383964f8bA246D4FF"
  );

  return contract;
};

export const createMarketplaceContract = (web3) => {
  const contract = new web3.eth.Contract(
    marketplaceAbi,
    "0x27D0A8bB799eE3a0711Be76c5A11615F22d0Dd84"
  );

  return contract;
};

export const initializeWeb3 = (provider) => {
  const web3 = new Web3(provider);

  return web3;
};

export const safeMint = async (account, contract, landAttributes) => {
  let {
    toAddress,
    name,
    identifier,
    landOwnerAlias,
    size,
    country,
    stateOrRegion,
    city,
    initialTCO2,
  } = landAttributes;

  size = Number(size);
  landAttributes.size = Number(size);

  const decimals = maxDecimalsOf(landAttributes);

  const receipt = await contract.methods
    .safeMint(
      toAddress,
      name,
      identifier,
      toAddress,
      landOwnerAlias,
      decimals,
      normalizeNumber(size, decimals),
      country,
      stateOrRegion,
      city,
      normalizeNumber(initialTCO2, decimals)
    )
    .send({ from: account });

  return receipt;
};

export const setSpecies = async (account, contract, species, tokenId) => {
  console.log("species from set species: ", species);
  try {
    const receipt = await contract.methods
      .setSpecies(tokenId, species)
      .send({ from: account });
    console.log("set species receipt: ", receipt);
    return receipt;
  } catch (e) {
    console.log("error on sending setspecies tx");
    console.error(e);
    return null;
  }
};

export const getInitialTCO2 = (species) => {
  let initialTCO2 = 0;

  species.map((specie) => {
    initialTCO2 += specie.TCO2perSecond * fiveYearsInSeconds;
    console.log("initial tco2 now: ", initialTCO2);
  });

  return Math.round(initialTCO2);
};

export const mintLandNFT = async (account, contract, attributes) => {
  if (checkAttributes(attributes)) {
    let { landAttributes, species } = attributes;
    try {
      const initialTCO2 = getInitialTCO2(species);
      landAttributes = { ...landAttributes, initialTCO2 };
      const receipt = await safeMint(account, contract, landAttributes);

      console.log("receipt: ", receipt);
      return receipt;
    } catch (e) {
      console.error(e);
      return null;
    }
  } else {
    return null;
  }
};

export const setLandSpecies = async (account, contract, species, tokenId) => {
  console.log("species on setLand species: ", species);
  if (checkSpecies(species)) {
    try {
      console.log("species checked from setland species");
      const speciesAsArrays = convertSpeciesToArray(species);
      console.log("speciesAsArrays: ", speciesAsArrays);
      const receipt = await setSpecies(
        account,
        contract,
        speciesAsArrays,
        tokenId
      );
      return receipt;
    } catch (e) {
      console.error(e);
      return null;
    }
  } else {
    return null;
  }
};

export const refactorSpecie = (specie) => {
  specie.initialTCO2 = Number(getInitialTCO2([specie]));
  specie.size = Number(specie.size);
  specie.density = Number(specie.density);
  specie.TCO2perSecond = Number(specie.TCO2perSecond);

  return specie;
};

export const convertSpeciesToArray = (species) => {
  let speciesAsArrays = [];
  species.map((specie) => {
    console.log("before refactor: ", specie);
    specie = refactorSpecie(specie);
    console.log("refactored...: ", specie);
    let {
      speciesAlias,
      speciesScientificName,
      size,
      initialTCO2,
      TCO2perSecond,
      density,
    } = specie;

    const decimals = maxDecimalsOf(specie);
    console.log("specie decimals done: ", decimals);

    let specieAsArray = [];
    specieAsArray.push(
      speciesAlias,
      speciesScientificName,
      normalizeNumber(density, decimals),
      normalizeNumber(size, decimals),
      decimals,
      normalizeNumber(TCO2perSecond, decimals),
      normalizeNumber(initialTCO2, decimals),
      0,
      0,
      0
    );

    speciesAsArrays.push(specieAsArray);
  });

  return speciesAsArrays;
};

/* #################################### GETTERS ###################################### */

export const fetchMintedNFTS = async (contract) => {
  const totalSupply = await getTotalSupply(contract);
  console.log("total NFT supply: ", totalSupply);

  const mintedNFTS = await getMintedNFTS(contract, totalSupply);

  return mintedNFTS;
};

export const getTotalSupply = async (contract) => {
  const totalSupply = await contract.methods.totalSupply().call();

  return totalSupply;
};

export const getMintedNFTS = async (contract, totalSupply) => {
  const mintedNFTS = [];
  for (let i = 0; i < totalSupply; i++) {
    let NFTInfo = await contract.methods.getNFTInfo(i).call();
    NFTInfo = extractNFTProps(NFTInfo);
    console.log(`nft info of token ${i}: `, NFTInfo);
    const species = await getSpecies(contract, i);

    NFTInfo.species = species;
    mintedNFTS.push(NFTInfo);
  }

  return mintedNFTS;
};

export const getSpecies = async (contract, tokenId) => {
  const totalSpecies = await contract.methods.totalSpeciesOf(tokenId).call();
  const species = [];
  for (let i = 0; i < totalSpecies; i++) {
    let specie = await contract.methods.species(tokenId, i).call();
    specie = extractSpecieProps(specie);
    species.push(specie);
  }

  return species;
};

export const extractSpecieProps = (specie) => {
  const {
    speciesAlias,
    scientificName,
    density,
    landId,
    size,
    TCO2perSecond,
    TCO2,
    creationDate,
    updateDate,
    decimals,
  } = specie;

  return {
    speciesAlias,
    scientificName,
    density,
    landId,
    size,
    TCO2perSecond,
    TCO2,
    creationDate,
    updateDate,
    decimals,
  };
};

export const extractNFTProps = (NFTInfo) => {
  const {
    identifier,
    landOwner,
    landOwnerAlias,
    name,
    size,
    country,
    city,
    stateOrRegion,
    creationDate,
    initialTCO2,
    currentTCO2,
    soldTCO2,
    decimals,
  } = NFTInfo;
  return {
    identifier,
    landOwner,
    landOwnerAlias,
    name,
    size,
    country,
    city,
    stateOrRegion,
    creationDate,
    initialTCO2,
    currentTCO2,
    soldTCO2,
    decimals,
  };
};

export const extractNumberTypes = (object) => {
  // extract object keys
  const keys = Object.keys(object);

  let numbers = [];
  keys.forEach((key) => {
    console.log(`key ${key}: ${object[key]} - type: ${typeof object[key]}`);
    if (typeof object[key] === "number") {
      console.log("number found: ", object[key]);
      numbers.push(object[key]);
    }
  });

  return numbers;
};

export const countDecimals = (number) => {
  if (Math.floor(number) === number) return 0;

  let str = number.toString();
  console.log("string: ", str);

  const splitted = str.split(".");
  console.log(`decimals: 0.${splitted[1]}`);
  return splitted[1].length;
};

export const extractMaxDecimals = (numbers) => {
  let maxDecimals = 0;
  numbers.forEach((number) => {
    let currentDecimals = countDecimals(number);
    if (currentDecimals > maxDecimals) maxDecimals = currentDecimals;
  });

  return maxDecimals;
};

export const maxDecimalsOf = (object) => {
  const numbers = extractNumberTypes(object);

  const maxDecimals = extractMaxDecimals(numbers);

  console.log("max decimals: ", maxDecimals);
  return maxDecimals;
};

export const normalizeNumber = (number, decimals = 0) => {
  return Math.round(number * Math.pow(10, decimals));
};
