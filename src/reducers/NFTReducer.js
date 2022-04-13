import { types } from "../types/types";

const initialState = {
  NFTS: [],
};
// Reducer to handle ui changes like opening a modal
export const NFTReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.NFTMint:
      return {
        ...state,
        NFTS: [...state.NFTS, action.payload],
      };

    default:
      return state;
  }
};
