import { combineReducers } from "redux";
import { botsReducer } from "./botsReducer";
const reducers = combineReducers({
  allbots: botsReducer,
  // product: selectedProductsReducer,
});
export default reducers;