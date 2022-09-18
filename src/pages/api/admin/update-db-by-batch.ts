import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import Web3 from "web3";
import getAndSetBlocksTillLatest from "../../../utils/getAndSetBlocksTillLatest";
import getDbBlockCount from "../../../utils/getDbBlockCount";
import setBlocksInDb from "../../../utils/setBlocksInDb";
const provider = process.env.INFURA_ENDPOINT || "";
const web3Provider = new Web3.providers.HttpProvider(provider);
const web3 = new Web3(web3Provider);
const prisma = new PrismaClient();
type Error = {
  error: unknown
}
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<unknown | Error>
): Promise<boolean> {
  const { adminSecret, sinceBlockNumber, size } = req.query;
  if (req.method !== "POST" || adminSecret !== process.env.ADMIN_SECRET) {
    res.status(500).json({ error: "error" });
    return Promise.resolve(false);
  }
  return prisma.block.findFirst({
    orderBy: {
      number: "desc"
    }
  })
    .then((result) => {
      if (!result) {
        throw Error("Unable to find latest block in database.");
      }
      const { number } = result;
      return getAndSetBlocksTillLatest(web3, prisma, Number(sinceBlockNumber) || number + 1, Number(size));
    })
    .then((blocks) => setBlocksInDb(prisma, blocks))
    .then(() => getDbBlockCount(prisma))
    .then((count) => {
      res.status(200).json({
        message: `Database now has ${count} block(s).`
      });
      return true;
    })
    .catch((error) => {
      res.status(500).json({ error });
      return false;
    });
}
