import { types } from "../types/types";

const initialState = {
    lands:[{
        land_image:null,
        id:"0000",
        coordinates:"0,0",
        vcu_generated:0,
        vcu_projected:0,
        vcu_sold:0,
        purchase_date:"1-1-1970",
        liberation_date:"1-1-1970",
        profit:0,
        status:0
    }]
};

export const landReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.alterLand:
      return {
        lands: [
            ...state.filter( x => x.id !== action.payload.id),
            action.payload,
        ]
      };

    default:
      return [...state.lands];
  }
};
