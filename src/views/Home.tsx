import { FC, useEffect, useState } from "react";
import EthereumTransactionHistory from "../components/EthereumTransactionHistory";
import LatestBlocksTable from "../components/LatestBlocksTable";
import LatestTransactionsTable from "../components/LatestTransactionsTable";
import Search from "../components/Search";
import Stats from "../components/Stats";
import { RecentData } from "../pages/api/v1/recent";
const Home: FC<RecentData> = (props) => {
  const [prerenderedProps, setPrerenderedProps] = useState(props || {});
  const {
    blocks = [],
    transactions = [],
    dailyTransactionCount = [],
    weeklyNetworkThroughput,
    weeklyAverageLatency
  } = prerenderedProps;
  useEffect(() => {
    setPrerenderedProps(props);
  }, [props]);
  return (
    <div>
      <Search />
      <Stats title="TRANSACTIONS PER SEC" subtitle={`${weeklyNetworkThroughput} TPS`} />
      <Stats title="AVERAGE LATENCY" subtitle={`${weeklyAverageLatency} S`} />
      <EthereumTransactionHistory dailyTransactionCount={dailyTransactionCount} />
      <LatestBlocksTable blocks={blocks} />
      <LatestTransactionsTable transactions={transactions} />
    </div>
  );
};
export default Home;
