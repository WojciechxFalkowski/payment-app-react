import React, { Fragment, useState } from "react";
import rectangle from "./../../../../images/icons/rectangle.png";
import { Title, Img, Wrapper, Block } from "./Overview.css";
import { Card } from "./components";
import accountBalance from "./../../../../images/overview/accountBalance.png";
import pending from "./../../../../images/overview/pending.png";
import processed from "./../../../../images/overview/processed.png";
import { connect } from "react-redux";
const Overview = ({ transactions }) => {
  const account = {
    accountBalance: {
      transactions: transactions.filter(
        (transaction) => transaction.status.toLowerCase() === "success"
      ),
      sum: 0,
    },
    pending: {
      transactions: transactions.filter(
        (transaction) => transaction.status.toLowerCase() === "processing"
      ),
      sum: 0,
    },
    processed: {
      transactions: transactions.filter(
        (transaction) => transaction.status.toLowerCase() === "processed"
      ),
      sum: 0,
    },
  };

  account.accountBalance.transactions.forEach((transaction) => {
    account.accountBalance.sum += transaction.amount;
  });
  account.pending.transactions.forEach((transaction) => {
    account.pending.sum += transaction.amount;
  });
  account.processed.transactions.forEach((transaction) => {
    account.processed.sum += transaction.amount;
  });

  const [isActiveH4, setIsActiveH4] = useState(true);
  const handleH4Click = () => {
    setIsActiveH4(!isActiveH4);
  };
  const cardArray = [
    {
      name: "Account Balance",
      account: account.accountBalance.sum,
      image: accountBalance,
    },
    { name: "Pending", account: account.pending.sum, image: pending },
    { name: "Processed", account: account.processed.sum, image: processed },
  ];

  return (
    <Fragment>
      <Title onClick={handleH4Click}>
        Overview <Img src={rectangle} isActiveH4={isActiveH4} alt="" />
      </Title>
      <Wrapper isActiveH4={isActiveH4}>
        <Block>
          {cardArray.map((item) => (
            <Card key={item.name} item={item} />
          ))}
        </Block>
      </Wrapper>
    </Fragment>
  );
};

export default connect((state) => {
  return {
    transactions: state.transactions.transactions,
  };
})(Overview);
