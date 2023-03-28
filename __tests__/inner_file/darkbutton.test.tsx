/**
 * @jest-environment jsdom
 */

import { fireEvent, render } from "@testing-library/react";

import { DarkButton } from "./../../src/components/PageContainer/Darkbutton";

describe("DarkButton", () => {
  it("should toggle color scheme when clicked", () => {
    const { getByTitle } = render(<DarkButton />);
    const button = getByTitle("Toggle color scheme");
    expect(button).toHaveStyle("color: white;");
    fireEvent.click(button);
    expect(button).toHaveStyle("color: black;");
  });
});
