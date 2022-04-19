import { types } from "../types/types";

const initialState = {
  allNFTs: [],
  publishedNFTs: [],
  NFT: {},
  mintingNFT: false,
  mintingNFTSuccess: false,
  gettingNFT: true,
  gettingNFTs: true,
  gettingPublishedNFTs: true,
  landsFirstFetch: true,
};
// Reducer to handle ui changes like opening a modal
export const NFTReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.NFTMintToggle:
      return {
        ...state,
        mintingNFT: !state.mintingNFT,
        mintingNFTSuccess: false,
      };

    case types.NFTMintFinished:
      return {
        ...state,
        mintingNFT: false,
        mintingNFTSuccess: true,
        NFTs: [...state.allNFTs, action.payload],
      };

    case types.NFTsGetStart:
      return {
        ...state,
        gettingNFTs: true,
      };

    case types.NFTsGetFinished:
      return {
        ...state,
        gettingNFTs: false,
        allNFTs: action.payload,
        landsFirstFetch: false,
      };

    case types.NFTGetStart:
      return {
        ...state,
        gettingNFT: true,
      };

    case types.NFTGetFinished:
      return {
        ...state,
        gettingNFT: false,
        NFT: action.payload,
      };

    case types.NFTsGetPublished:
      return {
        ...state,
        gettingPublishedNFTs: true,
      };

    case types.NFTsGetPublishedFinished:
      return {
        ...state,
        gettingPublishedNFTs: false,
        publishedNFTs: action.payload,
      };

    case types.NFTPublishingSof:
      return {
        ...state,
        allNFTs: action.payload.mintedLands,
      };

    case types.NFTPublishing:
      return {
        ...state,
        allNFTs: action.payload.mintedLands,
        publishedNFTs: [...state.publishedNFTs, action.payload.publishedNFT],
      };

    default:
      return state;
  }
};
