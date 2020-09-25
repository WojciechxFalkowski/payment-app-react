import React from "react";
import { AppPerson, MainButtons } from "./Profile.css";
import { Personality } from "./components";
import { Button } from "components";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
const Profile = () => {
  const { t } = useTranslation();
  const history = useHistory();

  const handleSendMoneyButton = () => {
    history.push("/send");
  };
  return (
    <AppPerson>
      <Personality />
      <MainButtons>
        <Button variant="background" onClick={handleSendMoneyButton}>
          {t("Send Money")}
        </Button>
      </MainButtons>
    </AppPerson>
  );
};

export default Profile;
