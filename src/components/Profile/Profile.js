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

const Profile = ({ profile: { name, surname } }) => {
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
            Good
            {date >= 6 && date < 12
              ? " Moring"
              : date >= 12 && date <= 18
              ? " Afternoon"
              : " Evening"}
            , {name} {surname}
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
          Send Money
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
