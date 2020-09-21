import { ADD_TRANSACTION } from "data/constants";
export const addTransaction = ({
  account_id,
  description,
  amount,
  status,
  authorized_date,
  date,
}) => {
  return {
    type: ADD_TRANSACTION,
    account_id,
    description,
    amount,
    status,
    authorized_date,
    date,
  };
};
