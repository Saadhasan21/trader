
import { ActionTypes } from "../constants/action-types";
const intialState = {
  botsData: [{
    "id": 1,
    "bot": "Hot Bot",
    "description": "Hot bot is low volatility portfolio of growth stocks selected based on our proprietary metrics",
    "index": 289.34,
    "cagr": 34
  },
  {
    "id": 2,
    "bot": "Cool Bot",
    "description": "Cool bot is low volatility portfolio of growth stocks selected based on our proprietary metrics",
    "index": 439.34,
    "cagr": 28
  },
  {
    "id": 3,
    "bot": "Options Bot",
    "description": "Options bot is low volatility portfolio of growth stocks selected based on our proprietary metrics",
    "index": 139.34,
    "cagr": 42
  },
  ],
};

export const botsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return state
    default:
      return state;
  }
};

// export const selectedProductsReducer = (state = {}, { type, payload }) => {
//   console.log(type);
//   switch (type) {
//     case ActionTypes.SELECTED_PRODUCT:
//       return { ...state, ...payload };
//     case ActionTypes.REMOVE_SELECTED_PRODUCT:
//       return {};
//     default:
//       return state;
//   }
// };