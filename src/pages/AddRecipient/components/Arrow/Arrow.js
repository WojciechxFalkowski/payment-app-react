import { Wrapper } from "./Arrow.css";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useHistory } from "react-router-dom";

const Arrow = () => {
  const history = useHistory();
  const handleArrowClick = () => {
    history.goBack();
  };
  return (
    <>
      <Wrapper onClick={handleArrowClick}>
        <IoIosArrowBack />
      </Wrapper>
    </>
  );
};

export default Arrow;
