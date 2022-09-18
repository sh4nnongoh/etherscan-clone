import type { Transaction } from "web3-eth";
import { FC } from "react";
import LatestTableRow from "./LatestTableRow";
const LatestTransactionsTable: FC<{transactions: Transaction[]}> = ({ transactions }) => (
  <table className="table-auto">
    <thead>
      <tr>
        <th>Latest Transactions</th>
      </tr>
    </thead>
    <tbody>
      {transactions.map(({ hash, from, to }) => (
        <LatestTableRow
          key={hash}
          row={[
            hash,
            `From ${from}, To ${to}`
          ]}
        />
      ))}
    </tbody>
  </table>
);
export default LatestTransactionsTable;
