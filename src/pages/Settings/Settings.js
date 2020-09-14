import React from "react";
import { connect } from "react-redux";
import { addRecipient } from "data/actions/profile.actions";
import { FormTemplate } from "components";
import {
  required,
  checkAtSign,
  mustBeNumber,
  minValue,
  maxValue,
  composeValidators,
} from "utils/validation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { StyledContainer, Box } from "./Settings.css";
import { Button } from "components";
import { useTranslation } from "react-i18next";
const Settings = ({ profile, addRecipient }) => {
  const { t, i18n } = useTranslation();

  const formFields = {
    fields: [
      {
        name: "name",
        validate: composeValidators(
          required(t("This field is Required!")),
          minValue(3, t(`Your name must be between 3 and 12 characters`)),
          maxValue(12, t(`Your name must be between 3 and 12 characters`))
        ),
        initialValue: profile.name,
        text: t("First Name:"),
        placeholder: profile.name,
      },
      {
        name: "surname",
        validate: composeValidators(
          required(t("This field is Required!")),
          minValue(3, t(`Your surname must be between 3 and 12 characters`)),
          maxValue(12, t(`Your surname must be between 3 and 12 characters`))
        ),
        initialValue: profile.surname,
        text: t("Last Name:"),
        placeholder: profile.surname,
      },
      {
        name: "email",
        validate: composeValidators(
          required(t("This field is Required!")),
          checkAtSign(t("Incorrect address - @"))
        ),
        initialValue: profile.email,
        text: t("Email:"),
        placeholder: profile.email,
      },
      {
        name: "phoneNumber",
        validate: composeValidators(
          required(t("This field is Required!")),
          mustBeNumber(t(`Your phone number must be a 9 digits`)),
          minValue(9, t(`Your phone number must be a 9 digits`)),
          maxValue(9, t(`Your phone number must be a 9 digits`))
        ),
        initialValue: profile.phoneNumber,
        text: t("Phone number:"),
        placeholder: profile.phoneNumber,
      },
    ],
    button: {
      type: "submit",
      text: t("Update Profile"),
    },
  };
  const notify = () => toast(t("Updated!"));
  const handleSubmit = (values) => {
    const profile = {
      name: values.name,
      surname: values.surname,
      email: values.email,
      phoneNumber: values.phoneNumber,
    };
    addRecipient(profile);
    notify();
  };

  return (
    <>
      <Box>
        <FormTemplate formFields={formFields} handleSubmit={handleSubmit} />
        <StyledContainer />
      </Box>
      <Box>
        <h1>{t("Languages")}</h1>
        <Button variant="regular" onClick={() => i18n.changeLanguage("pl")}>
          pl
        </Button>
        <Button onClick={() => i18n.changeLanguage("en")} variant="regular">
          en
        </Button>
      </Box>
    </>
  );
};
export default connect(
  (state) => {
    return {
      profile: state.profile,
    };
  },
  { addRecipient }
)(Settings);
