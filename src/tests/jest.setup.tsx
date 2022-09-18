// eslint-disable-next-line import/no-extraneous-dependencies
import "@testing-library/jest-dom/extend-expect";
import { ReactNode } from "react";
jest.mock("next/head", () => ({
  __esModule: true,
  default: ({ children }: { children: ReactNode[] }) => children
}));
jest.mock("../components/Chart", () => ({
  __esModule: true,
  default: () => <div>chart rendered</div>
}));
