import type { NextPage } from "next";
import Head from "next/head";
import styles from "../../styles/Home.module.css";
import TransactionDetails from "../../views/TransactionDetails";
const TransactionDetailsPage: NextPage = () => (
  <div className={styles.container}>
    <Head>
      <title>Etherscan Clone - Transaction Details Page</title>
      <meta name="title" content="Etherscan Clone - Transaction Details Page" />
      <meta
        name="description"
        content="This page shows the specific details of a particular transaction."
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <TransactionDetails transaction={null} />
  </div>
);
export default TransactionDetailsPage;
