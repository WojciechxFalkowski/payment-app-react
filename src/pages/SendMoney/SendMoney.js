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
        name: "accountNumber",
        validate: composeValidators(
          required(t("This field is Required!")),
          mustBeNumber(t(`Your account number must be a 12 digits`)),
          minValue(12, t(`Your account number must be a 12 digits`)),
          maxValue(12, t(`Your account number must be a 12 digits`))
        ),
        initialValue: undefined,
        text: t("To"),
        placeholder: t("Account Number"),
      },
      {
        name: "amount",
        validate: composeValidators(required(t("This field is Required!"))),
        initialValue: undefined,
        text: t("Amount"),
        type: "number",
        step: "1",
        placeholder: t("Amount"),
        min: "1",
      },
      {
        name: "description",
        initialValue: undefined,
        text: t("Description"),
        component: "textarea",
        placeholder: t("Description"),
      },
    ],
    button: {
      type: "submit",
      text: t("Send"),
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
