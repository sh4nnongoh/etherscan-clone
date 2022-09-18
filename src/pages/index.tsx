import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { RecentData } from "./api/v1/recent";
const Home: NextPage<RecentData> = () => (
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
    <main className={styles.main}>
      <h1 className={styles.title}>
        Work In Progress
      </h1>
    </main>
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
export default Home;
