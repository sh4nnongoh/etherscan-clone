import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from "../pages";
import getMetaContent from "../utils/getMetaContent";
import { defaultEthBlock, defaultEthTransaction } from "./constants";
const userStory = `
Given no inital state,
When user navigates to the web page,
Then user sees the static information
`;
describe(userStory, () => {
  beforeEach(async () => {
    render(<App
      blocks={[
        {
          ...defaultEthBlock,
          number: 999
        }
      ]}
      transactions={[
        {
          ...defaultEthTransaction,
          hash: "transaction hash 1",
          from: "address 1",
          to: "address 2"
        }
      ]}
      dailyTransactionCount={[]}
      weeklyAverageLatency={123}
      weeklyNetworkThroughput={321}
    />);
    await waitFor(() => expect(screen.queryByText("chart rendered")).toBeInTheDocument());
  });
  it("shows the correct headers", () => {
    const titleCollection = document.getElementsByTagName("title");
    expect(titleCollection[0].text).toEqual("Etherscan Clone - Search & View Recent Transactions");
    const metaCollection = document.getElementsByTagName("meta");
    const titleMeta = getMetaContent(0, (metaCollection as unknown) as HTMLMetaElement[], "title");
    expect(titleMeta)
      .toEqual("Etherscan Clone - Search & View Recent Transactions");
    const descriptionMeta = getMetaContent(0, (metaCollection as unknown) as HTMLMetaElement[], "description");
    expect(descriptionMeta)
      .toEqual("This is an example project to demonstrate the use of modern web techniques with Web3.");
  });
  it("shows the search bar", () => {
    expect(screen.getByPlaceholderText("Search by Txn Hash / Block Number")).toBeInTheDocument();
  });
  it("shows the weekly network throughput", () => {
    expect(screen.getByText("TRANSACTIONS PER SEC")).toBeInTheDocument();
    expect(screen.getByText("321 TPS")).toBeInTheDocument();
  });
  it("shows the weekly average latency", () => {
    expect(screen.getByText("AVERAGE LATENCY")).toBeInTheDocument();
    expect(screen.getByText("123 S")).toBeInTheDocument();
  });
  it("shows the latest blocks", () => {
    expect(screen.getByText("Latest Blocks")).toBeInTheDocument();
    expect(screen.getByText("999")).toBeInTheDocument();
    expect(screen.getByText("0 txn(s)")).toBeInTheDocument();
  });
  it("shows the latest transactions", () => {
    expect(screen.getByText("Latest Transactions")).toBeInTheDocument();
    expect(screen.getByText("transaction hash 1")).toBeInTheDocument();
    expect(screen.getByText("From address 1, To address 2")).toBeInTheDocument();
  });
  it("shows the ethereum transaction history chart", () => {
    expect(screen.getByText("ETHEREUM TRANSACTION HISTORY IN 7 DAYS")).toBeInTheDocument();
  });
});
