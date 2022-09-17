import type { NextApiRequest, NextApiResponse } from "next";
import Web3 from "web3";
import type { BlockTransactionString } from "web3-eth";
const provider = process.env.INFURA_ENDPOINT || "";
const web3Provider = new Web3.providers.HttpProvider(provider);
const web3 = new Web3(web3Provider);
type Error = {
  error: unknown
}
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<BlockTransactionString | Error>
) {
  const { number } = req.query;
  if (!number) {
    res.status(500).json({ error: "Block number needs to be specified." });
    return;
  }
  web3.eth.getBlock(Number(number))
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
}
