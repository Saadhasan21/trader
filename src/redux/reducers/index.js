import { combineReducers } from "redux";
import { botsReducer } from "./botsReducer";
import { selectedbotsReducer} from "./botsReducer"
const reducers = combineReducers({
  allbots: botsReducer,
  bots: selectedbotsReducer,
});
export default reducers;