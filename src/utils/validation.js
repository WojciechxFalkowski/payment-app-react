export const required = (text) => (value) => (value ? undefined : text);
export const checkAtSign = (text) => (value) =>
  value.includes("@") ? undefined : text;
export const mustBeNumber = (text) => (value) =>
  isNaN(value) ? text : undefined;
export const minValue = (min, text) => (value) =>
  isNaN(value.length) || value.length >= min ? undefined : text;
export const maxValue = (max, text) => (value) =>
  isNaN(value.length) || value.length <= max ? undefined : text;
export const uniqueString = (contacts, text) => (value) =>
  contacts.find((contact) => contact.accountNumber === value) === undefined
    ? undefined
    : text;
export const enoughMoney = (balance, text) => (value) =>
  balance >= value ? undefined : text;
export const composeValidators = (...validators) => (value) =>
  validators.reduce((error, validator) => error || validator(value), undefined);
