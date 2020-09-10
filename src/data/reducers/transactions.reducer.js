import {} from "data/constants";
import { initialTransactionState } from "./../data";

function transaction(state = initialTransactionState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default transaction;
