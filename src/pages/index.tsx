import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
const Home: NextPage = () => (
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
export default Home;
