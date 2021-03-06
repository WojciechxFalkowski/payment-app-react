import React from "react";
import { Form, Field } from "react-final-form";
import { useTranslation } from "react-i18next";
import {
  Wrapper,
  FormWrapper,
  Input,
  Textarea,
  Span,
  Button,
} from "./FormTemplate.css";

const FormTemplate = ({ formFields: { fields, button }, handleSubmit }) => {
  const { t } = useTranslation();

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
                defaultValue={formField.initialValue}
                parse={formField.parse}
              >
                {({ input, meta }) => (
                  <Wrapper>
                    <label>{formField.text}</label>
                    {formField.component === "textarea" ? (
                      <Textarea
                        {...input}
                        type="text"
                        placeholder={t("Description")}
                      />
                    ) : (
                      <Input
                        {...input}
                        type={formField.type ? formField.type : "text"}
                        step={formField.step ? formField.step : undefined}
                        min={formField.min ? formField.min : undefined}
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
