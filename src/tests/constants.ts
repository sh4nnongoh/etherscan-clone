import type { BlockTransactionString, Transaction } from "web3-eth";
export const defaultEthBlock: BlockTransactionString = {
  hash: "",
  parentHash: "",
  number: 0,
  transactions: [],
  size: 0,
  difficulty: 0,
  totalDifficulty: 0,
  uncles: [],
  nonce: "",
  sha3Uncles: "",
  logsBloom: "",
  transactionsRoot: "",
  stateRoot: "",
  receiptsRoot: "",
  miner: "",
  extraData: "",
  gasLimit: 0,
  gasUsed: 0,
  timestamp: 0
};
export const defaultEthTransaction: Transaction = {
  hash: "",
  nonce: 0,
  blockHash: "",
  blockNumber: 0,
  transactionIndex: 0,
  from: "",
  to: "",
  value: "",
  gas: 0,
  gasPrice: "",
  input: ""
};
