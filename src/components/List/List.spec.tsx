// Packages
import {
  render,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// Components
import List from "./index";

// Data
import { initialItems } from "../../shared/index";

test("sum", () => {
  const { getByText } = render(<List initialItems={initialItems} />);

  expect(getByText("Luiz")).toBeInTheDocument();
  // expect(getByText("Henrique")).toHaveAttribute("class", "test");
});

describe("List Component", () => {
  it("should render list items", () => {
    const { getByText } = render(<List initialItems={initialItems} />);

    expect(getByText("Luiz")).toBeInTheDocument();
    expect(getByText("Henrique")).toBeInTheDocument();
    expect(getByText("de")).toBeInTheDocument();
  });

  it("should be able to add new item to the list", async () => {
    const { getByText, getByPlaceholderText, findByText } = render(
      <List initialItems={initialItems} />
    );

    const addButton = getByText("Adicionar");
    const inputElement = getByPlaceholderText("Novo Item");

    userEvent.type(inputElement, "Jesus"); // Adicionando value no input
    userEvent.click(addButton);

    expect(await findByText("Jesus")).toBeInTheDocument();
  });

  it("should be able to remove item from the list", async () => {
    const { getByText, getAllByText, queryByText } = render(
      <List initialItems={initialItems} />
    );

    const removeButtons = getAllByText("Remover");

    userEvent.click(removeButtons[0]);

    await waitForElementToBeRemoved(() => {
      return getByText("Luiz");
    });
    await waitFor(() => {
      expect(queryByText("Luiz")).not.toBeInTheDocument();
    });
  });
});
