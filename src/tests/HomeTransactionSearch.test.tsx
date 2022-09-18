import React from "react";
import {
  render, screen, waitFor
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import singletonRouter from "next/router";
import mockRouter from "next-router-mock";
import App from "../pages";
const userStory = `
Given no inital state,
When user navigates to the home page,
And searches for a specfic transaction hash,
Then user gets navigated to the transaction details page.
`;
// eslint-disable-next-line global-require
jest.mock("next/router", () => require("next-router-mock"));
describe(userStory, () => {
  const hash = "0x96c891f28da24260f0660d7f21520ab33b83360accc093ebb54f823e1c43d184";
  beforeEach(async () => {
    mockRouter.setCurrentUrl("/");
    render(<App
      blocks={[]}
      transactions={[]}
      dailyTransactionCount={[]}
      weeklyAverageLatency={0}
      weeklyNetworkThroughput={0}
    />);
    await waitFor(() => expect(screen.queryByText("chart rendered")).toBeInTheDocument());
  });
  it("calls the router with the right props", async () => {
    const search = screen.getByPlaceholderText("Search by Txn Hash / Block Number");
    await userEvent.type(search, hash);
    screen.getByDisplayValue(hash);
    const searchButton = screen.getByRole("button", { name: "search" });
    await userEvent.click(searchButton);
    expect(singletonRouter).toMatchObject({
      asPath: `/transaction/${hash}`
    });
  });
});
