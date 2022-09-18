import type { NextPage } from "next";
import Head from "next/head";
import styles from "../../styles/Home.module.css";
import BlockDetails from "../../views/BlockDetails";
const BlockDetailsPage: NextPage = () => (
  <div className={styles.container}>
    <Head>
      <title>Etherscan Clone - Block Details Page</title>
      <meta name="title" content="Etherscan Clone - Block Details Page" />
      <meta
        name="description"
        content="This page shows the specific details of a particular block."
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <BlockDetails block={{}} />
  </div>
);
export default BlockDetailsPage;
