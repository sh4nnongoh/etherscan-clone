import type { BlockTransactionString } from "web3-eth";
const getXTransactionHashesFromBlocks = (
  transactionHashes: string[],
  blocks: BlockTransactionString[],
  X: number
): string[] => {
  if (!blocks.length || transactionHashes.length >= X) {
    return transactionHashes;
  }
  const currentBlockTransactionHashes = blocks[0].transactions;
  const updatedTransactionHashes = transactionHashes.concat(
    currentBlockTransactionHashes.length > X
      ? currentBlockTransactionHashes.slice(0, X) : currentBlockTransactionHashes
  );
  return getXTransactionHashesFromBlocks(updatedTransactionHashes, blocks.slice(1), X);
};
export default getXTransactionHashesFromBlocks;
