import { FC } from "react";
import type { Transaction } from "web3-eth";
import TransactionDetailsTableRow from "./TransactionDetailsTableRow";
const TransactionDetailsTable: FC<{transaction: Transaction}> = ({ transaction }) => {
  const {
    hash,
    // nonce,
    // blockHash,
    blockNumber,
    // transactionIndex,
    from,
    to,
    value,
    // gas,
    gasPrice
    // input
  } = transaction;
  return (
    <div className="w-full p-8">
      <table className="table-auto border w-full">
        <tbody>
          <TransactionDetailsTableRow row={["Transaction Hash:", `${hash}`]} />
          <TransactionDetailsTableRow row={["Status:", "Success"]} />
          <TransactionDetailsTableRow row={["Block:", `${blockNumber}`]} />
          {/* <TransactionDetailsTableRow row={["Timestamp:", `${timestamp}`]} /> */}
          <TransactionDetailsTableRow row={["From:", `${from}`]} />
          <TransactionDetailsTableRow row={["Interacted With (To):", `${to}`]} />
          <TransactionDetailsTableRow row={["Value:", `${value}`]} />
          <TransactionDetailsTableRow row={["Gas Price:", `${gasPrice}`]} />
          {/* <TransactionDetailsTableRow row={["Gas Limit:", `${gasLimit}`]} /> */}
        </tbody>
      </table>
    </div>
  );
};
export default TransactionDetailsTable;
