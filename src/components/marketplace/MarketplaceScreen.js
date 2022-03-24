import React from "react";
import {LandList} from "./LandList"

const lands = [
    {
    "id":"000",
    "land_image":"../../media/SendaDarwin1-6x2ha.png",
    "VCU":102.90,
    "totalTokens":102,
    "availableTokens":100,
    "coordinates":"-41.866667,-73.666667"
    },
    {
    "id":"001",
    "land_image":"../../media/SendaDarwin2-4x4ha.png",
    "VCU":877,
    "totalTokens":870,
    "availableTokens":70,
    "coordinates":"-41.866667,-73.666667"
    },
    {
    "id":"003",
    "land_image":"../../media/SendaDarwin3-10x7ha.png",
    "VCU":4052.69,
    "totalTokens":3050,
    "availableTokens":202,
    "coordinates":"-41.866667,-73.666667"
    }
    ]

export const MarketplaceScreen = () => {
  return (
    <div>
        <h1>Kolor Marketplace</h1>
        {<LandList lands={lands} />}
    </div>
  );
};
