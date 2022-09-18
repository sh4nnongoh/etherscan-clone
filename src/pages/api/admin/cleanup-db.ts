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
  const sevenDaysAgoTimestampInSeconds = getDaysAgoTimestampInSeconds(7);
  let blocksToDelete = 0;
  return prisma.block.count({
    where: {
      timestamp: {
        lt: sevenDaysAgoTimestampInSeconds
      }
    }
  })
    .then((count) => {
      blocksToDelete = count;
      return prisma.block.deleteMany({
        where: {
          timestamp: {
            lt: sevenDaysAgoTimestampInSeconds
          }
        }
      });
    })
    .then((result) => {
      const isSuccess = Boolean(result);
      res.status(200).json({
        message: `${isSuccess ? "Successfully" : "Failed to"} delete ${blocksToDelete} block(s)`
      });
      return isSuccess;
    })
    .catch((error) => {
      res.status(500).json({ error });
      return false;
    });
}
