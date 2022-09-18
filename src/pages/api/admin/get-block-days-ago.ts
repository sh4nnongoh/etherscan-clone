import type { NextApiRequest, NextApiResponse } from "next";
import Web3 from "web3";
import getBlockDaysAgo from "../../../utils/getBlockDaysAgo";
const provider = process.env.INFURA_ENDPOINT || "";
const web3Provider = new Web3.providers.HttpProvider(provider);
const web3 = new Web3(web3Provider);
type Error = {
  error: unknown
}
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<unknown | Error>
): Promise<boolean> {
  const { adminSecret, daysAgo } = req.query;
  if (req.method !== "POST" || adminSecret !== process.env.ADMIN_SECRET) {
    res.status(500).json({ error: "error" });
    return Promise.resolve(false);
  }
  return web3.eth.getBlockNumber()
    .then((number) => getBlockDaysAgo(web3, number, Number(daysAgo)))
    .then((result) => {
      res.status(200).json({
        message: `${result}`
      });
      return true;
    })
    .catch((error) => {
      res.status(500).json({ error });
      return false;
    });
}
