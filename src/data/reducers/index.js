import { combineReducers } from "redux";

import transactions from "./transactions.reducer";
const RootReducer = combineReducers({
  transactions,
});
export default RootReducer;
