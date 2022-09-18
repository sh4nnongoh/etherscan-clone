const getNetworkThroughput = (
  transactionCount: number,
  duration: number
) => transactionCount / duration;
export default getNetworkThroughput;
