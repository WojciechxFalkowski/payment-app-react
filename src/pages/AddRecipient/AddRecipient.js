import React from "react";
import { connect } from "react-redux";
import { addRecipient } from "data/actions/recipients.actions";
import { Wrapper } from "./AddRecipient.css";
import { Arrow } from "./components";
import { useHistory } from "react-router-dom";
import { FormTemplate } from "components";
import {
  required,
  checkAtSign,
  mustBeNumber,
  minValue,
  maxValue,
  composeValidators,
  uniqueString,
} from "utils/validation";
import { useTranslation } from "react-i18next";
const AddRecipient = ({ recipients, addRecipient }) => {
  console.log("Lista:", recipients);
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
        initialValue: undefined,
        text: t("First Name"),
        placeholder: t("First Name"),
      },
      {
        name: "surname",
        validate: composeValidators(
          required(t("This field is Required!")),
          minValue(3, t(`Your surname must be between 3 and 12 characters`)),
          maxValue(12, t(`Your surname must be between 3 and 12 characters`))
        ),
        initialValue: undefined,
        text: t("Last Name"),
        placeholder: t("Last Name"),
      },
      {
        name: "accountNumber",
        validate: composeValidators(
          required(t("This field is Required!")),
          mustBeNumber(t(`Your account number must be a 16 digits`)),
          minValue(16, t(`Your account number must be a 16 digits`)),
          maxValue(16, t(`Your account number must be a 16 digits`)),
          uniqueString(recipients, t("This account number is occupied"))
        ),
        initialValue: undefined,
        text: t("Account Number"),
        placeholder: t("Account Number"),
      },
      {
        name: "email",
        validate: composeValidators(
          required(t("This field is Required!")),
          checkAtSign(t("Incorrect address - @"))
        ),
        initialValue: undefined,
        text: t("Email"),
        placeholder: t("Email"),
      },
      {
        name: "phoneNumber",
        validate: composeValidators(
          required(t("This field is Required!")),
          mustBeNumber(t(`Your phone number must be a 9 digits`)),
          minValue(9, t(`Your phone number must be a 9 digits`)),
          maxValue(9, t(`Your phone number must be a 9 digits`))
        ),
        initialValue: undefined,
        text: t("Phone number"),
        placeholder: t("Phone number"),
      },
      {
        name: "address",
        validate: composeValidators(required(t("This field is Required!"))),
        initialValue: undefined,
        text: t("Address"),
        placeholder: t("Address"),
      },
      {
        name: "city",
        validate: composeValidators(required(t("This field is Required!"))),
        initialValue: undefined,
        text: t("City"),
        placeholder: t("City"),
      },
      {
        name: "country",
        validate: composeValidators(required(t("This field is Required!"))),
        initialValue: undefined,
        text: t("Country"),
        placeholder: t("Country"),
      },
    ],
    button: {
      type: "submit",
      text: t("Add contact"),
    },
  };
  const history = useHistory();
  const handleSubmit = (values) => {
    const recipientsList = {
      name: values.name,
      surname: values.surname,
      email: values.email,
      accountNumber: values.accountNumber,
      phoneNumber: values.phoneNumber,
      address: values.address,
      city: values.city,
      country: values.country,
    };

    addRecipient(recipientsList);
    history.goBack();
  };

  return (
    <Wrapper>
      <Arrow />
      <FormTemplate formFields={formFields} handleSubmit={handleSubmit} />
    </Wrapper>
  );
};

export default connect(
  (state) => {
    return {
      recipients: state.recipients.recipientsList,
    };
  },
  { addRecipient }
)(AddRecipient);
