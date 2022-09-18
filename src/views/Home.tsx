import { FC, useEffect, useState } from "react";
import Card from "../components/Card";
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
  // <div className="content-center">
    <div className="flex flex-col justify-evenly items-center mt-10">
      <Search />
      <Card>
        <div className="flex flex-col divide-y justify-evenly">
          <Stats title="TRANSACTIONS PER SEC" subtitle={`${weeklyNetworkThroughput} TPS`} />
          <Stats title="AVERAGE LATENCY" subtitle={`${weeklyAverageLatency} S`} />
        </div>
        <EthereumTransactionHistory dailyTransactionCount={dailyTransactionCount} />
      </Card>
      <div className="flex sm:flex-col md:flex-row">
        <Card>
          <LatestBlocksTable blocks={blocks} />
        </Card>
        <Card>
          <LatestTransactionsTable transactions={transactions} />
        </Card>
      </div>
    </div>
  // </div>
  );
};
export default Home;
