import { combineReducers } from "redux";

import transactions from "./transactions.reducer";
import recipients from "./recipients.reducer";
import profile from "./profile.reducer";
import overview from "./overview.reducer";

const RootReducer = combineReducers({
  transactions,
  recipients,
  profile,
  overview,
});
export default RootReducer;
