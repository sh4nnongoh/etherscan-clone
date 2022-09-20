import { FC } from "react";
import dynamic from "next/dynamic";
const DynamicChart = dynamic(() => import("./Chart"), {
  ssr: false
});
const EthereumTransactionHistory: FC<{dailyTransactionCount: number[]}> = ({ dailyTransactionCount }) => (
  <div className="h-50 px-5">
    ETHEREUM TRANSACTION HISTORY IN 7 DAYS
    <DynamicChart dailyTransactionCount={dailyTransactionCount.reverse()} />
  </div>
);
export default EthereumTransactionHistory;
