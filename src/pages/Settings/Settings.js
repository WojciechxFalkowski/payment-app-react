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
const Settings = ({ profile, addRecipient }) => {
  const formFields = {
    fields: [
      {
        name: "name",
        validate: composeValidators(
          required,
          minValue(3, `Your name must be between 3 and 12 characters`),
          maxValue(12, `Your name must be between 3 and 12 characters`)
        ),
        initialValue: profile.name,
        text: "First Name:",
        placeholder: profile.name,
      },
      {
        name: "surname",
        validate: composeValidators(
          required,
          minValue(3, `Your surname must be between 3 and 12 characters`),
          maxValue(12, `Your surname must be between 3 and 12 characters`)
        ),
        initialValue: profile.surname,
        text: "Last Name:",
        placeholder: profile.surname,
      },
      {
        name: "email",
        validate: composeValidators(
          required,
          checkAtSign("Incorrect address - @")
        ),
        initialValue: profile.email,
        text: "Email:",
        placeholder: profile.email,
      },
      {
        name: "phoneNumber",
        validate: composeValidators(
          required,
          mustBeNumber(`Your phone number must be a 9 digits`),
          minValue(9, `Your phone number must be a 9 digits`),
          maxValue(9, `Your phone number must be a 9 digits`)
        ),
        initialValue: profile.phoneNumber,
        text: "Phone number:",
        placeholder: profile.phoneNumber,
      },
    ],
    button: {
      variant: "background",
      type: "submit",
      text: " Update Profile",
    },
  };

  const handleSubmit = (values) => {
    const profile = {
      name: values.name,
      surname: values.surname,
      email: values.email,
      phoneNumber: values.phoneNumber,
    };
    addRecipient(profile);
  };

  return <FormTemplate formFields={formFields} handleSubmit={handleSubmit} />;
};
export default connect(
  (state) => {
    return {
      profile: state.profile,
    };
  },
  { addRecipient }
)(Settings);
