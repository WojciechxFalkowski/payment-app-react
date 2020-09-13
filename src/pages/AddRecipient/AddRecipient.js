import React from "react";
import { connect } from "react-redux";
import { addRecipient } from "data/actions/recipients.actions";
import { Wrapper, Arrow } from "./AddRecipient.css";
import { IoIosArrowBack } from "react-icons/io";
import { useHistory } from "react-router-dom";
import { FormTemplate } from "components";
import {
  required,
  checkAtSign,
  mustBeNumber,
  minValue,
  maxValue,
  composeValidators,
} from "utils/validation";

const AddRecipient = ({ addRecipient }) => {
  const formFields = {
    fields: [
      {
        name: "name",
        validate: composeValidators(
          required,
          minValue(3, `Your name must be between 3 and 12 characters`),
          maxValue(12, `Your name must be between 3 and 12 characters`)
        ),
        initialValue: undefined,
        text: "First Name:",
        placeholder: "First Name",
      },
      {
        name: "surname",
        validate: composeValidators(
          required,
          minValue(3, `Your name must be between 3 and 12 characters`),
          maxValue(12, `Your name must be between 3 and 12 characters`)
        ),
        initialValue: undefined,
        text: "Last Name:",
        placeholder: "Last Name",
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
        text: "Account Number:",
        placeholder: "Account Number",
      },
      {
        name: "email",
        validate: composeValidators(
          required,
          checkAtSign("Incorrect address - @")
        ),
        initialValue: undefined,
        text: "Email:",
        placeholder: "Email",
      },
      {
        name: "phoneNumber",
        validate: composeValidators(
          required,
          mustBeNumber(`Your phone number must be a 9 digits`),
          minValue(9, `Your phone number must be a 9 digits`),
          maxValue(9, `Your phone number must be a 9 digits`)
        ),
        initialValue: undefined,
        text: "Phone number:",
        placeholder: "Phone number",
      },
      {
        name: "address",
        validate: composeValidators(required),
        initialValue: undefined,
        text: "Address:",
        placeholder: "Address",
      },
      {
        name: "city",
        validate: composeValidators(required),
        initialValue: undefined,
        text: "City:",
        placeholder: "City",
      },
      {
        name: "country",
        validate: composeValidators(required),
        initialValue: undefined,
        text: "Country:",
        placeholder: "Country",
      },
    ],
    button: {
      variant: "background",
      type: "submit",
      text: " Update Profile",
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
  const handleArrowClick = () => {
    history.goBack();
  };
  return (
    <Wrapper>
      <Arrow onClick={handleArrowClick}>
        <IoIosArrowBack />
      </Arrow>
      <FormTemplate formFields={formFields} handleSubmit={handleSubmit} />
    </Wrapper>
  );
};

export default connect(null, { addRecipient })(AddRecipient);
