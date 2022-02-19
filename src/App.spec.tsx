// Packages
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// Components
import App from "./App";

test("sum", () => {
  const { getByText } = render(<App />);

  expect(getByText("Luiz")).toBeInTheDocument();
  // expect(getByText("Henrique")).toHaveAttribute("class", "test");
});

describe("App Component", () => {
  it("should render list items", () => {
    const { getByText } = render(<App />);

    expect(getByText("Luiz")).toBeInTheDocument();
    expect(getByText("Henrique")).toBeInTheDocument();
    expect(getByText("de")).toBeInTheDocument();
  });

  it("should be able to add new item to the list", async () => {
    const { getByText, getByPlaceholderText, findByText } = render(<App />);

    const addButton = getByText("Adicionar");
    const inputElement = getByPlaceholderText("Novo Item");

    userEvent.type(inputElement, "Jesus"); // Adicionando value no input
    userEvent.click(addButton);

    expect(await findByText("Jesus")).toBeInTheDocument();
  });
});
