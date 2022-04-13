import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { NFTReducer } from "./NFTReducer";
import { uiReducer } from "./uiReducer";

// All reducers used combined in one
export const rootReducer = combineReducers({
  ui: uiReducer,
  auth: authReducer,
  NFT: NFTReducer,
});
