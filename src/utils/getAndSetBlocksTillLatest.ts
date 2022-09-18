import type { BlockTransactionString } from "web3-eth";
import Web3 from "web3";
import { PrismaClient } from "@prisma/client";
import setBlocksInDb from "./setBlocksInDb";
const getAndSetBlocksTillLatest = async (
  web3: Web3,
  prisma: PrismaClient,
  startingBlockNumber: number,
  size: number
): Promise<BlockTransactionString[]> => {
  const getBlock = async (
    blockList: BlockTransactionString[],
    blockNumber: number
  ): Promise<BlockTransactionString[]> => {
    if (blockList.length === size) {
      await setBlocksInDb(prisma, blockList.splice(0));
    }
    const block = await web3.eth.getBlock(blockNumber);
    if (!block) {
      return blockList;
    }
    blockList.push(block);
    return getBlock(blockList, blockNumber + 1);
  };
  return getBlock([], startingBlockNumber);
};
export default getAndSetBlocksTillLatest;
