import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import getDaysAgoTimestampInSeconds from "../../../utils/getDaysAgoTimestampInSeconds";
const prisma = new PrismaClient();
type Error = {
  error: unknown
}
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<unknown | Error>
): Promise<boolean> {
  const { adminSecret } = req.query;
  if (req.method !== "POST" || adminSecret !== process.env.ADMIN_SECRET) {
    res.status(500).json({ error: "error" });
    return Promise.resolve(false);
  }
  return prisma.block.findMany({
    orderBy: {
      number: "asc"
    }
  })
    .then((blocks) => {
      const missingBlocks = [];
      let currentBlockNumber = blocks[0].number;
      let i = 0;
      while (currentBlockNumber < blocks[blocks.length - 1].number) {
        if (currentBlockNumber === blocks[i].number) {
          i += 1;
        } else {
          missingBlocks.push(currentBlockNumber);
        }
        currentBlockNumber += 1;
      }
      res.status(200).json({
        message: `${missingBlocks}, ${missingBlocks.length} missing.`
      });
      return true;
    })
    .catch((error) => {
      res.status(500).json({ error });
      return false;
    });
}
