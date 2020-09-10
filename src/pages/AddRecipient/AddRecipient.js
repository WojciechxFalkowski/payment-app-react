import React from "react";
import { Form, Field } from "react-final-form";
import { connect } from "react-redux";
import { addRecipient } from "data/actions/recipients.actions";
// import { Button } from "components";
import {
  Wrapper,
  FormWrapper,
  Arrow,
  Input,
  Span,
  Button,
} from "./AddRecipient.css";
import { IoIosArrowBack } from "react-icons/io";
import { useHistory } from "react-router-dom";

const required = (value) => (value ? undefined : "This field is Required!");
const checkAtSign = (text) => (value) =>
  value.includes("@") ? undefined : text;
const mustBeNumber = (text) => (value) => (isNaN(value) ? text : undefined);
const minValue = (min, text) => (value) =>
  isNaN(value.length) || value.length >= min ? undefined : text;
const maxValue = (max, text) => (value) =>
  isNaN(value.length) || value.length <= max ? undefined : text;
const composeValidators = (...validators) => (value) =>
  validators.reduce((error, validator) => error || validator(value), undefined);

const AddRecipient = ({ addRecipient }) => {
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
  };
  const handleArrowClick = () => {
    history.goBack();
  };
  return (
    <Form onSubmit={handleSubmit}>
      {(props) => (
        <FormWrapper onSubmit={props.handleSubmit}>
          <Arrow onClick={handleArrowClick}>
            <IoIosArrowBack />
          </Arrow>
          <Field
            name="name"
            validate={composeValidators(
              required,
              minValue(3, `Your name must be between 3 and 12 characters`),
              maxValue(12, `Your name must be between 3 and 12 characters`)
            )}
          >
            {({ input, meta }) => (
              <Wrapper>
                <label>First Name:</label>
                <Input {...input} type="text" placeholder="First Name" />
                {meta.error && meta.touched && <Span>{meta.error}</Span>}
              </Wrapper>
            )}
          </Field>
          <Field
            name="surname"
            validate={composeValidators(
              required,
              minValue(3, `Your surname must be more than 3 characters`)
            )}
          >
            {({ input, meta }) => (
              <Wrapper>
                <label>Last Name:</label>
                <Input {...input} type="text" placeholder="Last Name" />
                {meta.error && meta.touched && <Span>{meta.error}</Span>}
              </Wrapper>
            )}
          </Field>

          <Field
            name="accountNumber"
            component="input"
            validate={composeValidators(
              required,
              mustBeNumber(`Your account number must be a 12 digits`),
              minValue(12, `Your account number must be a 12 digits`),
              maxValue(12, `Your account number must be a 12 digits`)
            )}
          >
            {({ input, meta }) => (
              <Wrapper>
                <label>Account Number:</label>
                <Input {...input} type="text" placeholder="Account Number" />
                {meta.error && meta.touched && <Span>{meta.error}</Span>}
              </Wrapper>
            )}
          </Field>
          <Field
            name="email"
            validate={composeValidators(
              required,
              checkAtSign("Incorrect address - @")
            )}
          >
            {({ input, meta }) => (
              <Wrapper>
                <label>Email:</label>
                <Input {...input} type="text" placeholder="Email" />
                {meta.error && meta.touched && <Span>{meta.error}</Span>}
              </Wrapper>
            )}
          </Field>
          <Field
            name="phoneNumber"
            validate={composeValidators(
              required,
              mustBeNumber(`Your phone number must be a 9 digits`),
              minValue(9, `Your phone number must be a 9 digits`),
              maxValue(9, `Your phone number must be a 9 digits`)
            )}
          >
            {({ input, meta }) => (
              <Wrapper>
                <label>Phone number:</label>
                <Input {...input} type="text" placeholder="Phone number" />
                {meta.error && meta.touched && <Span>{meta.error}</Span>}
              </Wrapper>
            )}
          </Field>
          <Field name="address" validate={required}>
            {({ input, meta }) => (
              <Wrapper>
                <label>Address:</label>
                <Input {...input} type="text" placeholder="Address" />
                {meta.error && meta.touched && <Span>{meta.error}</Span>}
              </Wrapper>
            )}
          </Field>
          <Field name="city" validate={required}>
            {({ input, meta }) => (
              <Wrapper>
                <label>City:</label>
                <Input {...input} type="text" placeholder="City" />
                {meta.error && meta.touched && <Span>{meta.error}</Span>}
              </Wrapper>
            )}
          </Field>
          <Field name="country" validate={required}>
            {({ input, meta }) => (
              <Wrapper>
                <label>Country:</label>
                <Input {...input} type="text" placeholder="Country" />
                {meta.error && meta.touched && <Span>{meta.error}</Span>}
              </Wrapper>
            )}
          </Field>

          <Button variant="background" type="submit">
            Add Contact
          </Button>
        </FormWrapper>
      )}
    </Form>
  );
};

export default connect(null, { addRecipient })(AddRecipient);
