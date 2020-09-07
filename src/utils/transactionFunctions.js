export const todayDate = () => {
  let date = new Date();
  let todayDate = [
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
  ];
  return todayDate;
};
export const getLastDayDates = () => {
  let dates = [];
  let date = todayDate();
  for (let i = 0; i <= 24 / 3; ++i) {
    dates.push(
      new Date(date[0], date[1], date[2] - 1, date[3] + i * 3, date[4], date[5])
    );
  }
  return dates;
};

export const getLastWeekTransaction = (transactions) => {
  let date = todayDate();
  date = new Date(date[0], date[1], date[2] - 6, date[3], date[4], date[5]);

  return transactions.filter(
    (transaction) =>
      transaction.date >= date && transaction.status === "Success"
  );
};
export const getMoney = (allTransactions) => {
  let accountMoney = 0;
  allTransactions.map((transaction) => {
    accountMoney += transaction.amount;
  });
  return accountMoney;
};

//******************************************************** */
//***********************************************************/
export const getLastWeekTransactionMoney = (allTransactions) => {
  let transaction = getLastWeekTransaction(allTransactions);
  let money = [0, 0, 0, 0, 0, 0];
  let date = todayDate();
  for (let i = 0; i < transaction.length; ++i) {
    if (
      transaction[i].date >=
        new Date(date[0], date[1], date[2] - 6, date[3], date[4], date[5]) &&
      transaction[i].date <
        new Date(date[0], date[1], date[2] - 5, date[3], date[4], date[5])
    ) {
      if (transaction[i].type_transaction.toLowerCase() === "in") {
        money[0] = money[0] + transaction[i].amount;
      } else if (transaction[i].type_transaction.toLowerCase() === "out") {
        money[0] = money[0] - transaction[i].amount;
      }
    } else if (
      transaction[i].date >=
        new Date(date[0], date[1], date[2] - 5, date[3], date[4], date[5]) &&
      transaction[i].date <
        new Date(date[0], date[1], date[2] - 4, date[3], date[4], date[5])
    ) {
      if (transaction[i].type_transaction.toLowerCase() === "in") {
        money[1] = money[1] + transaction[i].amount;
      } else if (transaction[i].type_transaction.toLowerCase() === "out") {
        money[1] = money[1] - transaction[i].amount;
      }
    } else if (
      transaction[i].date >=
        new Date(date[0], date[1], date[2] - 4, date[3], date[4], date[5]) &&
      transaction[i].date <
        new Date(date[0], date[1], date[2] - 3, date[3], date[4], date[5])
    ) {
      if (transaction[i].type_transaction.toLowerCase() === "in") {
        money[2] = money[2] + transaction[i].amount;
      } else if (transaction[i].type_transaction.toLowerCase() === "out") {
        money[2] = money[2] - transaction[i].amount;
      }
    } else if (
      transaction[i].date >=
        new Date(date[0], date[1], date[2] - 3, date[3], date[4], date[5]) &&
      transaction[i].date <
        new Date(date[0], date[1], date[2] - 2, date[3], date[4], date[5])
    ) {
      if (transaction[i].type_transaction.toLowerCase() === "in") {
        money[3] = money[3] + transaction[i].amount;
      } else if (transaction[i].type_transaction.toLowerCase() === "out") {
        money[3] = money[3] - transaction[i].amount;
      }
    } else if (
      transaction[i].date >=
        new Date(date[0], date[1], date[2] - 2, date[3], date[4], date[5]) &&
      transaction[i].date <
        new Date(date[0], date[1], date[2] - 1, date[3], date[4], date[5])
    ) {
      if (transaction[i].type_transaction.toLowerCase() === "in") {
        money[4] = money[4] + transaction[i].amount;
      } else if (transaction[i].type_transaction.toLowerCase() === "out") {
        money[4] = money[4] - transaction[i].amount;
      }
    } else {
      if (transaction[i].type_transaction.toLowerCase() === "in") {
        money[5] = money[5] + transaction[i].amount;
      } else if (transaction[i].type_transaction.toLowerCase() === "out") {
        money[5] = money[5] - transaction[i].amount;
      }
    }
  }
  for (let i = 0; i < 6; ++i) {
    money[i] = getMoney(allTransactions) - money[i];
  }

  return money;
};
export const getLastWeekDays = () => {
  let weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let labels = [];
  for (let i = 1; i <= 7; ++i) {
    labels.push(
      weekdays[
        new Date(new Date().getTime() - 60 * 60 * 24 * 1000 * (7 - i)).getDay()
      ]
    );
  }
  return labels;
};
//***********************************************************/
export const getLastDayTransactionMoney = (transactionsArray) => {
  let transactions = getLastWeekTransaction(transactionsArray);

  let dates = getLastDayDates();
  let money = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let i = 0; i < transactions.length; ++i) {
    if (transactions[i].date >= dates[0] && transactions[i].date <= dates[1]) {
      if (transactions[i].type_transaction.toLowerCase() === "in") {
        money[0] += transactions[i].amount;
      } else if (transactions[i].type_transaction.toLowerCase() === "out") {
        money[0] -= transactions[i].amount;
      }
    }
    if (transactions[i].date >= dates[1] && transactions[i].date <= dates[2]) {
      if (transactions[i].type_transaction.toLowerCase() === "in") {
        money[1] += transactions[i].amount;
      } else if (transactions[i].type_transaction.toLowerCase() === "out") {
        money[1] -= transactions[i].amount;
      }
    }
    if (transactions[i].date >= dates[2] && transactions[i].date <= dates[3]) {
      if (transactions[i].type_transaction.toLowerCase() === "in") {
        money[2] += transactions[i].amount;
      } else if (transactions[i].type_transaction.toLowerCase() === "out") {
        money[2] -= transactions[i].amount;
      }
    }
    if (transactions[i].date >= dates[3] && transactions[i].date <= dates[4]) {
      if (transactions[i].type_transaction.toLowerCase() === "in") {
        money[3] += transactions[i].amount;
      } else if (transactions[i].type_transaction.toLowerCase() === "out") {
        money[3] -= transactions[i].amount;
      }
    }
    if (transactions[i].date >= dates[4] && transactions[i].date <= dates[5]) {
      if (transactions[i].type_transaction.toLowerCase() === "in") {
        money[4] += transactions[i].amount;
      } else if (transactions[i].type_transaction.toLowerCase() === "out") {
        money[4] -= transactions[i].amount;
      }
    }
    if (transactions[i].date >= dates[5] && transactions[i].date <= dates[6]) {
      if (transactions[i].type_transaction.toLowerCase() === "in") {
        money[5] += transactions[i].amount;
      } else if (transactions[i].type_transaction.toLowerCase() === "out") {
        money[5] -= transactions[i].amount;
      }
    }
    if (transactions[i].date >= dates[6] && transactions[i].date <= dates[7]) {
      if (transactions[i].type_transaction.toLowerCase() === "in") {
        money[6] += transactions[i].amount;
      } else if (transactions[i].type_transaction.toLowerCase() === "out") {
        money[6] -= transactions[i].amount;
      }
    }
    if (transactions[i].date >= dates[7]) {
      if (transactions[i].type_transaction.toLowerCase() === "in") {
        money[7] += transactions[i].amount;
      } else if (transactions[i].type_transaction.toLowerCase() === "out") {
        money[7] -= transactions[i].amount;
      }
    }
  }
  for (let i = 0; i < money.length; ++i) {
    money[i] = getMoney(transactionsArray) - money[i];
  }
  return money;
};

export const getLastDayHours = () => {
  let dates = getLastDayDates();
  let hoursDates = [];
  for (let i = 0; i < dates.length; ++i) {
    hoursDates.push(
      `${dates[i].getHours()}:${
        dates[i].getMinutes() > 9
          ? dates[i].getMinutes()
          : "0" + dates[i].getMinutes()
      }`
    );
  }
  return hoursDates;
};
