import type { BlockTransactionString } from "web3-eth";
import Web3 from "web3";
const getBlocksTillLatest = async (
  web3: Web3,
  startingBlockNumber: number
): Promise<BlockTransactionString[]> => {
  const getBlock = async (
    blockList: BlockTransactionString[],
    blockNumber: number
  ): Promise<BlockTransactionString[]> => {
    const block = await web3.eth.getBlock(blockNumber);
    if (!block) {
      return blockList;
    }
    blockList.push(block);
    return getBlock(blockList, blockNumber + 1);
  };
  return getBlock([], startingBlockNumber);
};
export default getBlocksTillLatest;
