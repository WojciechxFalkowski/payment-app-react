import React from "react";
import { Wrapper, Label, Input } from "./SearchInput.css";
import { BiSearch } from "react-icons/bi";
const SearchInput = ({ onChange }) => {
  return (
    <Wrapper>
      <Label htmlFor="searchInput">
        <BiSearch />
      </Label>
      <Input
        onChange={onChange}
        id="searchInput"
        type="text"
        placeholder="Search transaction"
      />
    </Wrapper>
  );
};

export default SearchInput;
