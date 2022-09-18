import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import getMetaContent from "../utils/getMetaContent";
import { defaultEthTransaction } from "./constants";
import TransactionDetailsPage from "../pages/transaction/[transactionHash]";
const userStory = `
Given no inital state,
When user navigates to the transaction page,
Then user sees the static information
`;
jest.mock("next/router", () => ({
  __esModule: true,
  useRouter: () => ({
    query: {
      transactionHash: "123"
    }
  }),
  default: null
}));
global.fetch = jest.fn().mockResolvedValue({
  json: () => Promise.resolve({
    ...defaultEthTransaction,
    hash: "123",
    blockNumber: 9,
    from: "8",
    to: "7",
    value: 6,
    gasPrice: 5
  })
});
describe(userStory, () => {
  beforeEach(async () => {
    render(<TransactionDetailsPage />);
    await waitFor(() => expect(screen.getByText("Transaction Hash:")).toBeInTheDocument());
  });
  it("shows the correct headers", () => {
    const expectedTitle = "Etherscan Clone - Transaction Details Page";
    const expectedDescription = "This page shows the specific details of a particular transaction.";
    const titleCollection = document.getElementsByTagName("title");
    expect(titleCollection[0].text).toEqual(expectedTitle);
    const metaCollection = document.getElementsByTagName("meta");
    const titleMeta = getMetaContent(0, (metaCollection as unknown) as HTMLMetaElement[], "title");
    expect(titleMeta).toEqual(expectedTitle);
    const descriptionMeta = getMetaContent(0, (metaCollection as unknown) as HTMLMetaElement[], "description");
    expect(descriptionMeta).toEqual(expectedDescription);
  });
  it("shows the transaction details", () => {
    expect(screen.getByText("Transaction Details")).toBeInTheDocument();
    expect(screen.getByText("Transaction Hash:")).toBeInTheDocument();
    expect(screen.getByText("Status:")).toBeInTheDocument();
    expect(screen.getByText("Success")).toBeInTheDocument();
    expect(screen.getByText("Block:")).toBeInTheDocument();
    expect(screen.getByText("From:")).toBeInTheDocument();
    expect(screen.getByText("Interacted With (To):")).toBeInTheDocument();
    expect(screen.getByText("Value:")).toBeInTheDocument();
    expect(screen.getByText("Gas Price:")).toBeInTheDocument();
    expect(screen.getByText("123")).toBeInTheDocument();
    expect(screen.getByText("9")).toBeInTheDocument();
    expect(screen.getByText("8")).toBeInTheDocument();
    expect(screen.getByText("7")).toBeInTheDocument();
    expect(screen.getByText("6")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
  });
});
