import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Home from "../views/Home";
import { RecentData } from "./api/v1/recent";
const App: NextPage<RecentData> = ({
  blocks,
  transactions,
  dailyTransactionCount,
  weeklyNetworkThroughput,
  weeklyAverageLatency
}) => (
  <div className={styles.container}>
    <Head>
      <title>Etherscan Clone - Search & View Recent Transactions</title>
      <meta name="title" content="Etherscan Clone - Search & View Recent Transactions" />
      <meta
        name="description"
        content="This is an example project to demonstrate the use of modern web techniques with Web3."
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Home
      blocks={blocks}
      transactions={transactions}
      dailyTransactionCount={dailyTransactionCount}
      weeklyNetworkThroughput={weeklyNetworkThroughput}
      weeklyAverageLatency={weeklyAverageLatency}
    />
  </div>
);
export const getStaticProps = async () => {
  const result = await fetch(`${process.env.PRODUCTION_URL}/api/v1/recent`);
  const recentData = await result.json();
  return {
    props: recentData,
    revalidate: 10
  };
};
export default App;
