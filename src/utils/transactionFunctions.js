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
  allTransactions.forEach((transaction) => {
    accountMoney += transaction.amount;
  });
  return accountMoney;
};

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
//********************************************************************* */
export const getDaysTransaction = (transactionsArray) => {
  const today = todayDate();
  let dayOfMonth = new Date().getDate();
  let daysData = {
    daysMoney: [],
    daysName: [],
  };
  let transactions = transactionsArray.filter(
    (transaction) =>
      transaction.status.toLowerCase() === "success" &&
      transaction.date >
        new Date(
          today[0],
          today[1],
          today[2] - dayOfMonth + 1,
          today[3],
          today[4],
          today[5]
        )
  );

  for (let i = 0; i < dayOfMonth + 1; ++i) {
    daysData.daysMoney[i] = 0;
    daysData.daysName[i] = `${i}`;
  }
  for (let i = 0; i < transactions.length; ++i) {
    let transactionDate = transactions[i].date.getDate();
    if (transactions[i].type_transaction.toLowerCase() === "in")
      daysData.daysMoney[transactionDate] =
        daysData.daysMoney[transactionDate] + transactions[i].amount;
    else if (transactions[i].type_transaction.toLowerCase() === "out")
      daysData.daysMoney[transactionDate] =
        daysData.daysMoney[transactionDate] - transactions[i].amount;
  }
  daysData.daysMoney.splice(0, 1);
  daysData.daysName.splice(0, 1);
  return daysData;
};

export const getLastYearMonths = () => {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return months;
};

export const getLastYearMonthFilter = (transactionsArray) => {
  const today = todayDate();
  let date = new Date(today[0], 0, 1, 0, 0, 0);
  let transaction = transactionsArray.filter(
    (transaction) =>
      transaction.date >= date && transaction.status === "Success"
  );
  return transaction;
};
export const getLastYearMonthTransaction = (transactionsArray) => {
  let transactions = getLastYearMonthFilter(transactionsArray);
  let monthly = {
    money: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    name: [],
  };
  let monthsName = getLastYearMonths();
  for (let i = 0; i < transactions.length; ++i) {
    let transactionMonth = transactions[i].date.getMonth();
    if (transactions[i].type_transaction.toLowerCase() === "in")
      monthly.money[transactionMonth] =
        monthly.money[transactionMonth] + transactions[i].amount;
    else if (transactions[i].type_transaction.toLowerCase() === "out")
      monthly.money[transactionMonth] =
        monthly.money[transactionMonth] - transactions[i].amount;
  }
  for (let i = 0; i < monthly.money.length; ++i) {
    if (monthly.money[i] !== 0) {
      monthly.name.push(monthsName[i]);
    }
  }
  monthly.money = monthly.money.filter((monthlyMoney) => monthlyMoney !== 0);
  return monthly;
};
export const getLastYearQuarterTransactions = (transactionsArray) => {
  let monthly = getLastYearMonthTransaction(transactionsArray);
  let quarterMoney = [0, 0, 0, 0];
  let quarterName = ["I", "II", "III", "IV"];
  let monthsName = getLastYearMonths();
  let quarter = {
    quarterMoney: [],
    quarterName: [],
  };
  for (let i = 0; i < monthly.money.length; ++i) {
    if (
      monthly.name[i] === monthsName[0] ||
      monthly.name[i] === monthsName[1] ||
      monthly.name[i] === monthsName[2]
    ) {
      quarterMoney[0] = quarterMoney[0] + monthly.money[i];
    } else if (
      monthly.name[i] === monthsName[3] ||
      monthly.name[i] === monthsName[4] ||
      monthly.name[i] === monthsName[5]
    ) {
      quarterMoney[1] = quarterMoney[1] + monthly.money[i];
    } else if (
      monthly.name[i] === monthsName[6] ||
      monthly.name[i] === monthsName[7] ||
      monthly.name[i] === monthsName[8]
    ) {
      quarterMoney[2] = quarterMoney[2] + monthly.money[i];
    } else {
      quarterMoney[3] = quarterMoney[3] + monthly.money[i];
    }
  }
  quarterMoney.forEach((data, index) => {
    if (data !== 0) {
      quarter.quarterName.push(quarterName[index]);
    }
  });
  quarter.quarterMoney = quarterMoney.filter((data) => data !== 0);

  return quarter;
};
export const getYearsTransaction = (transactionsArray) => {
  let transactions = transactionsArray.filter(
    (transaction) => transaction.status.toLowerCase() === "success"
  );
  let lastTransactionYear = transactions[
    transactions.length - 1
  ].date.getFullYear();
  let firstTransactionYear = transactions[0].date.getFullYear();
  let years = Array(firstTransactionYear - lastTransactionYear + 1);
  let yearsData = {
    years: [],
    yearsName: [],
  };
  for (let i = 0; i < years.length; ++i) {
    years[i] = 0;
  }
  for (let i = 0; i < transactions.length; ++i) {
    let transactionYear =
      transactions[i].date.getFullYear() - lastTransactionYear;
    if (transactions[i].type_transaction.toLowerCase() === "in")
      years[transactionYear] = years[transactionYear] + transactions[i].amount;
    else if (transactions[i].type_transaction.toLowerCase() === "out")
      years[transactionYear] = years[transactionYear] - transactions[i].amount;
  }
  for (let i = 0; i < years.length; ++i) {
    if (years[i] !== 0) {
      yearsData.yearsName.push(`${i + lastTransactionYear}`);
    }
  }
  yearsData.years = years.filter((yearMoney) => yearMoney !== 0);
  return yearsData;
};
