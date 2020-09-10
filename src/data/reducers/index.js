import { combineReducers } from "redux";

import transactions from "./transactions.reducer";
import recipients from "./recipients.reducer";
const RootReducer = combineReducers({
  transactions,
  recipients,
});
export default RootReducer;
