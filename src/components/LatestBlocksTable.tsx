import type { BlockTransactionString } from "web3-eth";
import { FC } from "react";
import LatestTableRow from "./LatestTableRow";
const LatestBlocksTable: FC<{blocks: BlockTransactionString[]}> = ({ blocks }) => (
  <table className="table-auto">
    <thead>
      <tr>
        <th>Latest Blocks</th>
      </tr>
    </thead>
    <tbody>
      {blocks.map((block) => {
        const { number, transactions } = block;
        return (
          <LatestTableRow
            key={number}
            row={[
              `${number}`,
              `${transactions.length} txn(s)`
            ]}
          />
        );
      })}
    </tbody>
  </table>
);
export default LatestBlocksTable;
