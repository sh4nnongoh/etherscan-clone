import type { NextApiRequest, NextApiResponse } from "next";
import Web3 from "web3";
import type { Transaction } from "web3-eth";
const provider = process.env.INFURA_ENDPOINT || "";
const web3Provider = new Web3.providers.HttpProvider(provider);
const web3 = new Web3(web3Provider);
type Error = {
  error: unknown
}
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Transaction | Error>
) {
  const { hash } = req.query;
  if (!hash || Array.isArray(hash)) {
    res.status(500).json({ error: "A single transaction hash needs to be specified." });
    return;
  }
  web3.eth.getTransaction(hash as string)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
}
