import { PROFILE_UPDATE } from "data/constants";
export const addRecipient = ({ name, surname, email, phoneNumber }) => {
  console.log(name, surname, email, phoneNumber);
  return {
    type: PROFILE_UPDATE,
    name,
    surname,
    email,
    phoneNumber,
  };
};
