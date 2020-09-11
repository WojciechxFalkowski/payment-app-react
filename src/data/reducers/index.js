import { combineReducers } from "redux";

import transactions from "./transactions.reducer";
import recipients from "./recipients.reducer";
import profile from "./profile.reducer";
const RootReducer = combineReducers({
  transactions,
  recipients,
  profile,
});
export default RootReducer;
