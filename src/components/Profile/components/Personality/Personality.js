import React from "react";
import { Wrapper, Img, Person, Pname, P, Istyled } from "./Personality.css";
import profilePicture from "images/profile/joseph-gonzalez_50x50.jpg";
import { BiBuildingHouse } from "react-icons/bi";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
const Personality = ({ profile: { name, surname } }) => {
  const { t } = useTranslation();
  const date = new Date().getHours();
  const greeting =
    date >= 6 && date < 12
      ? t("Good Moring")
      : date >= 12 && date <= 18
      ? t("Good Afternoon")
      : t("Good Evening");
  const nameAndSurname = name + " " + surname;
  return (
    <Wrapper>
      <Img src={profilePicture} alt="" />
      <Person>
        <Pname>
          {greeting}, {nameAndSurname}
        </Pname>
        <P>
          <Istyled>
            <BiBuildingHouse />
          </Istyled>
          Duke street Studio
        </P>
      </Person>
    </Wrapper>
  );
};

export default connect((state) => {
  return {
    profile: state.profile,
  };
})(Personality);
