import { FC } from "react";
import type { BlockTransactionString } from "web3-eth";
import BlockDetailsTableRow from "./BlockDetailsTableRow";
const BlockDetailsTable: FC<{block: BlockTransactionString}> = ({ block }) => {
  const {
    // hash,
    // parentHash,
    number,
    transactions,
    size,
    // difficulty,
    totalDifficulty,
    // uncles,
    // nonce,
    // sha3Uncles,
    // logsBloom,
    // transactionsRoot,
    // stateRoot,
    // receiptsRoot,
    // miner,
    // extraData,
    gasLimit,
    gasUsed,
    timestamp
  } = block;
  return (
    <table>
      <tbody>
        <BlockDetailsTableRow row={["Block Height:", `${number}`]} />
        <BlockDetailsTableRow row={["Status:", "Finalized"]} />
        <BlockDetailsTableRow row={["Timestamp:", `${timestamp}`]} />
        <BlockDetailsTableRow row={["Transactions:", `${transactions.length}`]} />
        <BlockDetailsTableRow row={["Total Difficulty:", `${totalDifficulty}`]} />
        <BlockDetailsTableRow row={["Size:", `${size}`]} />
        <BlockDetailsTableRow row={["Gas Used:", `${gasUsed}`]} />
        <BlockDetailsTableRow row={["Gas Limit:", `${gasLimit}`]} />
      </tbody>
    </table>
  );
};
export default BlockDetailsTable;
