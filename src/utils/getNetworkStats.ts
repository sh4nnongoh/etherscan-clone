import { Block } from "@prisma/client";
import { sum } from "lodash";
import getDailyTransactionCountPastSevenDays from "./getDailyTransactionCountPastSevenDays";
import getNetworkLatency from "./getNetworkLatency";
import getNetworkThroughput from "./getNetworkThroughput";
type NetworkStats = {
  dailyTransactionCount: number[]
  weeklyAverageLatency: number
  weeklyNetworkThroughput: number
}
const getNetworkStats = (
  blocks: Block[]
): NetworkStats => {
  const dailyTransactionCount = getDailyTransactionCountPastSevenDays(blocks);
  return ({
    dailyTransactionCount,
    weeklyAverageLatency: getNetworkLatency(blocks),
    weeklyNetworkThroughput: getNetworkThroughput(sum(dailyTransactionCount), 86400 * 7)
  });
};
export default getNetworkStats;
