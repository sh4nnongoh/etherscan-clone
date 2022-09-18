import { FC } from "react";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, Legend
} from "recharts";
import getDaysAgoTimestampInSeconds from "../utils/getDaysAgoTimestampInSeconds";
const Chart: FC<{dailyTransactionCount: number[]}> = ({ dailyTransactionCount }) => {
  const data = dailyTransactionCount.map((count, index) => {
    const timestamp = getDaysAgoTimestampInSeconds(index);
    return ({
      name: new Date(timestamp),
      count,
      timestamp
    });
  });
  return (
    <LineChart
      width={400}
      height={180}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <Line type="monotone" dataKey="count" stroke="#8884d8" />
      <XAxis dataKey="timestamp" />
      <YAxis />
      <Tooltip />
      <Legend />
    </LineChart>
  );
};
export default Chart;
