import { FC } from "react";
import dynamic from "next/dynamic";
const DynamicChart = dynamic(() => import("./Chart"), {
  ssr: false
});
const EthereumTransactionHistory: FC<{dailyTransactionCount: number[]}> = ({ dailyTransactionCount }) => (
  <div className="h-50 px-5">
    <span className="font-bold">
      ETHEREUM TRANSACTION HISTORY IN 7 DAYS
    </span>
    <DynamicChart dailyTransactionCount={dailyTransactionCount.reverse()} />
  </div>
);
export default EthereumTransactionHistory;
