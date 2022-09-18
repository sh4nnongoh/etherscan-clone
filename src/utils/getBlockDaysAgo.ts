import Web3 from "web3";
import getDaysFromTimestampInSecondsDifference from "./getDaysFromTimestampInSecondsDifference";
const getBlockDaysAgo = async (
  web3: Web3,
  referenceBlock: number,
  daysAgo: number
) => {
  if (!web3 || !referenceBlock || !daysAgo) {
    return 0;
  }
  const referenceBlockTimestamp = Number((await web3.eth.getBlock(referenceBlock)).timestamp);
  const dictionary: Record<string, boolean> = {};
  const search = async (start: number, end: number): Promise<number> => {
    if (start === end) {
      return -1;
    }
    const block = Math.ceil((end - start) / 2) + start;
    const blockTimestamp = Number((await web3.eth.getBlock(block)).timestamp);
    dictionary[block] = true;
    const daysSinceBlock = getDaysFromTimestampInSecondsDifference(referenceBlockTimestamp - blockTimestamp);
    if (dictionary[block] && dictionary[block + 1]) {
      return block;
    }
    if (daysSinceBlock > daysAgo) {
      return search(block, end);
    }
    return search(start, block);
  };
  return search(0, referenceBlock);
};
export default getBlockDaysAgo;
