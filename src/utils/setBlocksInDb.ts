import { PrismaClient } from "@prisma/client";
import type { BlockTransactionString } from "web3-eth";
const setBlocksInDb = (
  prisma: PrismaClient,
  blocks: BlockTransactionString[]
) => {
  const blocksToSet = blocks.map(({
    hash, parentHash, number, timestamp, transactions
  }) => ({
    hash, parentHash, number, timestamp: Number(timestamp), transactionCount: transactions.length
  }));
  return prisma.block.createMany({ data: blocksToSet, skipDuplicates: true });
};
export default setBlocksInDb;
