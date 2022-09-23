import type { Transaction } from "web3-eth";
import { FC } from "react";
import LatestTableRow from "./LatestTableRow";
const LatestTransactionsTable: FC<{transactions: Partial<Transaction>[]}> = ({ transactions }) => (
  <table className="table-fixed w-full">
    <tbody>
      {transactions.map(({ hash = "", from, to }) => (
        <LatestTableRow
          key={hash}
          row={[
            hash,
            `From ${from},\nTo ${to}`
          ]}
        />
      ))}
    </tbody>
  </table>
);
export default LatestTransactionsTable;
