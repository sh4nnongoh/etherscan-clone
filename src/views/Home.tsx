import { FC } from "react";
import Card from "../components/Card";
import EthereumTransactionHistory from "../components/EthereumTransactionHistory";
import LatestBlocksTable from "../components/LatestBlocksTable";
import LatestTransactionsTable from "../components/LatestTransactionsTable";
import Search from "../components/Search";
import Stats from "../components/Stats";
import { RecentData } from "../pages/api/v1/recent";
const Home: FC<RecentData> = (props) => {
  const {
    blocks = [],
    transactions = [],
    dailyTransactionCount = [],
    weeklyNetworkThroughput,
    weeklyAverageLatency
  } = props;
  return (
    <>
      <div className="flex flex-col items-center mt-10">
        <Search />
      </div>
      <div className="grid md:grid-cols-10">
        <div className="col-start-2 col-span-8">
          <Card>
            <div className="flex flex-col divide-y justify-evenly">
              <Stats title="TRANSACTIONS PER SEC" subtitle={`${weeklyNetworkThroughput} TPS`} />
              <Stats title="AVERAGE LATENCY" subtitle={`${weeklyAverageLatency} S`} />
            </div>
            <EthereumTransactionHistory dailyTransactionCount={dailyTransactionCount} />
          </Card>
        </div>
      </div>
      <div className="grid sm:grid-rows-2 md:grid-cols-2">
        <div>
          <Card>
            <div>
              <div className="text-left w-full px-8 py-4 border font-bold">Latest Blocks</div>
              <LatestBlocksTable blocks={blocks} />
            </div>
          </Card>
        </div>
        <div>
          <Card>
            <div>
              <div className="text-left w-full px-8 py-4 border font-bold">Latest Transactions</div>
              <LatestTransactionsTable transactions={transactions} />
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};
export default Home;
