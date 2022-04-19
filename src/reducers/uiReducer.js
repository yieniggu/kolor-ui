import { types } from "../types/types";

const initialState = {
  loginModalOpen: false,
  offsetModalOpen: false,
};
// Reducer to handle ui changes like opening a modal
export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.uiOpenLoginModal:
      return {
        ...state,
        loginModalOpen: true,
      };

    case types.uiCloseLoginModal:
      return {
        ...state,
        loginModalOpen: false,
      };

    case types.uiOpenOffsetModal:
      return {
        ...state,
        offsetModalOpen: true,
      };

    case types.uiCloseOffsetModal:
      return {
        ...state,
        offsetModalOpen: false,
      };

    default:
      return state;
  }
};
