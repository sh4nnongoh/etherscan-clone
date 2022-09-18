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
And searches for a specfic block number,
Then user gets navigated to the block details page.
`;
// eslint-disable-next-line global-require
jest.mock("next/router", () => require("next-router-mock"));
describe(userStory, () => {
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
    await userEvent.type(search, "123");
    screen.getByDisplayValue("123");
    const searchButton = screen.getByRole("button", { name: "search" });
    await userEvent.click(searchButton);
    expect(singletonRouter).toMatchObject({ asPath: "/block/123" });
  });
});
