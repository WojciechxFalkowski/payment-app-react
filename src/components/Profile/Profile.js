import React from "react";
import {
  AppPerson,
  AppPersonality,
  Person,
  Pname,
  P,
  MainButtons,
  Img,
} from "./Profile.css";
import { BiBuildingHouse } from "react-icons/bi";
import { Istyled } from "./Profile.css";
import profilePicture from "./../../images/profile/joseph-gonzalez_50x50.jpg";
import { Button } from "components";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
const Profile = ({ profile: { name, surname } }) => {
  const { t } = useTranslation();
  const history = useHistory();
  const date = new Date().getHours();

  const handleSendMoneyButton = () => {
    history.push("/send");
  };
  return (
    <AppPerson>
      <AppPersonality>
        <Img src={profilePicture} alt="" />
        <Person>
          <Pname>
            {t("Good") + " "}
            {date >= 6 && date < 12
              ? t("Moring")
              : date >= 12 && date <= 18
              ? t("Afternoon")
              : t("Evening")}
            , {name + " " + surname}
          </Pname>
          <P>
            <Istyled>
              <BiBuildingHouse />
            </Istyled>
            Duke street Studio
          </P>
        </Person>
      </AppPersonality>
      <MainButtons>
        <Button variant="background" onClick={handleSendMoneyButton}>
          {t("Send Money")}
        </Button>
      </MainButtons>
    </AppPerson>
  );
};

export default connect((state) => {
  return {
    profile: state.profile,
  };
})(Profile);
