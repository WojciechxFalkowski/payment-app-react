import React, { Fragment, useState } from "react";
import rectangle from "./../../../../images/icons/rectangle.png";
import { Title, Img, Wrapper, Block } from "./Overview.css";
import { Card } from "./components";
import accountBalance from "./../../../../images/overview/accountBalance.png";
import pending from "./../../../../images/overview/pending.png";
import processed from "./../../../../images/overview/processed.png";
const Overview = () => {
  const [isActiveH4, setIsActiveH4] = useState(false);
  const handleH4Click = () => {
    setIsActiveH4(!isActiveH4);
  };
  const cardArray = [
    {
      name: "Account Balance",
      account: 30659.45,
      image: accountBalance,
    },
    { name: "Pending", account: -19500.0, image: pending },
    { name: "Processed", account: 28750.0, image: processed },
  ];

  return (
    <Fragment>
      <Title onClick={handleH4Click}>
        Overview <Img src={rectangle} isActiveH4={isActiveH4} alt="" />
      </Title>
      <Wrapper>
        <Block>
          {cardArray.map((item) => (
            <Card key={item.name} item={item} />
          ))}
        </Block>
      </Wrapper>
    </Fragment>
  );
};

export default Overview;
