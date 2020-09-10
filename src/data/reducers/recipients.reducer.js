import { initialRecipientsState } from "./../data";
import { ADD_RECIPIENT } from "data/constants";
function recipients(state = initialRecipientsState, action) {
  switch (action.type) {
    case ADD_RECIPIENT:
      return {
        recipientsList: [
          ...state.recipientsList,
          {
            name: action.name,
            surname: action.surname,
            email: action.email,
            accountNumber: action.accountNumber,
            phoneNumber: action.phoneNumber,
            address: action.address,
            city: action.city,
            country: action.country,
          },
        ],
      };

    default:
      return state;
  }
}

export default recipients;
