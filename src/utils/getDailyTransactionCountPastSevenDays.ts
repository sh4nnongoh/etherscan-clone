import { Block } from "@prisma/client";
import getDaysFromTimestampInSecondsDifference from "./getDaysFromTimestampInSecondsDifference";
const getDailyTransactionCountPastSevenDays = (
  blocks: Block[]
): number[] => {
  const todayInTimestampSeconds = (new Date()).setHours(0, 0, 0, 0) / 1000;
  const dailyTransactionCount = blocks.reduce((count, block) => {
    const { timestamp, transactionCount } = block;
    const currentBlockDayInTimestampSeconds = (new Date(timestamp * 1000)).setHours(0, 0, 0, 0) / 1000;
    const daysAgo = getDaysFromTimestampInSecondsDifference(
      todayInTimestampSeconds - currentBlockDayInTimestampSeconds
    );
    switch (daysAgo) {
      case 0:
        return {
          ...count,
          [daysAgo]: Number(count[0]) + transactionCount
        };
      case 1:
        return {
          ...count,
          [daysAgo]: Number(count[1]) + transactionCount
        };
      case 2:
        return {
          ...count,
          [daysAgo]: Number(count[2]) + transactionCount
        };
      case 3:
        return {
          ...count,
          [daysAgo]: Number(count[3]) + transactionCount
        };
      case 4:
        return {
          ...count,
          [daysAgo]: Number(count[4]) + transactionCount
        };
      case 5:
        return {
          ...count,
          [daysAgo]: Number(count[5]) + transactionCount
        };
      case 6:
      default:
        return {
          ...count,
          [daysAgo]: Number(count[6]) + transactionCount
        };
    }
  }, {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0
  });
  return Object.values(dailyTransactionCount);
};
export default getDailyTransactionCountPastSevenDays;
