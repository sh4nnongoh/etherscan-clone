import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import getMetaContent from "../utils/getMetaContent";
import BlockDetailsPage from "../pages/block/[blockNumber]";
import { defaultEthBlock } from "./constants";
const userStory = `
Given no inital state,
When user navigates to the block page,
Then user sees the static information
`;
jest.mock("next/router", () => ({
  __esModule: true,
  useRouter: () => ({
    query: {
      blockNumber: "123"
    }
  }),
  default: null
}));
global.fetch = jest.fn().mockResolvedValue({
  json: () => Promise.resolve({
    ...defaultEthBlock,
    number: 9,
    timestamp: 8,
    transactions: [],
    totalDifficulty: 7,
    size: 6,
    gasUsed: 5,
    gasLimit: 4
  })
});
describe(userStory, () => {
  beforeEach(async () => {
    render(<BlockDetailsPage />);
    await waitFor(() => expect(screen.getByText("Block Height:")).toBeInTheDocument());
  });
  it("shows the correct headers", () => {
    const expectedTitle = "Etherscan Clone - Block Details Page";
    const expectedDescription = "This page shows the specific details of a particular block.";
    const titleCollection = document.getElementsByTagName("title");
    expect(titleCollection[0].text).toEqual(expectedTitle);
    const metaCollection = document.getElementsByTagName("meta");
    const titleMeta = getMetaContent(0, (metaCollection as unknown) as HTMLMetaElement[], "title");
    expect(titleMeta).toEqual(expectedTitle);
    const descriptionMeta = getMetaContent(0, (metaCollection as unknown) as HTMLMetaElement[], "description");
    expect(descriptionMeta).toEqual(expectedDescription);
  });
  it("shows the block details", () => {
    expect(screen.getByText("Block")).toBeInTheDocument();
    // expect(screen.getByText("#123")).toBeInTheDocument();
    expect(screen.getByText("Overview")).toBeInTheDocument();
    expect(screen.getByText("Block Height:")).toBeInTheDocument();
    expect(screen.getByText("Status:")).toBeInTheDocument();
    expect(screen.getByText("Finalized")).toBeInTheDocument();
    expect(screen.getByText("Timestamp:")).toBeInTheDocument();
    // expect(screen.getByText("Proposed On:")).toBeInTheDocument();
    expect(screen.getByText("Transactions:")).toBeInTheDocument();
    // expect(screen.getByText("Fee Recipient:")).toBeInTheDocument();
    // expect(screen.getByText("Block Reward:")).toBeInTheDocument();
    expect(screen.getByText("Total Difficulty:")).toBeInTheDocument();
    expect(screen.getByText("Size:")).toBeInTheDocument();
    expect(screen.getByText("Gas Used:")).toBeInTheDocument();
    expect(screen.getByText("Gas Limit:")).toBeInTheDocument();
    // expect(screen.getByText("Base Fee Per Gas:")).toBeInTheDocument();
    // expect(screen.getByText("Burnt Fees:")).toBeInTheDocument();
    // expect(screen.getByText("Extra Data:")).toBeInTheDocument();
    expect(screen.getByText("9")).toBeInTheDocument();
    expect(screen.getByText("8")).toBeInTheDocument();
    expect(screen.getByText("7")).toBeInTheDocument();
    expect(screen.getByText("6")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
    expect(screen.getByText("4")).toBeInTheDocument();
  });
});
