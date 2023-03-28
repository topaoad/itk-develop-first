import { render, fireEvent } from "@testing-library/react";
import React from "react";
import Add from "./Add";
import { Provider } from "react-redux";
import configureStore from "src/state/todosReduxindex";

describe("Add", () => {
  let store;

  beforeEach(() => {
    store = configureStore();
  });

  it("should add a todo", () => {
    const { getByText, getByTestId } = render(
      <Provider store={store}>
        <Add />
      </Provider>
    );

    const input = getByTestId("input");
    const button = getByText("追加");

    fireEvent.change(input, { target: { value: "test" } });
    fireEvent.click(button);

    expect(store.getState().todos).toHaveLength(1);
    expect(store.getState().todos[0].text).toBe("test");
  });
});
