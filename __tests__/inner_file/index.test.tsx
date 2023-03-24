/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom/extend-expect";
import "setimmediate";

import { render, screen } from "@testing-library/react";

import Home from "../../src/pages/index";

it("Should render hello text", () => {
  render(<Home blog={[]} portfolio={[]} totalCount={0} />);
  expect(screen.getByText("Welcome to Nextjs")).toBeInTheDocument();
});
