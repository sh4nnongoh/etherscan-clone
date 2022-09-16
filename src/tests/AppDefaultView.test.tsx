import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../pages";
import getMetaContent from "../utils/getMetaContent";
const userStory = `
Given no inital state,
When user navigates to the web page,
Then user sees the static information
`;
describe(userStory, () => {
  beforeEach(() => {
    render(<App />);
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
  it("shows the phrase Work In Progress", () => {
    const text = screen.getByText("Work In Progress");
    expect(text).toBeInTheDocument();
  });
});
