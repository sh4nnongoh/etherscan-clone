import { FC } from "react";
import {
  LineChart, Line, XAxis, YAxis
} from "recharts";
import getDaysAgoTimestampInSeconds from "../utils/getDaysAgoTimestampInSeconds";
const Chart: FC<{dailyTransactionCount: number[]}> = ({ dailyTransactionCount }) => {
  const data = dailyTransactionCount.map((count, index) => ({
    x: count,
    y: getDaysAgoTimestampInSeconds(index)
  }));
  return (
    <LineChart width={400} height={180} data={data}>
      <Line type="monotone" dataKey="x" stroke="#8884d8" />
      <XAxis dataKey="y" />
      <YAxis />
    </LineChart>
  );
};
export default Chart;
