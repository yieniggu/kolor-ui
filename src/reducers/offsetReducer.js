import { types } from "../types/types";

const initialState = {
  sendingRequest: false,
  firstRequestsFetch: true,
  gettingRequests: true,
  offsetRequests: [],
};

export const offsetReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.offsetRequestStart:
      return {
        ...state,
        sendingRequest: true,
      };

    case types.offsetRequestFinish:
      return {
        ...state,
        sendingRequest: false,
      };

    case types.offsetRequestsGetStart:
      return {
        ...state,
        firstRequestsFetch: false,
        gettingRequests: true,
      };

    case types.offsetRequestsGetFinish:
      return {
        ...state,
        gettingRequests: false,
        offsetRequests: action.payload,
      };

    default:
      return state;
  }
};
