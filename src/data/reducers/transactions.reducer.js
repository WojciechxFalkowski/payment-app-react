import { ADD_TRANSACTION } from "data/constants";
import { initialTransactionState } from "./../data";

function transaction(state = initialTransactionState, action) {
  switch (action.type) {
    case ADD_TRANSACTION: {
      return {
        transactions: [
          {
            account_id: action.account_id,
            ref_id: "",
            transaction: action.description,
            type_transaction: "Out",
            amount: action.amount,
            iso_currency_code: "USD",
            status: action.status,
            country: "USA",
            authorized_date: action.authorized_date,
            date: action.date,
          },
          ...state.transactions,
        ],
      };
    }
    default:
      return state;
  }
}

export default transaction;
