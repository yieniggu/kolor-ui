import React from "react";
import {LandList} from "./LandList"
import { useStore } from 'react-redux'

export const MarketplaceScreen = () => {
  const store = useStore();
  return (
    <div>
        <h1>Kolor Marketplace</h1>
        {<LandList lands={store.getState().lands.filter(x => x.status === 3)} />}
    </div>
  );
};
