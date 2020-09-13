import React from "react";
import { Form, Field } from "react-final-form";
import {
  Wrapper,
  FormWrapper,
  Arrow,
  Input,
  Span,
  Button,
} from "./FormTemplate.css";
const FormTemplate = ({ formFields: { fields, button }, handleSubmit }) => {
  return (
    <Form onSubmit={handleSubmit}>
      {(props) => (
        <FormWrapper onSubmit={props.handleSubmit}>
          {fields.map((formField) => {
            return (
              <Field
                key={formField.name}
                name={formField.name}
                validate={formField.validate}
                initialValue={formField.initialValue}
              >
                {({ input, meta }) => (
                  <Wrapper>
                    <label>{formField.text}</label>
                    <Input
                      {...input}
                      type="text"
                      placeholder={formField.placeholder}
                    />
                    {meta.error && meta.touched && <Span>{meta.error}</Span>}
                  </Wrapper>
                )}
              </Field>
            );
          })}

          <Button variant={button.variant} type={button.type}>
            {button.text}
          </Button>
        </FormWrapper>
      )}
    </Form>
  );
};

export default FormTemplate;
