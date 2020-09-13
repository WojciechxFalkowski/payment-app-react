import React from "react";
import { Form, Field } from "react-final-form";
import {
  Wrapper,
  FormWrapper,
  Arrow,
  Input,
  Textarea,
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
                parse={formField.parse}
              >
                {({ input, meta }) => (
                  <Wrapper>
                    <label>{formField.text}</label>
                    {formField.component === "textarea" ? (
                      <Textarea
                        {...input}
                        type="text"
                        placeholder="Description"
                      />
                    ) : (
                      <Input
                        {...input}
                        type={formField.type ? formField.type : "text"}
                        step={formField.step ? formField.step : undefined}
                        placeholder={formField.placeholder}
                      />
                    )}
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
