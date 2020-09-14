import React from "react";
import { FormTemplate } from "components";
import {
  required,
  mustBeNumber,
  minValue,
  maxValue,
  composeValidators,
} from "utils/validation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { StyledContainer } from "pages/Settings/Settings.css";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";

const SendMoney = ({ profile }) => {
  const { t } = useTranslation();
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
        name: "accountNumber",
        validate: composeValidators(
          required,
          mustBeNumber(`Your account number must be a 12 digits`),
          minValue(12, `Your account number must be a 12 digits`),
          maxValue(12, `Your account number must be a 12 digits`)
        ),
        initialValue: undefined,
        text: "To:",
        placeholder: "Account Number",
      },
      {
        name: "amount",
        validate: composeValidators(required),
        parse: (value) => parseFloat(value, 10),
        initialValue: undefined,
        text: "Amount:",
        type: "number",
        step: "1",
        placeholder: "Amount",
      },
      {
        name: "description",
        initialValue: undefined,
        text: "Description:",
        component: "textarea",
        placeholder: "Description",
      },
    ],
    button: {
      type: "submit",
      text: "Send",
    },
  };
  const notify = (values) => toast(t(`Money sent correctly!`));
  const handleSubmit = (values, form) => {
    notify(values);
    values.accountNumber = "";
    values.amount = null;
    values.description = "";
    setTimeout(form.restart);
  };
  return (
    <>
      <FormTemplate handleSubmit={handleSubmit} formFields={formFields} />
      <StyledContainer />
    </>
  );
};

export default connect((state) => {
  return {
    profile: state.profile,
  };
})(SendMoney);
