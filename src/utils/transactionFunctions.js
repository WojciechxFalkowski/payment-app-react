export const todayDate = () => {
  const date = new Date();
  const todayDate = [
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
  const dates = [];
  const date = todayDate();
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
  let accountMoney = allTransactions
    .map((transaction) => {
      if (transaction.status.toLowerCase() === "success") {
        if (transaction.type_transaction.toLowerCase() === "in") {
          return transaction.amount;
        } else {
          return -transaction.amount;
        }
      }
      return 0;
    })
    .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
  return accountMoney;
};

export const getLastWeekTransactionMoney = (allTransactions) => {
  const transaction = getLastWeekTransaction(allTransactions);
  const money = [0, 0, 0, 0, 0, 0];
  const date = todayDate();
  for (let i = 0; i < transaction.length; ++i) {
    for (let j = 0; j < money.length; ++j) {
      if (
        transaction[i].date >=
          new Date(
            date[0],
            date[1],
            date[2] - 6 + j,
            date[3],
            date[4],
            date[5]
          ) &&
        transaction[i].date <
          new Date(date[0], date[1], date[2] - 5 + j, date[3], date[4], date[5])
      ) {
        if (transaction[i].type_transaction.toLowerCase() === "in") {
          money[j] = money[j] + transaction[i].amount;
        } else if (transaction[i].type_transaction.toLowerCase() === "out") {
          money[j] = money[j] - transaction[i].amount;
        }
      }
    }
  }

  const balance = getMoney(allTransactions);
  const dayMoney = [balance, balance, balance, balance, balance, balance];
  for (let i = 0; i < money.length; ++i) {
    for (let j = money.length - 1; j > i; --j) {
      dayMoney[i] = dayMoney[i] - money[j];
    }
  }
  return dayMoney;
};
export const getLastWeekDays = () => {
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const labels = [];
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
  const transactions = getLastWeekTransaction(transactionsArray);
  const dates = getLastDayDates();
  const date = todayDate();
  dates.unshift(
    new Date(date[0], date[1], date[2] - 1, date[3] + -3, date[4], date[5])
  );
  const money = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  for (let i = 0; i < transactions.length; ++i) {
    for (let j = 0; j < money.length; ++j) {
      if (
        transactions[i].date >= dates[j] &&
        transactions[i].date <= dates[j + 1]
      ) {
        if (transactions[i].type_transaction.toLowerCase() === "in") {
          money[j] += transactions[i].amount;
        } else if (transactions[i].type_transaction.toLowerCase() === "out") {
          money[j] -= transactions[i].amount;
        }
      }
    }
  }
  const balance = getMoney(transactionsArray);
  const hoursMoney = [
    balance,
    balance,
    balance,
    balance,
    balance,
    balance,
    balance,
    balance,
    balance,
  ];

  for (let i = 0; i < money.length; ++i) {
    for (let j = money.length - 1; j > i; --j) {
      hoursMoney[i] = hoursMoney[i] - money[j];
    }
  }
  return hoursMoney;
};

export const getLastDayHours = () => {
  const dates = getLastDayDates();
  const hoursDates = [];
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
export const getDaysTransaction = (transactionsArray) => {
  const today = todayDate();
  const dayOfMonth = new Date().getDate();
  const daysData = {
    daysMoney: [],
    daysName: [],
  };
  const transactions = transactionsArray.filter(
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
  const months = [
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
  const date = new Date(today[0], 0, 1, 0, 0, 0);
  const transaction = transactionsArray.filter(
    (transaction) =>
      transaction.date >= date && transaction.status === "Success"
  );
  return transaction;
};
export const getLastYearMonthTransaction = (transactionsArray) => {
  let transactions = getLastYearMonthFilter(transactionsArray);
  const monthly = {
    money: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    name: [],
  };
  const monthsName = getLastYearMonths();
  for (let i = 0; i < transactions.length; ++i) {
    const transactionMonth = transactions[i].date.getMonth();
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
  const monthly = getLastYearMonthTransaction(transactionsArray);
  const quarterMoney = [0, 0, 0, 0];
  const quarterName = ["I", "II", "III", "IV"];
  const monthsName = getLastYearMonths();
  const quarter = {
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
  const transactions = transactionsArray.filter(
    (transaction) => transaction.status.toLowerCase() === "success"
  );
  const lastTransactionYear = transactions[
    transactions.length - 1
  ].date.getFullYear();
  const firstTransactionYear = transactions[0].date.getFullYear();
  const years = Array(firstTransactionYear - lastTransactionYear + 1);
  const yearsData = {
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
