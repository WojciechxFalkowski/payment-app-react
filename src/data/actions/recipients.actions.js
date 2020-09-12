import { ADD_RECIPIENT, REMOVE_RECIPIENT } from "data/constants";
export const addRecipient = ({
  name,
  surname,
  email,
  accountNumber,
  phoneNumber,
  address,
  city,
  country,
}) => {
  return {
    type: ADD_RECIPIENT,
    name,
    surname,
    email,
    accountNumber,
    phoneNumber,
    address,
    city,
    country,
  };
};
export const removeRecipient = (id) => {
  return {
    type: REMOVE_RECIPIENT,
    id,
  };
};
