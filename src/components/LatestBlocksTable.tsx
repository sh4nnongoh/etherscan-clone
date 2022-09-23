import type { BlockTransactionString } from "web3-eth";
import { FC } from "react";
import LatestTableRow from "./LatestTableRow";
const LatestBlocksTable: FC<{blocks: Partial<BlockTransactionString>[]}> = ({ blocks }) => (
  <table className="table-fixed w-full border">
    <tbody>
      {blocks.map((block) => {
        const { number, transactions = [] } = block;
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
