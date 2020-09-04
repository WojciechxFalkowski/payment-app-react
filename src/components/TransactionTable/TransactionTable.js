import React from "react";
import { Table, Tr, Th } from "./TransactionTable.css";
import { IoIosArrowDown } from "react-icons/io";
const TransactionTable = () => {
  const tableNames = ["Transaction", "Amount", "Status", "Date"];
  const handleTrClick = (nameTransaction) => {
    console.log(nameTransaction);
  };
  return (
    <Table>
      <tbody>
        <Tr>
          {tableNames.map((th) => (
            <Th key={th} onClick={() => handleTrClick(th)}>
              {th} <IoIosArrowDown />
            </Th>
          ))}
        </Tr>
      </tbody>
    </Table>
  );
};

export default TransactionTable;
