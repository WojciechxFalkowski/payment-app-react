import { ADD_RECIPIENT } from "data/constants";
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
