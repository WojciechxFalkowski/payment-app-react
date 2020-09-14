import React from "react";
import { Wrapper, Label, Input } from "./SearchInput.css";
import { BiSearch } from "react-icons/bi";
import { useTranslation } from "react-i18next";

const SearchInput = ({ onChange }) => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Label htmlFor="searchInput">
        <BiSearch />
      </Label>
      <Input
        onChange={onChange}
        id="searchInput"
        type="text"
        placeholder={t("Search transaction")}
      />
    </Wrapper>
  );
};

export default SearchInput;
