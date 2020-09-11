import { PROFILE_UPDATE } from "data/constants";
import { initialProfileState } from "./../data";

function transaction(state = initialProfileState, action) {
  switch (action.type) {
    case PROFILE_UPDATE:
      return {
        name: action.name,
        surname: action.surname,
        email: action.email,
        phoneNumber: action.phoneNumber,
      };
    default:
      return state;
  }
}

export default transaction;
