import { Block } from "@prisma/client";
const getNetworkLatency = (
  blocks: Block[]
): number => {
  const blocksCount = blocks.length;
  const timestampDifference = blocks[0].timestamp - blocks[blocksCount - 1].timestamp;
  return timestampDifference / blocksCount;
};
export default getNetworkLatency;
