import React from "react";
import { Wrapper, ListItem, ListName, P } from "./List.css";
import { connect } from "react-redux";
const List = ({ recipientsList }) => {
  if (!recipientsList) recipientsList = [];
  return (
    <Wrapper>
      {recipientsList.map((recipient) => (
        <ListItem key={recipient.accountNumber}>
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

export default connect((state) => {
  return { recipientsList: state.recipients.recipientsList };
})(List);
