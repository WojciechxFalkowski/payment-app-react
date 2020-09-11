import React from "react";
import { Form, Field } from "react-final-form";
import { Wrapper, FormWrapper, Input, Span, Button } from "./Settings.css";
import { connect } from "react-redux";
import { addRecipient } from "data/actions/profile.actions";
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
const Settings = ({ profile, addRecipient }) => {
  const handleSubmit = (values) => {
    const profile = {
      name: values.name,
      surname: values.surname,
      email: values.email,
      phoneNumber: values.phoneNumber,
    };
    addRecipient(profile);
  };

  return (
    <Form onSubmit={handleSubmit}>
      {(props) => (
        <FormWrapper onSubmit={props.handleSubmit}>
          <Field
            name="name"
            validate={composeValidators(
              required,
              minValue(3, `Your name must be between 3 and 12 characters`),
              maxValue(12, `Your name must be between 3 and 12 characters`)
            )}
            initialValue={profile.name}
          >
            {({ input, meta }) => (
              <Wrapper>
                <label>First Name:</label>
                <Input {...input} type="text" placeholder={profile.name} />
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
            initialValue={profile.surname}
          >
            {({ input, meta }) => (
              <Wrapper>
                <label>Last Name:</label>
                <Input {...input} type="text" placeholder={profile.surname} />
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
            initialValue={profile.email}
          >
            {({ input, meta }) => (
              <Wrapper>
                <label>Email:</label>
                <Input {...input} type="text" placeholder={profile.email} />
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
            initialValue={profile.phoneNumber}
          >
            {({ input, meta }) => (
              <Wrapper>
                <label>Phone number:</label>
                <Input
                  {...input}
                  type="text"
                  placeholder={profile.phoneNumber}
                />
                {meta.error && meta.touched && <Span>{meta.error}</Span>}
              </Wrapper>
            )}
          </Field>

          <Button variant="background" type="submit">
            Update Profile
          </Button>
        </FormWrapper>
      )}
    </Form>
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
