import React from "react";
import { Wrapper, ListItem, Div, ListName, P } from "./List.css";
import { connect } from "react-redux";
import { removeRecipient } from "data/actions/recipients.actions";
const List = ({ recipientsList, removeRecipient }) => {
  if (!recipientsList) recipientsList = [];
  const handleDeleteRecipient = (id) => {
    removeRecipient(id);
  };
  return (
    <Wrapper>
      {recipientsList.map((recipient) => (
        <ListItem key={recipient.accountNumber}>
          <Div
            onClick={() => handleDeleteRecipient(recipient.accountNumber)}
          ></Div>
          <ListName>
            {recipient.name} {recipient.surname}
          </ListName>
          <P>{recipient.accountNumber}</P>
          <P>{recipient.email}</P>
          <P>{recipient.phoneNumber}</P>
          <P>{recipient.address}</P>
          <P>{recipient.city}</P>
          <P>{recipient.country}</P>
        </ListItem>
      ))}
    </Wrapper>
  );
};

export default connect(
  (state) => {
    return { recipientsList: state.recipients.recipientsList };
  },
  { removeRecipient }
)(List);
