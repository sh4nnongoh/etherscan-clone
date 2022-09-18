import type { BlockTransactionString } from "web3-eth";
import { FC } from "react";
import LatestTableRow from "./LatestTableRow";
const LatestBlocksTable: FC<{blocks: BlockTransactionString[]}> = ({ blocks }) => (
  <div className="w-full p-8">
    <table className="table-fixed w-full border">
      <thead>
        <tr>
          <th className="text-left px-8 py-4">Latest Blocks</th>
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
  </div>
);
export default LatestBlocksTable;
