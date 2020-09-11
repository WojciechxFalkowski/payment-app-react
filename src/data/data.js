const date = new Date();
const todayDate = [
  date.getFullYear(),
  date.getMonth(),
  date.getDate(),
  date.getHours(),
  date.getMinutes(),
  date.getSeconds(),
];
export const initialTransactionState = {
  loadingState: {},
  transactions: [
    {
      account_id: "12323f2fc921471d881698e2f0920df6",
      ref_id: "",
      transaction: "Payment from Hank Chase",
      type_transaction: "Out",
      amount: 1500,
      iso_currency_code: "USD",
      status: "Success",
      country: "USA",
      authorized_date: new Date(
        todayDate[0],
        todayDate[1],
        todayDate[2],
        todayDate[3],
        todayDate[4],
        todayDate[5]
      ),
      date: new Date(
        todayDate[0],
        todayDate[1],
        todayDate[2],
        todayDate[3],
        todayDate[4],
        todayDate[5]
      ),
    },
    {
      account_id: "3e5c3e6ae9b34cfb971ac14g422aa2cb",
      ref_id: "",
      transaction: "Payment to Doug Mann",
      type_transaction: "in",
      amount: 1800,
      iso_currency_code: "USD",
      status: "Success",
      country: "Poland",
      authorized_date: new Date(
        todayDate[0],
        todayDate[1],
        todayDate[2],
        todayDate[3] - 4,
        todayDate[4],
        todayDate[5]
      ),
      date: new Date(
        todayDate[0],
        todayDate[1],
        todayDate[2],
        todayDate[3] - 4,
        todayDate[4] - 10,
        todayDate[5]
      ),
    },
    {
      account_id: "22241f2fc92c471d881248e2f0920df6",
      ref_id: "",
      transaction: "Payment from Hank Chase",
      type_transaction: "out",
      amount: 3250,
      iso_currency_code: "USD",
      status: "Success",
      country: "USA",
      authorized_date: new Date(
        todayDate[0],
        todayDate[1],
        todayDate[2],
        todayDate[3] - 7,
        todayDate[4] - 4,
        todayDate[5]
      ),
      date: new Date(
        todayDate[0],
        todayDate[1],
        todayDate[2],
        todayDate[3] - 7,
        todayDate[4] - 20,
        todayDate[5]
      ),
    },
    {
      account_id: "bdbb3e56fas44f5f96241efc5edfb107",
      ref_id: "",
      transaction: "Payment to Erica Frost",
      type_transaction: "in",
      amount: 8750,
      iso_currency_code: "USD",
      status: "Success",
      country: "England",
      authorized_date: new Date(
        todayDate[0],
        todayDate[1],
        todayDate[2],
        todayDate[3] - 10,
        todayDate[4] - 21,
        todayDate[5]
      ),
      date: new Date(
        todayDate[0],
        todayDate[1],
        todayDate[2],
        todayDate[3] - 11,
        todayDate[4] - 2,
        todayDate[5]
      ),
    },
    {
      account_id: "bdbb3e56fas44f5f96a41efc5edfb107",
      ref_id: "",
      transaction: "Payment to Erica Frost",
      type_transaction: "out",
      amount: 6700,
      iso_currency_code: "USD",
      status: "Success",
      country: "England",
      authorized_date: new Date(
        todayDate[0],
        todayDate[1],
        todayDate[2],
        todayDate[3] - 15,
        todayDate[4] - 4,
        todayDate[5]
      ),
      date: new Date(
        todayDate[0],
        todayDate[1],
        todayDate[2],
        todayDate[3] - 15,
        todayDate[4] - 5,
        todayDate[5]
      ),
    },
    {
      account_id: "22cb68ecadw32d7290174252f34be544",
      ref_id: "",
      transaction: "Payment from Hank Chase",
      type_transaction: "out",
      amount: 1222,
      iso_currency_code: "USD",
      status: "Failed",
      country: "USA",
      authorized_date: new Date(
        todayDate[0],
        todayDate[1],
        todayDate[2] - 1,
        todayDate[3] + 2,
        todayDate[4],
        todayDate[5]
      ),
      date: new Date(
        todayDate[0],
        todayDate[1],
        todayDate[2] - 1,
        todayDate[3] - 2,
        todayDate[4],
        todayDate[5]
      ),
    },
    {
      account_id: "5214bbfde2dc495ab27200f8f94b1b23",
      ref_id: "",
      transaction: "Added from account ****5555",
      type_transaction: "in",
      amount: 4212,
      iso_currency_code: "USD",
      status: "Success",
      country: "Italy",
      authorized_date: new Date(
        todayDate[0],
        todayDate[1],
        todayDate[2] - 1,
        todayDate[3] + 1,
        todayDate[4],
        todayDate[5]
      ),
      date: new Date(
        todayDate[0],
        todayDate[1],
        todayDate[2] - 2,
        todayDate[3] - 5,
        todayDate[4],
        todayDate[5]
      ),
    },
    {
      account_id: "75c8086d8bfb4c68a7c7c0270fc1cef7",
      ref_id: "",
      transaction: "Payment from Molly Sanders",
      type_transaction: "out",
      amount: 1000,
      iso_currency_code: "USD",
      status: "Success",
      country: "Germany",
      authorized_date: new Date(
        todayDate[0],
        todayDate[1],
        todayDate[2] - 1,
        todayDate[3],
        todayDate[4],
        todayDate[5]
      ),
      date: new Date(
        todayDate[0],
        todayDate[1],
        todayDate[2] - 2,
        todayDate[3] - 8,
        todayDate[4],
        todayDate[5]
      ),
    },

    {
      account_id: "5a6e0bae3c5c4cb997fe6510bf375c05",
      ref_id: "",
      transaction: "Payment to Molly Sanders",
      type_transaction: "In",
      amount: 475,
      iso_currency_code: "USD",
      status: "Success",
      country: "Germany",
      authorized_date: new Date(
        todayDate[0],
        todayDate[1],
        todayDate[2] - 2,
        todayDate[3] - 1,
        todayDate[4],
        todayDate[5]
      ),
      date: new Date(
        todayDate[0],
        todayDate[1],
        todayDate[2] - 3,
        todayDate[3] - 5,
        todayDate[4],
        todayDate[5]
      ),
    },
    {
      account_id: "2e5c3e6ae9b34cfb971ac14e422aa2cb",
      ref_id: "",
      transaction: "Payment to Doug Mann",
      type_transaction: "Out",
      amount: 300,
      iso_currency_code: "USD",
      status: "Success",
      country: "Poland",
      authorized_date: new Date(
        todayDate[0],
        todayDate[1],
        todayDate[2] - 3,
        todayDate[3] - 2,
        todayDate[4],
        todayDate[5]
      ),
      date: new Date(
        todayDate[0],
        todayDate[1],
        todayDate[2] - 4,
        todayDate[3] - 3,
        todayDate[4],
        todayDate[5]
      ),
    },
    {
      account_id: "12323f2fc92c471d881698e2f0920df6",
      ref_id: "",
      transaction: "Payment from Hank Chase",
      type_transaction: "Out",
      amount: 1222,
      iso_currency_code: "USD",
      status: "Success",
      country: "USA",
      authorized_date: new Date(
        todayDate[0],
        todayDate[1],
        todayDate[2] - 5,
        todayDate[3] - 1,
        todayDate[4],
        todayDate[5]
      ),
      date: new Date(
        todayDate[0],
        todayDate[1],
        todayDate[2] - 6,
        todayDate[3],
        todayDate[4],
        todayDate[5]
      ),
    },
    {
      account_id: "42896dc47ccf4f1aa647275da02a9336",
      ref_id: "",
      transaction: "Added from account ****5555",
      type_transaction: "In",
      amount: 4200,
      iso_currency_code: "USD",
      status: "Processing",
      country: "Italy",
      authorized_date: new Date(
        todayDate[0],
        todayDate[1],
        todayDate[2] - 5,
        todayDate[3] - 1,
        todayDate[4],
        todayDate[5]
      ),
      date: new Date(
        todayDate[0],
        todayDate[1],
        todayDate[2] - 5,
        todayDate[3] - 2,
        todayDate[4],
        todayDate[5]
      ),
    },
    {
      account_id: "22264f2fc92c471d881698e2f0920df6",
      ref_id: "",
      transaction: "Payment from Hank Chase",
      type_transaction: "In",
      amount: 7250,
      iso_currency_code: "USD",
      status: "Success",
      country: "USA",
      authorized_date: new Date(
        todayDate[0],
        todayDate[1],
        todayDate[2] - 6,
        todayDate[3] - 3,
        todayDate[4] - 4,
        todayDate[5]
      ),
      date: new Date(
        todayDate[0],
        todayDate[1],
        todayDate[2] - 7,
        todayDate[3],
        todayDate[4],
        todayDate[5]
      ),
    },
    {
      account_id: "3ess3e6ae9b34cfb971ac14g422aa2cb",
      ref_id: "",
      transaction: "Payment to Doug Mann",
      type_transaction: "In",
      amount: 1620,
      iso_currency_code: "USD",
      status: "Success",
      country: "Poland",
      authorized_date: new Date(
        todayDate[0],
        todayDate[1],
        todayDate[2] - 6,
        todayDate[3] - 7,
        todayDate[4] - 8,
        todayDate[5]
      ),
      date: new Date(
        todayDate[0],
        todayDate[1],
        todayDate[2] - 6,
        todayDate[3] - 8,
        todayDate[4] - 9,
        todayDate[5] - 2
      ),
    },
    {
      account_id: "22cb223sccc32d7b90175052f34be544",
      ref_id: "",
      transaction: "Payment from Hank Chase",
      type_transaction: "Out",
      amount: 3522,
      iso_currency_code: "USD",
      status: "Success",
      country: "USA",
      authorized_date: new Date(
        todayDate[0],
        todayDate[1],
        todayDate[2] - 7,
        todayDate[3] + 2,
        todayDate[4],
        todayDate[5]
      ),
      date: new Date(
        todayDate[0],
        todayDate[1],
        todayDate[2] - 7,
        todayDate[3] - 2,
        todayDate[4],
        todayDate[5]
      ),
    },
    {
      account_id: "5214bb22e2dc495ab27200f8f94b1b23",
      ref_id: "",
      transaction: "Added from account ****5555",
      type_transaction: "in",
      amount: 3112,
      iso_currency_code: "USD",
      status: "Success",
      country: "Italy",
      authorized_date: new Date(
        todayDate[0],
        todayDate[1],
        todayDate[2] - 8,
        todayDate[3] + 1,
        todayDate[4],
        todayDate[5]
      ),
      date: new Date(
        todayDate[0],
        todayDate[1],
        todayDate[2] - 8,
        todayDate[3] - 5,
        todayDate[4],
        todayDate[5]
      ),
    },
    {
      account_id: "asdw6c0442b9479480d88d33dff444ce",
      ref_id: "",
      transaction: "Payment to Doug Mann",
      type_transaction: "In",
      amount: 1100,
      iso_currency_code: "USD",
      status: "Success",
      country: "Poland",
      authorized_date: new Date(
        todayDate[0],
        todayDate[1],
        todayDate[2] - 8,
        todayDate[3] - 12,
        todayDate[4] - 1,
        todayDate[5]
      ),
      date: new Date(
        todayDate[0],
        todayDate[1],
        todayDate[2] - 8,
        todayDate[3] - 16,
        todayDate[4],
        todayDate[5]
      ),
    },
    {
      account_id: "12323f2fc92c471d881698e2f0920das",
      ref_id: "",
      transaction: "Payment from Hank Chase",
      type_transaction: "Out",
      amount: 102,
      iso_currency_code: "USD",
      status: "Success",
      country: "USA",
      authorized_date: new Date(
        todayDate[0],
        todayDate[1],
        todayDate[2] - 8,
        todayDate[3] - 20,
        todayDate[4],
        todayDate[5]
      ),
      date: new Date(
        todayDate[0],
        todayDate[1],
        todayDate[2] - 8,
        todayDate[3] - 23,
        todayDate[4],
        todayDate[5]
      ),
    },
    {
      account_id: "2264f2fc2371d881642e2f092sa46",
      ref_id: "",
      transaction: "Payment from Hank Chase",
      type_transaction: "In",
      amount: 1720,
      iso_currency_code: "USD",
      status: "Success",
      country: "USA",
      authorized_date: new Date(
        todayDate[0],
        todayDate[1],
        todayDate[2] - 8,
        todayDate[3],
        todayDate[4] - 4,
        todayDate[5]
      ),
      date: new Date(
        todayDate[0],
        todayDate[1],
        todayDate[2] - 8,
        todayDate[3],
        todayDate[4],
        todayDate[5]
      ),
    },
    {
      account_id: "1e11ac6baf9b4f3ba2e157530c6e5136",
      ref_id: "",
      transaction: "Payment to Erica Frost",
      type_transaction: "in",
      amount: 7250,
      iso_currency_code: "USD",
      status: "Processing",
      country: "England",
      authorized_date: new Date(
        todayDate[0],
        todayDate[1] - 10,
        todayDate[2] - 1,
        todayDate[3] - 2,
        todayDate[4] - 6,
        todayDate[5]
      ),
      date: new Date(
        todayDate[0],
        todayDate[1] - 10,
        todayDate[2] - 3,
        todayDate[3],
        todayDate[4],
        todayDate[5]
      ),
    },
    {
      account_id: "bdbb3e56fas44f5f96741efc5edfb107",
      ref_id: "",
      transaction: "Payment to Erica Frost",
      type_transaction: "In",
      amount: 8750,
      iso_currency_code: "USD",
      status: "Processing",
      country: "England",
      authorized_date: new Date(
        todayDate[0],
        todayDate[1] - 2,
        todayDate[2] - 5,
        todayDate[3] - 3,
        todayDate[4] - 4,
        todayDate[5]
      ),
      date: new Date(
        todayDate[0],
        todayDate[1] - 2,
        todayDate[2] - 6,
        todayDate[3],
        todayDate[4],
        todayDate[5]
      ),
    },
    {
      account_id: "32896dc47ccf4f2aa647175da0c69336",
      ref_id: "",
      transaction: "Added from account ****5555",
      type_transaction: "Out",
      amount: 300,
      iso_currency_code: "USD",
      status: "Failed",
      country: "Italy",
      authorized_date: new Date(
        todayDate[0],
        todayDate[1] - 3,
        todayDate[2] - 5,
        todayDate[3] - 3,
        todayDate[4] - 4,
        todayDate[5]
      ),
      date: new Date(
        todayDate[0],
        todayDate[1] - 3,
        todayDate[2] - 6,
        todayDate[3],
        todayDate[4],
        todayDate[5]
      ),
    },
    {
      account_id: "d681203df9034dab97c2472c7622e3ba",
      ref_id: "",
      transaction: "Payment from Hank Douglas",
      type_transaction: "In",
      amount: 2000,
      iso_currency_code: "USD",
      status: "Success",
      country: "Finland",
      authorized_date: new Date(
        todayDate[0],
        todayDate[1] - 3,
        todayDate[2] - 5,
        todayDate[3] - 1,
        todayDate[4] - 2,
        todayDate[5]
      ),
      date: new Date(
        todayDate[0],
        todayDate[1] - 4,
        todayDate[2] - 6,
        todayDate[3],
        todayDate[4],
        todayDate[5]
      ),
    },

    {
      account_id: "1e11ac6baf9b4f5ba2e157530a6e2136",
      ref_id: "",
      transaction: "Payment to Erica Frost",
      type_transaction: "in",
      amount: 4250,
      iso_currency_code: "USD",
      status: "Processing",
      country: "England",
      authorized_date: new Date(
        todayDate[0],
        todayDate[1] - 6,
        todayDate[2] - 1,
        todayDate[3] - 2,
        todayDate[4] - 6,
        todayDate[5]
      ),
      date: new Date(
        todayDate[0],
        todayDate[1] - 6,
        todayDate[2] - 3,
        todayDate[3],
        todayDate[4],
        todayDate[5]
      ),
    },
    {
      account_id: "2281203df9034dab97c2472c7622e3ba",
      ref_id: "",
      transaction: "Payment from Hank Douglas",
      type_transaction: "In",
      amount: 1000,
      iso_currency_code: "USD",
      status: "Success",
      country: "Finland",
      authorized_date: new Date(
        todayDate[0],
        todayDate[1] - 7,
        todayDate[2] - 5,
        todayDate[3] - 1,
        todayDate[4] - 2,
        todayDate[5]
      ),
      date: new Date(
        todayDate[0],
        todayDate[1] - 7,
        todayDate[2] - 6,
        todayDate[3],
        todayDate[4],
        todayDate[5]
      ),
    },
    {
      account_id: "52cabbfdeasdc495ab272328f94b1b23",
      ref_id: "",
      transaction: "Added from account ****5555",
      type_transaction: "in",
      amount: 4212,
      iso_currency_code: "USD",
      status: "Success",
      country: "Italy",
      authorized_date: new Date(
        todayDate[0],
        todayDate[1] - 7,
        todayDate[2] - 9,
        todayDate[3] - 1,
        todayDate[4] - 2,
        todayDate[5]
      ),
      date: new Date(
        todayDate[0],
        todayDate[1] - 7,
        todayDate[2] - 10,
        todayDate[3],
        todayDate[4],
        todayDate[5]
      ),
    },
    {
      account_id: "42896dc47ccf4f2aa647175da0c69336",
      ref_id: "",
      transaction: "Added from account ****5555",
      type_transaction: "Out",
      amount: 4400,
      iso_currency_code: "USD",
      status: "Success",
      country: "Italy",
      authorized_date: new Date(
        todayDate[0],
        todayDate[1] - 8,
        todayDate[2] - 5,
        todayDate[3] - 3,
        todayDate[4] - 4,
        todayDate[5]
      ),
      date: new Date(
        todayDate[0],
        todayDate[1] - 8,
        todayDate[2] - 6,
        todayDate[3],
        todayDate[4],
        todayDate[5]
      ),
    },
    {
      account_id: "52cb68ee01c64d7b90175052f34be569",
      ref_id: "",
      transaction: "Payment from Hank Chase",
      type_transaction: "in",
      amount: 200,
      iso_currency_code: "USD",
      status: "Failed",
      country: "USA",
      authorized_date: new Date(
        todayDate[0],
        todayDate[1] - 9,
        todayDate[2] - 6,
        todayDate[3] - 3,
        todayDate[4] - 4,
        todayDate[5]
      ),
      date: new Date(
        todayDate[0],
        todayDate[1] - 9,
        todayDate[2] - 6,
        todayDate[3] - 1,
        todayDate[4],
        todayDate[5]
      ),
    },
    {
      account_id: "5864bbfde2dc495ab27200f8f94b1b23",
      ref_id: "",
      transaction: "Added from account ****5555",
      type_transaction: "in",
      amount: 1002,
      iso_currency_code: "USD",
      status: "Success",
      country: "Italy",
      authorized_date: new Date(
        todayDate[0],
        todayDate[1] - 10,
        todayDate[2] - 4,
        todayDate[3] - 3,
        todayDate[4] - 4,
        todayDate[5]
      ),
      date: new Date(
        todayDate[0],
        todayDate[1] - 10,
        todayDate[2] - 5,
        todayDate[3] - 2,
        todayDate[4],
        todayDate[5]
      ),
    },
    {
      account_id: "asbb3e56c8d44f5f96741efc5edfb107",
      ref_id: "",
      transaction: "Payment to Erica Frost",
      type_transaction: "In",
      amount: 4214,
      iso_currency_code: "USD",
      status: "Success",
      country: "England",
      authorized_date: new Date(
        todayDate[0],
        todayDate[1] - 10,
        todayDate[2] - 6,
        todayDate[3] - 3,
        todayDate[4] - 4,
        todayDate[5]
      ),
      date: new Date(
        todayDate[0],
        todayDate[1] - 10,
        todayDate[2] - 7,
        todayDate[3] - 2,
        todayDate[4],
        todayDate[5]
      ),
    },
    {
      account_id: "bdbb3e56c8d44f5f96741efc5edfb217",
      ref_id: "",
      transaction: "Payment to Erica Frost",
      type_transaction: "out",
      amount: 1223,
      iso_currency_code: "USD",
      status: "Success",
      country: "England",
      authorized_date: new Date(
        todayDate[0],
        todayDate[1] - 9,
        todayDate[2] - 2,
        todayDate[3] - 3,
        todayDate[4] - 4,
        todayDate[5]
      ),
      date: new Date(
        todayDate[0],
        todayDate[1] - 9,
        todayDate[2] - 1,
        todayDate[3] - 2,
        todayDate[4],
        todayDate[5]
      ),
    },
    {
      account_id: "59664f2fc92c471d441698e2f0920df6",
      ref_id: "",
      transaction: "Payment from Hank Chase",
      type_transaction: "In",
      amount: 750,
      iso_currency_code: "USD",
      status: "Success",
      country: "USA",
      authorized_date: new Date(
        todayDate[0],
        todayDate[1] - 10,
        todayDate[2] - 5,
        todayDate[3] - 3,
        todayDate[4] - 4,
        todayDate[5]
      ),
      date: new Date(
        todayDate[0],
        todayDate[1] - 10,
        todayDate[2] - 6,
        todayDate[3],
        todayDate[4],
        todayDate[5]
      ),
    },
    {
      account_id: "dc0c6c0442b9479480d88d33dff424ce",
      ref_id: "",
      transaction: "Payment to Doug Mann",
      type_transaction: "in",
      amount: 1500,
      iso_currency_code: "USD",
      status: "Success",
      country: "Poland",
      authorized_date: new Date(
        todayDate[0],
        todayDate[1] - 10,
        todayDate[2] - 12,
        todayDate[3] - 2,
        todayDate[4] - 1,
        todayDate[5]
      ),
      date: new Date(
        todayDate[0],
        todayDate[1] - 10,
        todayDate[2] - 15,
        todayDate[3],
        todayDate[4],
        todayDate[5]
      ),
    },
    {
      account_id: "a4cb68ee01c64asd90175052234bd569",
      ref_id: "",
      transaction: "Payment from Hank Chase",
      type_transaction: "in",
      amount: 3700,
      iso_currency_code: "USD",
      status: "Success",
      country: "USA",
      authorized_date: new Date(
        todayDate[0] - 1,
        todayDate[1] - 9,
        todayDate[2] - 6,
        todayDate[3] - 3,
        todayDate[4] - 4,
        todayDate[5]
      ),
      date: new Date(
        todayDate[0] - 1,
        todayDate[1] - 9,
        todayDate[2] - 6,
        todayDate[3] - 1,
        todayDate[4],
        todayDate[5]
      ),
    },
    {
      account_id: "aadw3e56c8d44f5f96741efc5edfb107",
      ref_id: "",
      transaction: "Payment to Erica Frost",
      type_transaction: "In",
      amount: 4217,
      iso_currency_code: "USD",
      status: "Success",
      country: "England",
      authorized_date: new Date(
        todayDate[0] - 2,
        todayDate[1] - 10,
        todayDate[2] - 6,
        todayDate[3] - 3,
        todayDate[4] - 4,
        todayDate[5]
      ),
      date: new Date(
        todayDate[0] - 2,
        todayDate[1] - 10,
        todayDate[2] - 7,
        todayDate[3] - 2,
        todayDate[4],
        todayDate[5]
      ),
    },
    {
      account_id: "ad0c6c0a12b9479480d882a3dff424ce",
      ref_id: "",
      transaction: "Payment to Doug Mann",
      type_transaction: "in",
      amount: 2500,
      iso_currency_code: "USD",
      status: "Success",
      country: "Poland",
      authorized_date: new Date(
        todayDate[0] - 2,
        todayDate[1] - 11,
        todayDate[2] - 12,
        todayDate[3] - 2,
        todayDate[4] - 1,
        todayDate[5]
      ),
      date: new Date(
        todayDate[0] - 2,
        todayDate[1] - 11,
        todayDate[2] - 15,
        todayDate[3],
        todayDate[4],
        todayDate[5]
      ),
    },
  ],
};
export const initialRecipientsState = {
  recipientsList: [
    {
      name: "Agnieszka",
      surname: "Nowak",
      email: "agnieszka.nowak@gmail.com",
      accountNumber: "1123 4422 4442 6633",
      phoneNumber: "666777888",
      address: "1234 Main Street",
      city: "Los Angeles",
      country: "USA",
      status: false,
    },
    {
      name: "Peter",
      surname: "Kowalski",
      email: "peterkowalski@gmail.com",
      accountNumber: "5552 1231 9666 6577",
      phoneNumber: "767888676",
      address: "Marszałkowska 5 m. 10",
      city: "Warsaw",
      country: "Poland",
      status: false,
    },
    {
      name: "Weronika",
      surname: "Nowak",
      email: "weronikanowak@gmail.com",
      accountNumber: "4222 1111 5555 2321",
      phoneNumber: "678987666",
      address: "Berliner Innenstadt 1232",
      city: "Berlin",
      country: "Germany",
      status: false,
    },
    {
      name: "Michael",
      surname: "Kors",
      email: "michael.kors@gmail.com",
      accountNumber: "2312 4444 2222 5555",
      phoneNumber: "555777886",
      address: "4730  Oak Street",
      city: "New York",
      country: "USA",
      status: false,
    },
    {
      name: "Karolina",
      surname: "Andres",
      email: "karolinexandres@gmail.com",
      accountNumber: "2242 8288 9999 6544",
      phoneNumber: "776776444",
      address: "3386  Grasselli Street",
      city: "Plano",
      country: "USA",
      status: false,
    },
    {
      name: "Imran",
      surname: "Haworth",
      email: "imran.haworth@gmail.com",
      accountNumber: "4222 4222 1112 2322",
      phoneNumber: "777666788",
      address: "2210  Pickens Way",
      city: "Monroe",
      country: "USA",
      status: false,
    },
    {
      name: "Cole ",
      surname: "Monaghan",
      email: "colex.managhan@gmail.com",
      accountNumber: "2214 3821 5191 4353",
      phoneNumber: "647447556",
      address: "2223  Half and Half Drive",
      city: "California",
      country: "USA",
      status: false,
    },
    {
      name: "Valentina ",
      surname: "Harding",
      email: "valentinaharding@gmail.com",
      accountNumber: "5225 3221 3211 3333",
      phoneNumber: "534664878",
      address: "942  Daffodil Lane",
      city: "Berlin",
      country: "Germany",
      status: false,
    },
    {
      name: "Maxime ",
      surname: "Feeney",
      email: "maxime.feeney@gmail.com",
      accountNumber: "4222 2323 4444 2312",
      phoneNumber: "555666771",
      address: "4730  Oak Street",
      city: "New York",
      country: "USA",
      status: false,
    },
    {
      name: "Corbin ",
      surname: "Hurley",
      email: "karolinexandres@gmail.com",
      accountNumber: "2242 8888 9999 6544",
      phoneNumber: "776776444",
      address: "3386  Grasselli Street",
      city: "New Hampshire",
      country: "USA",
      status: false,
    },
  ],
};
export const initialProfileState = {
  name: "John",
  surname: "Smith",
  email: "johnsmith@gmail.com",
  phoneNumber: "666777888",
};
