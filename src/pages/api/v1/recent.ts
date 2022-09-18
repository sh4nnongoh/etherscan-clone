import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import Web3 from "web3";
import type { BlockTransactionString, Transaction } from "web3-eth";
import getBlocksFromDb from "../../../utils/getBlocksFromDb";
import getBlocksFromEth from "../../../utils/getBlocksFromEth";
import getDaysAgoTimestampInSeconds from "../../../utils/getDaysAgoTimestampInSeconds";
import getNetworkStats from "../../../utils/getNetworkStats";
import getXTransactionHashesFromBlocks from "../../../utils/getXTransactionHashesFromBlocks";
import getTransactionsFromHashes from "../../../utils/getTransactionsFromHashes";
const provider = process.env.INFURA_ENDPOINT || "";
const web3Provider = new Web3.providers.HttpProvider(provider);
const web3 = new Web3(web3Provider);
const prisma = new PrismaClient();
export type RecentData = {
  blocks: BlockTransactionString[]
  transactions: Transaction[]
  dailyTransactionCount: number[]
  weeklyNetworkThroughput: number
  weeklyAverageLatency: number
}
type Error = {
  error: unknown
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<RecentData | Error>
) {
  try {
    const blocks = await getBlocksFromDb(prisma, getDaysAgoTimestampInSeconds(7));
    const recentBlockNumbers = blocks.slice(0, 10).map((block) => block.number);
    const recentBlocks = await getBlocksFromEth(web3, recentBlockNumbers);
    const transactions = await getTransactionsFromHashes(web3, getXTransactionHashesFromBlocks([], recentBlocks, 10));
    res.status(200).json({
      ...getNetworkStats(blocks),
      blocks: recentBlocks,
      transactions
    });
  } catch (error) {
    res.status(500).json({ error });
  }
}
