import { types } from "../types/types";

const initialState = {
  checking: true,
  buying: false,
  balances: {},
};

export const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.tokensGetStart:
      return {
        ...state,
        checking: true,
      };

    case types.tokensGetFinish:
      return {
        ...state,
        checking: action.payload.checking,
        balances: action.payload.balances,
      };

    case types.tokenAcquire:
      return {
        ...state,
        buying: action.payload,
      };

    default:
      return state;
  }
};
