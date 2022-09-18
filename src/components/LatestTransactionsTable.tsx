import type { Transaction } from "web3-eth";
import { FC } from "react";
import LatestTableRow from "./LatestTableRow";
const LatestTransactionsTable: FC<{transactions: Transaction[]}> = ({ transactions }) => (
  <div className="w-full p-8">
    <table className="table-fixed w-full">
      <thead className="border">
        <tr>
          <th className="text-left px-8 py-4">Latest Transactions</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(({ hash, from, to }) => (
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
  </div>
);
export default LatestTransactionsTable;
