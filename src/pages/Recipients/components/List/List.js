import React from "react";
import { Wrapper, ListItem, Div, ListName, P } from "./List.css";
import { connect } from "react-redux";
import { removeRecipient } from "data/actions/recipients.actions";
const List = ({
  recipientsList,
  removeRecipient,
  location,
  handleRecipient,
}) => {
  if (!recipientsList) recipientsList = [];
  const handleDeleteRecipient = (id) => {
    removeRecipient(id);
  };
  const addSpaceToString = (value, number) => {
    return [...value]
      .map((d, i) => (i % number === 0 ? " " + d : d))
      .join("")
      .trim();
  };
  return (
    <Wrapper>
      {recipientsList.map((recipient) => (
        <ListItem
          key={recipient.accountNumber}
          onClick={
            location === "send" ? (e) => handleRecipient(recipient) : null
          }
        >
          {location === "recipients" ? (
            <Div
              onClick={() => handleDeleteRecipient(recipient.accountNumber)}
            ></Div>
          ) : null}
          <ListName>
            {recipient.name} {recipient.surname}
          </ListName>
          <P>{addSpaceToString(recipient.accountNumber, 4)}</P>
          <P>{recipient.email}</P>
          <P>{addSpaceToString(recipient.phoneNumber, 3)}</P>
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
