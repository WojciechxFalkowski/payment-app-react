import React from "react";
import { Wrapper, H1, P } from "./Recipients.css";
import { Link } from "react-router-dom";
import { List } from "./components";
const Recipients = () => {
  return (
    <Wrapper>
      <H1>Contact List</H1>
      <P>
        <Link to="/recipients/add">add new contact</Link>
      </P>
      <List />
    </Wrapper>
  );
};

export default Recipients;
