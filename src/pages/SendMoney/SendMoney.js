import React, { useState } from "react";
import { FormTemplate } from "components";
import {
  required,
  mustBeNumber,
  minValue,
  maxValue,
  composeValidators,
  enoughMoney,
} from "utils/validation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { StyledContainer } from "pages/Settings/Settings.css";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import { List } from "pages/Recipients/components";
import { addTransaction } from "data/actions/transactions.actions";
const SendMoney = ({ transactions, addTransaction }) => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [accountNumber, setAccountNumber] = useState("");

  const successTransactions = transactions.filter(
    (transaction) => transaction.status.toLowerCase() === "success"
  );
  const balance = successTransactions
    .map((transaction) => {
      if (transaction.type_transaction.toLowerCase() === "in") {
        return transaction.amount;
      } else {
        return -transaction.amount;
      }
    })
    .reduce((previousValue, currentValue) => previousValue + currentValue, 0);

  const formFields = {
    fields: [
      {
        name: "name",
        validate: composeValidators(
          required(t("This field is Required!")),

          minValue(3, t(`Your name must be between 3 and 12 characters`)),
          maxValue(12, t(`Your name must be between 3 and 12 characters`))
        ),
        initialValue: name,
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
        initialValue: surname,
        text: t("Last Name"),
        placeholder: t("Last Name"),
      },
      {
        name: "accountNumber",
        validate: composeValidators(
          required(t("This field is Required!")),
          mustBeNumber(t(`Your account number must be a 16 digits`)),
          minValue(16, t(`Your account number must be a 16 digits`)),
          maxValue(16, t(`Your account number must be a 16 digits`))
        ),
        initialValue: accountNumber,
        text: t("To"),
        placeholder: t("Account Number"),
      },
      {
        name: "amount",
        validate: composeValidators(
          required(t("This field is Required!")),
          enoughMoney(
            balance,
            t("Not enough money, your account balance") + ": " + balance + " $"
          )
        ),
        initialValue: undefined,
        text: t("Amount"),
        type: "number",
        step: "1",
        placeholder: t("Amount"),
        min: "1",
      },
      {
        name: "description",
        validate: composeValidators(required(t("This field is Required!"))),
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
  const handleRecipient = (recipient) => {
    setName(recipient.name);
    setSurname(recipient.surname);
    setAccountNumber(recipient.accountNumber);
  };
  const notify = (values) => toast(t(`Money sent correctly!`));
  const ID = function () {
    return (
      Math.random().toString(36).substr(2, 9) +
      Math.random().toString(36).substr(2, 9) +
      Math.random().toString(36).substr(2, 9) +
      Math.random().toString(36).substr(2, 5)
    );
  };

  const handleSubmit = (values, form) => {
    const random = Math.floor(Math.random() * 10);
    values.status = `${
      random > 4 ? "Success" : random > 2 ? "Processing" : "Failed"
    }`;
    values.account_id = ID();
    values.authorized_date = new Date();
    values.date = new Date();
    values.amount = Number(values.amount);
    notify(values);
    addTransaction(values);
    setName("");
    setSurname("");
    setAccountNumber("");
    setTimeout(form.restart);
  };

  return (
    <>
      <FormTemplate handleSubmit={handleSubmit} formFields={formFields} />
      <List handleRecipient={handleRecipient} location={"send"} />
      <StyledContainer />
    </>
  );
};

export default connect(
  (state) => {
    return {
      transactions: state.transactions.transactions,
    };
  },
  { addTransaction }
)(SendMoney);
