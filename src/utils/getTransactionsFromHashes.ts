import Web3 from "web3";
import type { Transaction } from "web3-eth";
const getTransactionsFromHashes = (
  web3: Web3,
  transactionHashes: string[]
): Promise<Transaction[]> => Promise.all(transactionHashes.map((hash) => web3.eth.getTransaction(hash)));
export default getTransactionsFromHashes;
