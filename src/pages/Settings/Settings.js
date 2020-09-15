import React from "react";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
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
import { StyledContainer } from "./Settings.css";

const Settings = ({ profile, addRecipient }) => {
  const { t } = useTranslation();

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
        text: t("First Name"),
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
        text: t("Last Name"),
        placeholder: profile.surname,
      },
      {
        name: "email",
        validate: composeValidators(
          required(t("This field is Required!")),
          checkAtSign(t("Incorrect address - @"))
        ),
        initialValue: profile.email,
        text: t("Email"),
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
        text: t("Phone number"),
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
      <FormTemplate formFields={formFields} handleSubmit={handleSubmit} />
      <StyledContainer />
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
