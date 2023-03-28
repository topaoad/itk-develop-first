import { render, screen } from "@testing-library/react";
import React from "react";

import { Header } from ".";

describe("Header", () => {
  test("renders the logo", () => {
    render(<Header />);
    const logo = screen.getByText("TK Portfolio");
    expect(logo).toBeInTheDocument();
  });

  test("renders the navigation links", () => {
    render(<Header />);
    const link1 = screen.getByText("Link1");
    const link2 = screen.getByText("Link2");
    const link3 = screen.getByText("Link3");

    expect(link1).toBeInTheDocument();
    expect(link2).toBeInTheDocument();
    expect(link3).toBeInTheDocument();
  });
});
