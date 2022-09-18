import Web3 from "web3";
import type { BlockTransactionString } from "web3-eth";
const getBlocksFromEth = (
  web3: Web3,
  blockNumbers: number[]
): Promise<BlockTransactionString[]> => Promise.all(blockNumbers.map((blockNumber) => web3.eth.getBlock(blockNumber)));
export default getBlocksFromEth;
